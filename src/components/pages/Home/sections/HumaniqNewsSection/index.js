import React, {Component} from 'react';
import * as T from "prop-types";
import A_Title_H from 'A_Title_H'
import A_Btn_H from 'A_Btn_H'
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('SE_Home_HumaniqNews')

class SE_Home_HumaniqNews extends Component {
  constructor() {
    super()
    this.state={items:{}};
  }

  componentDidMount(){
    fetch('https://api.buttercms.com/v2/content/?auth_token=b251deef79e07f942e09e2df3fb18755f90522f2&keys=humaniq_news')
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }

  render(){
    const { mix } = this.props

    if(typeof(this.state.items.data)==='undefined' || typeof(this.state.items.data.humaniq_news)==='undefined' || this.state.items.data.humaniq_news.length<1){
      return(
        <section className={cn([mix])}>
          Loading...
        </section>
      )
    }

    const newsItems = this.state.items.data.humaniq_news.slice(0,1).map((item) =>
      <div>
        <div><img src={item.preview_image} /></div>
        <div>{item.title}<br />{item.preview}</div>
      </div>
    );

    return (
      <section className={cn([mix])}>
        {newsItems}
      </section>
    )
  }
}

SE_Home_HumaniqNews.propTypes = {
  //news: T.array.isRequired
};

SE_Home_HumaniqNews.defaultProps = {}

export default SE_Home_HumaniqNews
