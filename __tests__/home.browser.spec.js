import nightmare from 'nightmare'

beforeAll(() => {
  window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
});


let page

describe('home page', () => {

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

  beforeEach(() =>{
    page = nightmare().goto('http://localhost:8080/contact-us')
  })


  it('shows page text', async () => {
    const text = await page
        .evaluate(() => document.body.textContent)
        .end()

    expect(text).toContain('Humaniq is proud of its wide partnership network')
  })
})


describe("Wiki page", () => {

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

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/hmq-explorer')
  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('umaniq token is the core of the banking ecosystem that the H')
  })
})

describe("Legal page", () => {

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/hmq-explorer')
  })

  it('shows page text', async () => {
    const text = await page
      .goto('http://localhost:8080/legal')
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Ensuring the security of our users’ data is our most important responsibility and we believe in')
  })
})

describe("Subscribe page", () => {

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

describe("Ambassadors form page", () => {

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/form/ambassadors')

  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Tell us about yourself and why you want to become an ambassador')
  })
})

describe("Use cases page", () => {

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/use-cases')

  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('The core idea behind Humaniq stands far beyond the regular banking. ')
  })
})

describe("Partners page", () => {

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/partners')

  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('We believe in the services that Humaniq partners provide, to support us in r')
  })
})

describe("Ambassadors page", () => {

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/ambassadors')

  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('We want to communicate directly with the people we wish to serve: the unbanked')
  })
})


describe("About", () => {

  beforeEach(() => {
    page = nightmare().goto('http://localhost:8080/about')

  })

  it('shows page text', async () => {
    const text = await page
      .evaluate(() => document.body.textContent)
      .end()
    expect(text).toContain('Today, two billion people around the world do not have access to banking')
  })
})