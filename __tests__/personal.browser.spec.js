import nightmare from 'nightmare'

beforeAll(() => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
});

describe('home page', () => {

  let page

  beforeEach(() =>{
    page = nightmare().goto('http://localhost:3000')
  })


  it('shows page text" ', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Invites you to join Humaniq. As soon as you complete the ')
  })
})

describe('registration page', () => {

  let page

  beforeEach(() =>{
    page = nightmare().goto('http://localhost:3000/registration')
  })


  it('shows page text" ', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Enter your phone number, so that onc')
  })
})