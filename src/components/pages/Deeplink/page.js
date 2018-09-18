import React, {Component} from 'react';
import $ from 'jquery'
import A_Btn from 'A_Btn'
const queryString = require('query-string');

class Deeplink extends Component {
  componentDidMount() {
    var downloadURL = 'https://play.google.com/store/apps/details?id=com.humaniq.lite';
    var redirectURL = '';

    if(typeof(location)!=='undefined'&&typeof(location.search)!=='undefined'&&location.search!==''){
      var parsedQuery = queryString.parse(location.search);

      if(typeof(parsedQuery)!=='undefined'&&parsedQuery!==null&&typeof(parsedQuery.l)!=='undefined'&&parsedQuery.l!==''){
        var allowedPatterns = [
          /^profile\/(main|edit)$/g,
          /^request$/g,
          /^send\/[A-z0-9]+$/g,
          /^chat\/[A-z0-9]+$/g,
          /^groupchat\/[A-z0-9]+$/g,
          /^bizchats$/g,
          /^bizchat\/biz_[A-z0-9]+$/g,
          /^stories$/g,
          /^story\/[A-z0-9]+$/g,
          /^support$/g,
        ];

        for(var i = 0; i < allowedPatterns.length; i++){
          if(allowedPatterns[i].test(parsedQuery.l)){
            redirectURL = parsedQuery.l;
            break;
          }
        }
      }
    }

    if(redirectURL!==''){
      redirectURL = 'humaniq://humaniq.com/' + redirectURL;
alert(redirectURL);

      $('#button-dl').attr({'action':downloadURL});
      $('#button-app').attr({'action':redirectURL});
      /*window.location = redirectURL;

      setTimeout(()=>{
        window.location = downloadURL;
      }, 1000);*/
    }else{
      $('#button-dl').hide();
      $('#button-app').hide();
      $('#errorDiv').show();
    }
  }

  render() {
    return (
      <div style={{"maxWidth":"768px", "margin":"0 auto", "padding":"15px"}}>
        <div id="errorDiv" style={{"color":"#f00", "textAlign":"center", "display":"none"}}>Wrong request!</div>
        <form id="button-dl" action="" method="GET" target="_blank">
            <A_Btn type="material-r-link-window" btnType="submit">Download</A_Btn>
        </form>
        <form id="button-app" action="" method="GET" target="_blank">
            <A_Btn type="material-r-link-window" btnType="submit">Open App</A_Btn>
        </form>
      </div>
    )
  }
}

export default Deeplink;
