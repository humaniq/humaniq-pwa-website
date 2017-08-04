import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
import { DropDownMenu, MenuItem } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {lightBlue50} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const cn = cssClassName('O_DropDownBlue');

const muiTheme = getMuiTheme({
  palette: {
    textColor: lightBlue50,
  },
  appBar: {
    height: 50,
  },
  menu: {
    backgroundColor: '#439fe0',
    color: 'white',
  },
  item: {
    backgroundColor: '#439fe0',
    color: 'white',
    fontWeight: 'bold',
    width: 1000,
    zIndex: 1,
  },
  underline: {
    borderTop: 'none',
  },
});

injectTapEventPlugin();

class O_DropDownBlue extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      isOpen: false,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const menuButtonOpen = {
      transform: 'rotate(180deg)',
      zIndex: 5000,
    };
    const menuButtonClose = {
      zIndex: 5000,
    };
    const { isOpen } = this.state;

    return (
      <div className={cn()}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <DropDownMenu
              className={cn('customWidth')}
              value={this.state.value}
              onChange={this.handleChange}
              style={muiTheme.menu}
              iconStyle={ isOpen ? menuButtonOpen : menuButtonClose }
              onClick={() => this.setState({ isOpen: !isOpen })}
              onClose={() => this.setState({ isOpen: false })}
              underlineStyle={{display: 'none'}}
              selectedMenuItemStyle={{color: '#fff', fontWeight: '100'}}
            >
              <MenuItem style={muiTheme.item} value={1} primaryText="User Terms of Service" />
              <MenuItem style={muiTheme.item} value={2} primaryText="Customer Terms of Service" />
              <MenuItem style={muiTheme.item} value={3} primaryText="General Privacy Policy" />
              <MenuItem style={muiTheme.item} value={4} primaryText="Data Privacy" />
            </DropDownMenu>
        </MuiThemeProvider>
      </div>
    );
  }
}

O_DropDownBlue.propTypes = {};

export default O_DropDownBlue;