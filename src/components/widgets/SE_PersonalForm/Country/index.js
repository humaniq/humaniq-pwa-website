import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_PersonalFormCountry')

class SE_PersonalFormCountry extends Component {

  state = {
    query: ''
  };

  getFilteredCountries = (countryCodes) => {
    const { query } = this.state;

    if (query === '') {
      return countryCodes;
    }
    return countryCodes.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
  }

  renderFilteredCountries = (countryCodes) => {
    const filteredCountries = this.getFilteredCountries(countryCodes);
    return (
      <ul className={cn('list')}>
        {filteredCountries.map(this.renderCountry)}
      </ul>
    )
  }

  onSubmit = (name) => {
    const {countryCodes} = this.props
    countryCodes.filter(countryCode => countryCode.name.toLowerCase().includes(name.toLowerCase()))

    let countryObj = countryCodes.find(с => с.name.toLowerCase() === name.toLowerCase())
    if(!countryObj) {
      countryObj = countryCodes.find(с => с.name.toLowerCase().startsWith(name.toLowerCase()))
    }
    let _contryName = countryObj.name
    if(!_contryName){
      _contryName = countryCodes[0].name
    }
    this.props.handleSubmit(_contryName)



  }

  renderCountry = ({ name, dial_code, code }) => (
    <li className={cn('code-li')} key={code}>
      <span className={cn('code-link')} onClick={() => this.onSubmit(name)} >
        {name}
        <span className={cn('code-number')}>{dial_code}</span>
      </span>
    </li>
  )


  render() {
    const {show, countryCodes} = this.props

    return (
      <div>
        {show &&
          <div>
            <section
              className={cn('modal-overlay')}

            >
              <form className={cn('country-form')} onSubmit={e => {
                e.preventDefault()
                this.onSubmit(this.state.query)
              }}>
                <div className={cn('form-head')}>
                  <h3 className={cn('form-title')}>Country</h3>
                  <button className={cn('form-close-bt')} onClick={() => this.onSubmit(this.state.query)}>Close</button>
                </div>
                <div className={cn('country-codes')}>
                  <input
                    type="text"
                    className={cn('search-input')}
                    onChange={e => this.setState({query: e.target.value})}
                    placeholder="Search"
                  />
                  {this.renderFilteredCountries(countryCodes)}
                </div>
              </form>
            </section>
          </div>


        }
      </div>
    )
  }
}

SE_PersonalFormCountry.propTypes = {
  countryCodes: T.array.isRequired,
  show: T.bool
};

SE_PersonalFormCountry.defaultProps = {
  show: false,
  countryCodes: []
}

export default SE_PersonalFormCountry