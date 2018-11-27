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
    fetch('https://api.staging.finlyt.com/hmq-admin-api/api/v1/public/humaniq-news/list?type=news&limit=3&offset=0')
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }

  render(){
    const { mix } = this.props

    if(typeof(this.state.items)==='undefined' || typeof(this.state.items.data)==='undefined' || this.state.items.data.length<1){
      return(
        <section className={cn([mix])}>
          Loading...
        </section>
      )
    }

    const newsItems = this.state.items.data.map((item) =>
      <div style={{"padding":"10px", "border":"1px solid #000"}}>
        <div><img src={item.image_url} style={{"max-width":"300px"}} /></div>
        <div>{item.title}<br />{item.preview}</div>
      </div>
    );

    return (
      <section className={cn([mix])}>
        {newsItems}
        <div className="clearfix"></div>
      </section>
    )
  }
}

export default SE_Home_HumaniqNews
