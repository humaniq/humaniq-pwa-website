export function submit(formName, formData) {
  return ({
    type: 'SUBMIT_FORM',
    data: {
      form: formName,
      data: formData
    }
  })
}