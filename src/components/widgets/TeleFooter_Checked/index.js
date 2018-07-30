import React from 'react'
import axios from 'axios';
import Intercom from "react-intercom";
import TeleFooter from "../TeleFooter";

class TeleFooterChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  componentDidMount() {
    axios.get("https://json.geoiplookup.io/")
            .then(res => {
              console.log(res.data);
              if (res.data.continent_code != 'AF') this.setState({isHidden: false});
            })
            .catch(function (error) {
                // handle error
              this.setState({isHidden: false});
              console.log(error);
            });
  }

  render() {
    return (
        <div>
        { this.state.isHidden ? ""
            :
            <div>
                <Intercom appID="y9l4iy41" />
                <TeleFooter/>
            </div>
        }
        </div>
    );
  }
}

export default TeleFooterChecked;
