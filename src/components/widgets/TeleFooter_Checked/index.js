import React from 'react'
import axios from 'axios';
import Intercom from "react-intercom";
import TeleFooter from "../TeleFooter";

class TeleFooterChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TelegaIsHidden: true,
      IntercomIsHidden: true
    };
  }

  componentDidMount() {
    axios.get("https://json.geoiplookup.io/")
            .then(res => {
              console.log(res.data);
              if (res.data.continent_code != 'AF') this.setState({TelegaIsHidden: false,IntercomIsHidden:false});
            })
            .catch( error => {
                // handle error
              this.setState({TelegaIsHidden: true,IntercomIsHidden:false});
              console.log(error);
            });
  }

  render() {
    return (
        <div>
        { this.state.TelegaIsHidden && this.state.IntercomIsHidden ? ""
            :
            <div>
                { this.state.IntercomIsHidden ? "" : <Intercom appID="y9l4iy41" /> }
                { this.state.TelegaIsHidden ? "" : <TeleFooter/> }
            </div>
        }
        </div>
    );
  }
}

export default TeleFooterChecked;
