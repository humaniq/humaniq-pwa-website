import React, {Component} from 'react';
import $ from 'jquery'
import A_Btn from 'A_Btn'
const queryString = require('query-string');

class Deeplink extends Component {
  componentDidMount() {
    var downloadURL = 'https://play.google.com/store/apps/details?id=com.humaniq.lite';
    var redirectURL = 'chat/hmq_assistbot';

    if(typeof(location)!=='undefined'&&typeof(location.search)!=='undefined'&&location.search!==''){
      var parsedQuery = queryString.parse(location.search);

      if(typeof(parsedQuery)!=='undefined'&&parsedQuery!==null&&typeof(parsedQuery.l)!=='undefined'){
        redirectURL = parsedQuery.l;
      }
    }

    redirectURL = 'humaniq://humaniq.com/' + redirectURL;

    $('#button-dl').attr({'action':downloadURL}); 
    $('#button-app').attr({'action':redirectURL}); 

    window.location = 'humaniq://humaniq.com/' + redirectURL;
    
    setTimeout(()=>{
      window.location = downloadURL;
    }, 1000);
  }

  render() {
    return (
      <div style={{"maxWidth":"768px", "margin":"0 auto", "padding":"15px"}}>
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
