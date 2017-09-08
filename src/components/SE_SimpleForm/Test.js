import React, {Component} from 'react';
import A_InputText from 'A_InputText'
import SimpleForm from 'HOC/SimpleForm';


const config = {
  // fieldNames: ['firstName', 'lastName', 'email', 'webSite', 'bio', 'word'],
  fieldNames: ['firstName', 'lastName'],

  validations: {
    firstName: 'required',
    lastName: ['required', {type: 'maxLengh', option: 5}],
    email: ['required', 'email'],
    webSite: ['url'],
    bio: {type: 'maxLengh', option: 5},
    word: 'required'
  },
  customErrors: {
    lastName: {
      maxLengh: max => `Last name can't be longer then ${max}`
    },
    word: 'type the word'
  }
}
class Test extends Component {

  render() {
    const {handeSubmit, fields} = this.props

    return (
      <div>
        форма
        <form  onSubmit={handeSubmit}>
          <A_InputText
            value = {fields['firstName'].value}
            onChange
            label = {'firstName'}
            placeholder = {'placeholder'}
            error = {fields['firstName'].error}
            handleChange = {
              text => this.props.onFieldChange('firstName', text)
            }
          />
          <A_InputText
            value = {fields['lastName'].value}
            onChange
            label = {'lastName'}
            placeholder = {'lastNameplaceholder'}
            error = {fields['lastName'].error}
            handleChange = {
              text => this.props.onFieldChange('lastName', text)
            }
          />
          {/*<A_InputText*/}
            {/*value = {fields['email'].value}*/}
            {/*onChange*/}
            {/*label = {'emaillabel'}*/}
            {/*placeholder = {'emailplaceholder'}*/}
            {/*error = {fields['email'].error}*/}
            {/*handleChange = {*/}
              {/*text => this.props.onFieldChange('email', text)*/}
            {/*}*/}
          {/*/>*/}
          {/*<A_InputText*/}
            {/*value = {fields['webSite'].value}*/}
            {/*onChange*/}
            {/*label = {'label'}*/}
            {/*placeholder = {'placeholder'}*/}
            {/*error = {fields['webSite'].error}*/}
            {/*handleChange = {*/}
              {/*text => this.props.onFieldChange('webSite', text)*/}
            {/*}*/}
          {/*/>*/}
          {/*<A_InputText*/}
            {/*value = {fields['bio'].value}*/}
            {/*onChange*/}
            {/*label = {'bio'}*/}
            {/*placeholder = {'bioplaceholder'}*/}
            {/*error = {fields['bio'].error}*/}
            {/*handleChange = {*/}
              {/*text => this.props.onFieldChange('bio', text)*/}
            {/*}*/}
          {/*/>*/}
          {/*<A_InputText*/}
            {/*value = {fields['word'].value}*/}
            {/*onChange*/}
            {/*label = {'label'}*/}
            {/*placeholder = {'placeholder'}*/}
            {/*error = {fields['word'].error}*/}
            {/*handleChange = {*/}
              {/*text => this.props.onFieldChange('word', text)*/}
            {/*}*/}
          {/*/>*/}
          <button onClick={handeSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SimpleForm(Test, config)
