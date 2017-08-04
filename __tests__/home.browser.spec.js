import nightmare from 'nightmare'

beforeAll(() => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
});


describe('home page', () => {

  let page

  beforeEach(() =>{
    page = nightmare().goto('http://localhost:8080')
  })


  it('shows page text" ', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Empowering 3.5 Billion People in the world economy')
  })
})

describe('Open Source page', () => {

  let page

  beforeEach(() =>{
    page = nightmare().goto('http://localhost:8080/open-source')
  })


  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
      expect(text).toContain('Humaniq relies on open-source software and likes to give back to the community.')
    })
})


describe('Contact Us page', () => {

  let page

  beforeEach(() =>{
    page = nightmare().goto('http://localhost:8080/contact-us')
  })


  it('shows page text', async () => {
    const text = await page
        .evaluate(() => document.body.textContent)
        .end()

    expect(text).toContain('Humaniq is powered both by the Blockchain, and by our community,')
  })
})


describe("Wiki page", () => {
  let page

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/wiki')
  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Humaniq global initiative plan involves a lot of research')
  })
})

describe("HQM Explorer page", () => {
  let page

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/hmq-explorer')
  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('umaniq token is the core of the banking ecosystem that H')
  })
})

describe("Legal page", () => {
  let page

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/hmq-explorer')
  })

  it('shows page text', async () => {
    const text = await page
      .goto('http://localhost:8080/legal')
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Humaniq is proud of its wide partnership network which includes everybody fro')
  })
})

describe("Subscribe page", () => {
  let page

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/form/subscribe')

  })

  it('shows page text', async () => {
      const text = await page
        .evaluate(() => document.body.textContent)
        .end()
      expect(text).toContain('Subscribe to our newsletter')
  })
})

describe("Partners form page", () => {
  let page

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/form/join')

  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('ell us about what you’re working on and we’ll get back to you.')
  })
})


describe("Use cases page", () => {
  let page

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/use-cases')

  })

  it('shows page text', async () => {
    const text = await page
      .goto('http://localhost:8080/use-cases')
      .evaluate(() => document.body.textContent)
      .end()
      expect(text).toContain('The core idea behind Humaniq stands far beyond the regular banking. ')
  })
})



