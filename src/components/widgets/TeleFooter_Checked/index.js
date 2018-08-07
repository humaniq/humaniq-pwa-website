import React from 'react'
import axios from 'axios';
import TeleFooter from "../TeleFooterSquare";

class TeleFooterChecked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TelegaIsHidden: true,
      IntercomIsHidden: true
    };
  }

  TelegaIsHidden = true;
  IntercomIsHidden = true;
  checkCompleted = false;
  IntercomIsBooted = false;

  handleScroll = (e) => {
    if(window.scrollY > 300) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
      if(this.checkCompleted) {
        this.setState({TelegaIsHidden: this.TelegaIsHidden,IntercomIsHidden:this.IntercomIsHidden});
        if(!this.IntercomIsHidden){
          window.Intercom("boot", { app_id: "y9l4iy41"});
        }
        this.checkCompleted = false;
      }
    }
  }

  handleWheel = (e) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
    if(e.deltaY > 300) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
      if(this.checkCompleted) {
        this.setState({TelegaIsHidden: this.TelegaIsHidden,IntercomIsHidden:this.IntercomIsHidden});
        if(!this.IntercomIsHidden){
          window.Intercom("boot", { app_id: "y9l4iy41"});
        }
        this.checkCompleted = false;
      }
    }
  }


  componentDidMount() {
    axios.get("https://ipapi.co/json/")
            .then(res => {
              console.log(res.data.continent_code);
              if (res.data.continent_code != 'AF') {
                //this.setState({TelegaIsHidden: false,IntercomIsHidden:false});
                this.TelegaIsHidden = false;
                this.IntercomIsHidden = false;
                this.checkCompleted = true;
              }
            })
            .catch( error => {
                // handle error
              //this.setState({TelegaIsHidden: true,IntercomIsHidden:false});
              this.TelegaIsHidden = true;
              this.IntercomIsHidden = false;
              this.checkCompleted = true;
              console.log(error);
            });
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('onwheel', this.handleWheel);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('onwheel', this.handleWheel);
  }

//  window.Intercom("boot", { app_id: "y9l4iy41"});

//<Intercom appID="y9l4iy41" />

  render() {
    return (
        <div onWheel={this.handleWheel} ref={(ref) => this.wrapper = ref} >
            { this.state.TelegaIsHidden ? "" : <TeleFooter/> }
            { this.props.offsetY ? <TeleFooter/> : "" }
        </div>
    );
  }
}

export default TeleFooterChecked;
