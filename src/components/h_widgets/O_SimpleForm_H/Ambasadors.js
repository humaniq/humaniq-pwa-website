import React , { Component } from 'react';
import {cssClassName} from 'utils';
import A_InputText_H from 'A_InputText_H';
import A_Textarea_H from 'A_Textarea_H';
import A_Title_H from 'A_Title_H'
import A_Btn_H from 'A_Btn_H';
import SimpleForm from 'HOC/SimpleForm';
import Dropdown from './Dropdown'
import './styles.scss';


const cn = cssClassName('O_SimpleForm_H')

const HOC_CONFIG = {
  fieldNames: ['email', 'name', 'country','bio'],
  validations: {
    email: ['required', 'email'],
    name: 'required',
    country: 'required',
    bio: 'required',
  },
}


class O_AmbasadorsForm extends Component {

  render() {
    const { mix, formHasErrors, handleSubmit, submited } = this.props;

    return (
      <div>
        {
          submited ?
            <A_Title_H
              mix={cn('title')}
            >
              Thank you for your application!
            </A_Title_H>
            :
              <form className={cn([mix])} onSubmit={handleSubmit}>

                <A_InputText_H
                  value={this.props.fields['email'].value}
                  onChange
                  placeholder='email'
                  label='email'
                  error={this.props.fields['email'].error}
                  handleChange={
                    text => this.props.onFieldChange('email', text)
                  }
                />

                <A_InputText_H
                  value={this.props.fields['name'].value}
                  onChange
                  placeholder='Your name'
                  label='Your name'
                  error={this.props.fields['name'].error}
                  handleChange={
                    text => this.props.onFieldChange('name', text)
                  }
                />

                <Dropdown
                  label="Country"
                  placeholder="Choose country"
                  selected={this.props.fields['country'].value}
                  value={this.props.fields['country'].value}
                  options={countries}
                  onChange={country => this.props.onFieldChange('country', country)}
                  error={this.props.fields['country'].error}
                />

                <A_Textarea_H
                  value={this.props.fields['bio'].value}
                  onChange
                  label='Bio'
                  placeholder='Bio'
                  error={this.props.fields['bio'].error}
                  handleChange={
                    text => this.props.onFieldChange('bio', text)
                  }
                />

                <A_Btn_H
                  mix={cn('submit-btn')}
                  error={formHasErrors}
                  type='submit'
                >
                  {formHasErrors ? 'Check errors' : 'Continue'}
                </A_Btn_H>

              </form>
        }
      </div>

    )
  }
}

export default SimpleForm(O_AmbasadorsForm, HOC_CONFIG)

const countries = ["Afghanistan",
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
  "Zimbabwe"]