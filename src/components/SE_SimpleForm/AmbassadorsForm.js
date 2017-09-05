import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('SE_SimpleForm');
import * as T from "prop-types";
import FormHoc from 'HOC/FormHoc';
import A_H from 'A_H';
import A_P from 'A_P';
import A_InputText from 'A_InputText';
import A_Textarea from 'A_Textarea'
import Header from './Header';
import A_Btn from 'A_Btn';
import Dropdown from './Dropdown';

// "email": "harry@hogwarts.com",
//   "name": "Harry Potter",
//   "country": "England",
//   "bio": "Harry likes selling magic cookies"

const fieldsSettings = [
  {
    type: 'input',
    name: 'email',
    label: 'Email',
    placeholder: 'your@email.com',
    validationRules: {
      isEmail: 'default error',
      required: 'default error',
    }
  },
  {
    type: 'input',
    name: 'name',
    label: 'Your name',
    placeholder: 'Bob Smith',
    validationRules: {
      required: 'Please fill out your full name',
    }
  },
  {
    type: 'dropdown',
    name: 'country',
    label: 'Country',
    placeholder: 'Choose country',
    validationRules: {
      required: 'Please choose your country',
    }
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'Bio',
    placeholder: 'Tell us about yourself. Why would you like to become an ambassador? (Maximum length is 500 characters)',
    validationRules: {
      required: 'Please fill bio field',
      ranged: {max: 500}
    }
  }
];

class SE_SimpleFormAmbassadorsForm extends Component {

  componentWillMount() {
    this.props.throwHocStateData(fieldsSettings);
  }


  render() {
    const {errors, submitted, onSubmit:{handleSubmit}}  = this.props;

    const fields = fieldsSettings.map(({type, name, label, placeholder}) => {
      switch (type) {
        case 'input':
          return (
          <A_InputText
            key = {name}
            value = {this.props.values[name] || ''}
            onChange
            label = {label}
            placeholder = {placeholder}
            error = {errors[name]}
            handleChange = {
              text => this.props.onChange(name, text)
            }
          />
          );
        case 'textarea':
          return(
            <A_Textarea
              key = {name}
              value = {this.props.values[name] || ''}
              onChange
              label = {label}
              placeholder= {placeholder}
              multiLine={true}
              rows = {2}
              rowsMax = {8}
              error = {errors[name]}
              handleChange = {
                text => this.props.onChange(name, text)
              }
            />
          );
        case 'dropdown':
          return(
            <Dropdown
              key = {name}
              selected = {this.props.values[name] || ''}
              label = {label}
              placeholder= {placeholder}
              options = {countries}
              error = {errors[name]}
              onChange = {
                country => this.props.onChange(name, country)
              }
            />
          );
      }
    });

    return (
      <form className={cn('form')} onSubmit={this.props.onFormSubmit}>
        <Header>
          {submitted ||
            <A_Btn
              onClick={this.props.onSubmit(handleSubmit)}
              type='personal-nav-btn'
            >Send</A_Btn>
          }
        </Header>
        {submitted ? (
          <div className={cn('body')}>
            <A_H type='window'>Thank you!</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Your application has been received. We are carefully reviewing your profile, and will contact you within the few days. Thank you for your application!</A_P>
            </div>
            <div className={cn('final-btn')}>
              <A_Btn type="material-r-link-window" to="/">Go back to Humaniq</A_Btn>
            </div>
          </div>
        ) : (
          <div className={cn('body')}>
            <A_H type='window'>Apply for Humaniq</A_H>
            <div className={cn('text')}>
              <A_P type='third'>Tell us about yourself and why you want to become an ambassador, and we'll get back to you.</A_P>
            </div>
            {fields}
          </div>
        )}
      </form>
    )
  }
}

SE_SimpleFormAmbassadorsForm.propTypes = {
  handleSubmit: T.func.isRequired
};

export default FormHoc(SE_SimpleFormAmbassadorsForm);

const countries = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "AmericanSamoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands (Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See (Vatican City State)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran,",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libyan Arab Jamahiriya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestinian Territory, Occupied",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Reunion",
  "Saint Barthelemy",
  "Saint Helena, Ascension and Tristan Da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "South Georgia and the South Sandwich Islands",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Islands, British",
  "Virgin Islands, U.S.",
  "Wallis and Futuna",
  "Yemen",
  "Zambia",
  "Zimbabwe"];