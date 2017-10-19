import React, { Component } from 'react';
import * as d3 from 'd3';
//import sizeMe from 'react-sizeme';
import isEqual from 'lodash.isequal';
import './D3Chart.scss';


class D3Chart extends Component {

  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.saveContainer = this.saveContainer.bind(this);
  }

  componentDidMount() {


    // don't know wh
    // this.tickFormat = function (date) {
    //     if(date.getDay() && date.getDate() !== 1) return d3.timeFormat("%d.%m")(date);
    //     if(date.getDate() !== 1) return d3.timeFormat("%d.%m")(date);
    //     if(date.getMonth()) return d3.timeFormat("%B")(date);
    //     return d3.timeFormat("%Y")(date);
    // }

    this.margin = {
      top: +this.props.height / 5,
      right: 5,
      bottom: 0,
      left: 5,
    };


    this.width = +this.props.width;
    this.height = +this.props.height - this.margin.top;
    //this.height = (this.width / this.props.aspectRatio) - this.margin.top - this.margin.bottom;



    this.svg = d3.select(this.container)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom);


    if (!this.props.isSmall) {

      this.svg.append("rect")
        .attr("width", this.width + this.margin.left + this.margin.right)
        .attr("height", this.height + this.margin.top)
        .style("fill", "#F1F6FA");

      this.tooltip = d3.select(this.container).append('div')
        .attr('class', 'se-hmq-hero-chart__tooltip-wrapper')
        .style('opacity', 0)
      this.tooltip
        .append('div')
        .attr('class', 'se-hmq-hero-chart__tooltip-root se-hmq-hero-chart__tooltip-root_type_top')
    }

    this.xScale = d3.scaleTime()
      .range([0, this.width]);

    this.yScale = d3.scaleLinear()
      .range([this.height, 0]);

    this.focus = this.svg.append('g')
      .attr("class", "focus")
      .attr('transform', "translate(" + [this.margin.left, this.margin.top] + ")");




    let axisGroup = this.svg.append("g")
      .attr("transform",
        "translate(" + [this.margin.left, this.margin.top] + ")");

    axisGroup.append("g")
      .attr("class", "xAxis")
      .attr("transform", "translate(0," + this.height + ")");

    axisGroup.append("g")
      .attr("class", "yAxis");

    axisGroup.append('g')
      .attr('class', 'grid')
      .style("pointer-events", "none")


    this.focus
      .append('path')
      .attr('class', 'path')

    this.focus
      .append('path')
      .attr('class', 'line')

    this.background = this.focus.append("rect")
      .attr("y", -this.margin.top)
      .attr("width", this.width)
      .attr("height", this.height + this.margin.top)
      .style("opacity", 0);


    this.tipCircle = this.focus.append('circle')
      .attr('class', 'dot')
      .attr('r', 4)
      .style("pointer-events", "none")
      .style("opacity", 0);


    this.draw(this.props);
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  componentWillUpdate(nextProps) {
    this.draw(nextProps);
  }

  draw(props) {

    const component = this;

    const t = d3
      // .transition()
      // .duration(500);

    const parse = d3.timeParse('%Y-%m-%d, %H:%M:%S');
    // const format = d3.timeFormat('%S.%M.%H.%d.%m.%Y');

    let data = props.data.map(function (d) {
      return {
        date: parse(d.date),
        value: +d.value,
        dateShow: d.dateShow,
        valueShow: d.valueShow

      }
    });
    //YYYY-MM-DD, HH:mm:ss
    const rangeXdata = d3.extent(data, d => d.date);

    const domainX = rangeXdata;

    this.xScale.domain(domainX);

    const domainY = [0, d3.max(data.map(d => d.value))];

    this.yScale.domain(domainY);

    // const formatY = (value) => {
    //   if (value < 1) {
    //     return value.toFixed(2);
    //   } else if (value < 10 && value % 1 === 0) {
    //     return value.toFixed(0);
    //   }
    //   return d3.format('.2s')(value);
    // };

    const line = d3.line()
      .x(d => component.xScale(d.date))
      .y(d => component.yScale(d.value));

    const area = d3.area()
      .x(d => component.xScale(d.date))
      .y0(this.height)
      .y1(d => component.yScale(d.value));


    if (props.useArea) {
      this.focus.select(".path")
        .transition(t)
        .attr('d', area(data));
    }

    this.mainLine = this.focus.select(".line")
      .transition(t)
      .attr('d', line(data));

    /* circles */
    if (!this.props.isSmall) {

      // let circles = this.circlegroup.selectAll('.dot')
      //   .data(data)

      // circles.exit().remove();

      // let circlesEnter = circles.enter().append('circle')
      //   .attr('class', 'dot')
      //   .attr('cx', d => component.xScale(d.date))
      //   .attr('cy', d => component.yScale(d.value))
      //   .attr('r', () => 4)
      //   .style("opacity", 0);


      // circles.merge(circlesEnter)
      //         .transition(t)
      //         .attr('cx', d => component.xScale(d.date))
      //         .attr('cy', d => component.yScale(d.value));

      // circlesEnter
      //   .on('mouseover', function (d) {
      //     component.tooltip.select(".m-tooltip__root")
      //       .html(`<b>Value: </b>${formatY(d.value)}<br/><b>Date: </b>${format(d.date)}`)

      //     component.tooltip   //d3.event.pageX d3.mouse(this)[0]
      //       // .style('left', `${+d3.select(this).attr('cx') - 96}px`)
      //       // .style('top', `${+d3.select(this).attr('cy') - 25}px`)
      //       .style('left', `${+d3.event.pageX - 96}px`)
      //       .style('top', `${+d3.event.pageY - 85}px`)
      //       // .style('left', `${+d3.mouse(this)[0] - 96}px`)
      //       // .style('top', `${+d3.mouse(this)[1] - 25}px`)
      //       .transition()
      //       .duration(200)
      //       .style('opacity', 1);

      //     d3.select(this).attr('r', 4)
      //       .style('opacity', 1);
      //   })
      //   .on('mouseout', function () {
      //     component.tooltip
      //       .transition()
      //       .duration(500)
      //       .style('opacity', 0);

      //     d3.select(this).attr('r', 4)
      //       .style('opacity', 0);

      //   });

      this.background.on('mousemove', function () {

        // var xPos = d3.mouse(this)[0];

        // var pathLength = component.mainLine.node().getTotalLength();
        // var x = xPos;
        // var beginning = x,
        //     end = pathLength,
        //     target,
        //     pos;
        // while (true) {
        //     target = Math.floor((beginning + end) / 2);
        //     pos = component.mainLine.node().getPointAtLength(target);
        //     if ((target === end || target === beginning) && pos.x !== x) {
        //         break;
        //     }
        //     if (pos.x > x) end = target;
        //     else if (pos.x < x) beginning = target;
        //     else break; //position found
        // }

        // component.tooltip.select(".m-tooltip__root")
        //   .html(`<b>Value: </b>${formatY(component.yScale.invert(pos.y))}<br/><b>Date: </b>${format(component.xScale.invert(pos.x))}`)
        //   //.html("background")

        // component.tooltip   //d3.event.pageX d3.mouse(this)[0]
        //   .style('left', `${+d3.event.pageX - 96}px`)
        //   .style('top', `${+d3.event.pageY - 85}px`)
        //   .transition()
        //   .duration(200)
        //   .style('opacity', 1);

        let bisectDate = d3.bisector(function(d) { return d.date; }).left;

        let x0 = component.xScale.invert(d3.mouse(this)[0]),
          i = bisectDate(data, x0, 1),
          d0 = data[i - 1],
          d1 = data[i],
          d = x0 - d0.date > d1.date - x0 ? d1 : d0;

        component.tooltip.select(".se-hmq-hero-chart__tooltip-root")
          .html(`<b>Value: </b>${d.valueShow}<br/><b>Date: </b>${d.dateShow}`)

        component.tooltip   //d3.event.pageX d3.mouse(this)[0]
          .style('left', `${+component.xScale(d.date) - 95}px`)
          .style('top', `${+component.yScale(d.value) -5}px`)
          // .style('left', `${+d3.event.pageX - 96}px`)
          // .style('top', `${+d3.event.pageY - 85}px`)
          // .style('left', `${+d3.mouse(this)[0] - 96}px`)
          // .style('top', `${+d3.mouse(this)[1] - 25}px`)
          .transition()
          .duration(500)
          .style('opacity', 1);


        component.tipCircle.attr('cx', component.xScale(d.date))
          .attr('cy', component.yScale(d.value))
          .style("opacity",1);


        // focus.select("circle.y")
        //     .attr("transform",
        //           "translate(" + x(d.date) + "," +
        //                         y(d.value) + ")");

      })
        .on('mouseout', function () {
          component.tooltip
            .transition()
            .duration(500)
            .style('opacity', 0);

          component.tipCircle.style("opacity",0);

        });




    }

  }

  saveContainer(container) {
    this.container = container;
  }

  render() {
    return (
      <div ref={this.saveContainer} />
    );
  }

}

D3Chart.defaultProps = {
  isSmall: false,
  xTicks: 5,
  aspectRatio: 2.36,
  upperBorder: 1,
  useArea: true,
  title: '',
};
// { monitorHeight: true }
//export default sizeMe()(Chart);
export default D3Chart;
