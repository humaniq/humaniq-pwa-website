import React , { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Country');


class O_Country extends Component {
  state = {
    query: '',
    show: false,
  };

  getFilteredCountries = () => {
    const { query } = this.state;
    const { countries } = this.props;

    if (query === '') {
      return countries;
    }
    return countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
  };

  renderFilteredCountries = () => {
    const filteredCountries = this.getFilteredCountries();
    return (
      <ul>
        {filteredCountries.map(this.renderCountry)}
      </ul>
    )
  };

  renderCountry = ({ name, code }) => (
    <li className={cn('code-li')}>
      <a className={cn('code-link')} href="javascript:void(0);">{name}<span className={cn('code-number')}>{code}</span></a>
    </li>
  );

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        <button className={cn('link')} onClick={this.showModal}>SHOW SUBSCRIBE MODAL</button>


        { show &&
          <section
            className={cn('modal-overlay')}
          >
            <form className={cn('country-form')} action="">
              <div className={cn('form-head')}>
                <h3 className={cn('form-title')}>Country</h3>
                <button className={cn('form-close-bt')} onClick={this.hideModal}>Close</button>
              </div>
              <div className={cn('country-codes')}>
                <input
                  type="text"
                  className={cn('search-input')}
                  onChange={e => this.setState({ query: e.target.value })}
                  placeholder="Search"
                />
                <button className={cn('search-input-bt')}>
                  <svg className={cn('search-input-icon')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
                    <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
                      <path fill="none" d="M0 0h20v20H0z"/>
                      <path className={cn('path')} d="M13.54 12.2l-1.429 1.4 4.906 4.907a.995.995 0 0 0 1.418.003.997.997 0 0 0 0-1.414L13.539 12.2z"/>
                      <circle className={cn('circle')} cx="8" cy="8" r="6.5"/>
                    </g>
                  </svg>
                </button>
                { this.renderFilteredCountries() }
              </div>
            </form>
            <button className={cn('modal-close')} onClick={this.hideModal}>
              <div>&nbsp;</div>
            </button>
          </section>
        }
      </div>
    )
  }
}

O_Country.defaultProps = {
  countries: [
    { name: 'Abkhazia', code: '+7 840' },
    { name: 'Moldova', code: '+373' },
    { name: 'Angola', code: '+244' },
    { name: 'Afghanistan', code: '+93' },
    { name: 'Albania', code: '+355' },
  ],
};

O_Country.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
    }),
  )
};

export default O_Country