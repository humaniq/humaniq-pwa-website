import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('HumaniqReport2018');
import A_H from 'A_H';
import A_P from 'A_P';
import A_Link from 'A_Link';
import O_Hero from 'O_Hero'
import ScriptLoader from 'react-load-script'
import A_Btn from 'A_Btn'

class HumaniqReport2018 extends Component {
  componentDidMount() {
    $('#book-container').html('<div id="report-book"></div>');
    $('#show-book').on('click', function(){return false;});
  }

  render() {
    return (
      <div className={cn('section-wrapper')}>

        <link rel="stylesheet" type="text/css" href="https://humaniq.com/wow_book/wow_book.css" />
        <ScriptLoader
          url="https://humaniq.com/wow_book/combine.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />

        <A_Container type='equal'>
          <O_Hero>
            <A_H type='hero'>Humaniq Annual Report</A_H>
            <A_P type='hero'>Business Results Since the Token Sale (2016 - Q3 2018)</A_P>
            <img src="/img/report-2018/Humaniq_AR_edit_261018-1-2.jpg" id="show-book" type="material-r-link-window" style={{"max-width":"100%"}}>
          </O_Hero>

          <div style={{"float":"left"}}>            
            <!-- <A_Btn id="show-book" type="material-r-link-window">Show report</A_Btn> -->
            <A_Btn href="/static/humaniq_report_16-18.pdf" target="_blank">Download PDF</A_Btn>
          </div>
          <div className="clearfix"></div>
          <div id="book-container" className={cn('humaniqreport2018')}>
            
          </div>
        </A_Container>
      </div>
    )
  }

handleScriptLoad() {
  //console.log(window.PDFJS);
}

}

export default HumaniqReport2018;
