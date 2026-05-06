# Humaniq Website v2.0

Humaniq is a simple and secure 4th generation mobile banking app, based on [Ethereum](https://ethereum.org/) technologies. Safe and strong, this tool of financial inclusion connects 2 billion unbanked people to the global economy. 

Our new version of the website is built on the [PWA technology](https://developers.google.com/web/progressive-web-apps/) to provide our users an ability to safely search the website without any internet connection. 

## Features

Current website provides following functionality:

* Wiki — Humaniq collects a huge knowledge base, indexes it and exposes to the public, for everyone's view. 
* Blockchain Explorer — Humaniq has implemented our own blockchain explorer, that allows everyone to watch HMQ token live and in action.

## Bug Bounty Program

Humaniq maintains an active bug bounty program to ensure the security and reliability of our platform. We welcome security researchers and developers to help us identify vulnerabilities and improve our systems.

### Scope
Our bug bounty program covers:
- Web application security vulnerabilities
- Smart contract vulnerabilities
- API security issues
- Authentication and authorization flaws
- Data validation issues

### Reporting
To report security vulnerabilities, please email us at [security@humaniq.com](mailto:security@humaniq.com) with:
- Detailed description of the vulnerability
- Steps to reproduce
- Potential impact assessment
- Any supporting evidence (screenshots, logs, etc.)

### Guidelines
- Please allow reasonable time for us to investigate and address reported issues
- Do not access, modify, or delete data that doesn't belong to you
- Do not perform actions that could harm our users or systems
- Do not publicly disclose vulnerabilities until they have been resolved

## Contacts

Feel free to email us at [info@humaniq.com](mailto:info@humaniq.com) 

# For the developers

## Installation

	$ npm i - to install node package
	$ npm run parse:mixpanel - to create data/installations.json

## Main app

#### production mode

	$ npm run build - to build project.  
	$ npm start - to start node.js server
	$ npm run jobs - to run schedule jobs


#### development mode

	$ npm run dev - quick start dev server with ssr   
	$ npm run dev2 - quick start dev server without ssr