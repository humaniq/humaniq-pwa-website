import { connect } from 'react-redux'
import Page from './page'
import { convert } from 'utils'

function mapStateToProps(state, ownProps) {
  const { page } = ownProps

  const _articles = articles.map(a => {
    return { ...a, slug: convert.toCleanKebab(a.slugtitle) }
  })

  const options = _articles.map(a => {
    return {
      text: a.title,
      url: `/legal/${a.slug}`,
      isSelected: a.slug === page,
    }
  })

  const article = _articles.filter(a => a.slug === page)[0]
  return { ...article, options }
}

export default connect(mapStateToProps)(Page)

const articles = [
  {
    title: 'General Privacy Policy',
    slugtitle: 'General Privacy Policy',
    sections: [
      {
        header: 'Effective: July 10 , 2017',
        html:
          '<p>Our main priority is your data security here at Humaniq. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security.<br/> If you have additional questions regarding security, we are happy to answer them. Please write to <a href="mailto:feedback@humaniq.com" target="_blank">feedback@humaniq.com</a> and we will respond as quickly as we can.</p><h3>Confidentiality</h3><p>We place strict controls over our employees’ access to the data and code you make available via Humaniq services, as morespecifically defined in your agreement with Humaniq covering the use of Humaniq services ("Customer Data"), and are committed to ensuring that Customer Data is not seen by anyone who should not have access to it. The operation of Humaniq services requires thatsome employees have access to the systems which store and process Customer Data. For example, in order to diagnose a problem you are having with Humaniq services, we may need to access your Customer Data. These employees are prohibited from using these permissions to view Customer Data unless it is necessary to do so. We have technical controls and audit policies in place to ensure that any access toCustomer Data is logged. <br/>All of our employees and contract personnel are bound to our policies regarding Customer Data and we treat these issues as matters of the highest importance within our company.</p><h3>Personnel Practices</h3><p>Humaniq conducts background checks on all employees before employment, and employees receive security training during induction as well as on an ongoing basis. All employees are required to read and sign our comprehensive information security policy covering thesecurity, availability, and confidentiality of Humaniq services.</p><h3>Compliance</h3><p>The following security-related audits and certifications are applicable to the Slack services:</p><ul>  <li>Service Organization Control (SOC) Reports: Humaniq is undergoing a SOC 3 audit, and a copy of Humaniq’s most recent report will beavailable upon request.</li>  <li>PCI: Humaniq is not currently a PCI-certified Service Provider. We are a PCI Level 4 Merchant and have completed the Payment CardIndustry Data Security Standard’s SAQ-A, allowing us to use a third party to process your credit card information securely.</li></ul><p>The environment that hosts Humaniq services maintains multiple certifications for its data centres, including ISO 27001 compliance,PCI Certification, and SOC reports. For more information about their certification and compliance, please visit the <a href="https:/aws.amazon.com/security/" target="_blank">AWS Security website</a>, <a href="https://aws.amazon.com/compliance/" target="_blank">AWSCompliance website</a> and the <a href="https://cloud.google.com/security/whitepaper" target="_blank">Google Cloud Platform Securitywebsite</a><h3>Data Encryption In Transit and Stored</h3><p>Humaniq services support the latest recommended secure cipher suites and protocols to encrypt all traffic in transit. Customer Data is E2E encrypted stored.<br /> We monitor the changing cryptographic landscape closely and work promptly to upgrade the service torespond to new cryptographic weaknesses as they are discovered and implement best practices as they evolve. For encryption in transit, we do this while also balancing the need for compatibility with older clients.</p><h3>Disaster Recovery</h3><p>Customer Data (which is to be stored) is stored redundantly at multiple locations in our hosting provider’s data centres to ensure availability. We have well-tested backup and restoration procedures, which allow recovery from a major disaster. Customer Data and our source code are automatically backed up every night. The Operations team is alerted in case of a failure with this system. Backups are fullytested at least every 90 days to confirm that our processes and tools work as expected.</p><h3>Network Protection</h3><p>In addition to sophisticated system monitoring and logging, we have implemented two-factor authentication for all server access across our production environment. Firewalls are configured according to industry best practices and unnecessary ports are blocked byconfiguration with AWS Security Groups and GCP Security Groups.</p>',
      },
    ],
  },
  {
    title: 'Data Privacy Policy',
    slugtitle: 'Data Privacy Policy',
    sections: [
      {
        header: 'Humaniq’s approach to security',
        html:
          '<p class="d">Current data privacy laws have been changing, giving more rights to you as an individual and more obligations to Humaniq holding your personal data.<br/>\n' +
          'We publish this new Privacy Policy so you can access information about the increased rights you have in relation to the information we hold on you and the legal basis on which we are using it.</p>\n' +
          '<h3>Information we collect</h3>\n' +
          '<p class="d">We collect the minimum information required to achieve the purposes set out in this Policy:</p>\n' +
          '<p class="d">(a) Registration and Account Information: When you use the services of Humaniq App (Services) you voluntarily give us personal information: mobile phone number, photo, and you are not anonymous to us. That means that your personal information will be collected and stored on our servers in order for us to be able to enable you to use the Services.</p>\n' +
          '<p class="d">(b) Additional Information: We collect additional information when you access Humaniq App through a certain device (e.g. your mobile device’s unique identifier, IP address). We may also collect your non-active location data – you can choose whether to allow this by changing your geolocation tracking settings.</p>\n' +
          '<h3>Uses and Retention</h3>\n' +
          '<p class="d">Our mission is to constantly improve our Services. As part of this mission, we use your information for the following purposes:</p>\n' +
          '<p class="d">(a) Make our service available and safe: We use your Registration and Account information to\n' +
          '<ol>\n' +
          '<li>- identify you for registration purpose and create your User Account;\n' +
          '<li>- provide customer service, including verifying transactions, give you information about your account, and respond to your requests;\n' +
          '</ol>\n' +
          '<p class="d">(b) Compliance: We use Additional Information to comply the laws of a particular country or region.</p>\n' +
          '<p class="d">(c) Improve the Services: We use Additional Information to better understand network behavior and trends, detect potential outages and technical issues to improve our Services.</p>\n' +
          '<p class="d">(d) Provide Interesting Offerings to You and others: we may use your information to continuously optimize and personalize those services and send you personal updates about new offerings which we believe you will find relevant.\n' +
          '<p class="d">(e) Carry out statistical and other kinds of research and analysis based on anonymized data.</p>\n' +
          '<h3>Data Retention</h3>\n' +
          '<p class="d">Unless otherwise requested by you, we retain information as long as it is necessary for the provision of Services. Upon deletion of the Humaniq App from your device we will keep the information during two years period and then delete it.</p>\n' +
          '<h3>Disclosure</h3>\n' +
          '<p class="d">Your data is kept safe with us, but we do share your personal information in anonymized form with third parties we trust in order to conduct analytical research.</p>\n' +
          '<p class="d">We may disclose your information to law enforcement, governmental agencies, or authorized third-parties, in response to a verified request relating to terror acts, criminal investigations or alleged illegal activity or any other activity that may expose us, you, or any other Humaniq App user to legal liability.</p>\n' +
          '<h3>Accessing, Reviewing, and Changing Your Personal Information</h3>\n' +
          '<p class="d">As a registered member, you can review and change personal information at any time by accessing your account on the Humaniq App or contacting our support. Please be sure to update your personal information promptly if it changes or becomes inaccurate.</p>\n' +
          '<h3>Your Rights</h3>\n' +
          '<p class="d">You have certain rights regarding your personal information which include:<ul>\n' +
          '<li> <i>right to access your personal information</i>: you have the right to ask us to confirm what information we hold about you at any time,\n' +
          '<li> <i>right to rectify the information we hold about you</i>,\n' +
          '<li> <i>right to erase your personal information</i>,\n' +
          '<li> <i>right to restrict our use of your personal information</i>,\n' +
          '<li> <i>right to object to our use of your personal information</i>: if we are using your data because we deem it necessary for our legitimate interests to do so, and you do not agree, you have the right to object. We will respond to your request within 30 days (although we may be allowed to extend this period in certain cases).\n' +
          '<li> right to receive your personal information in a usable electronic format and transmit it to a third party (<i>right to data portability</i>),\n' +
          '<li> <i>right to lodge a complaint with the data protection authority</i>.\n' +
          '<p class="d">We must have a legal basis to process your personal information. In most cases the legal basis will be one of the following:\n' +
          '<ul>\n' +
          '<li> where you have given your consent to the processing,\n' +
          '<li> to comply with our legal obligations, as explained above.</ul>\n' +
          '<p class="d">If we ask for your consent to process your personal information, you may withdraw your consent at any time by contacting us using the details at the end of this Privacy Policy. During the transition period if we do not receive a feed back from you on our request for reconfirmation of consent we would consider that you are happy that we continue using your personal data.\n' +
          'We encourage you to contact us to update or correct your information if it changes or if the personal information we hold about you is inaccurate. We are committed to working with you to obtain a fair resolution of any complaint or concern about privacy. If, however, you believe that we have not been able to assist with your complaint or concern, you have the right to make a complaint to your data protection authority the UK – Information Commissioner’s Office.</p>\n' +
          '<h3>Security</h3>\n' +
          '<p class="d">We know that security is important to our users and we care about the security of your information. We maintain technical, physical, and administrative security measures to protect the security of your personal information against loss, misuse, unauthorized access, disclosure, or alteration. Some of the safeguards we use include firewalls, data encryption and access controls.</p>\n' +
          '<h3>Children’s Privacy</h3>\n' +
          '<p class="d">Our Services are not intended for children under the age of 13. Therefore we do not knowingly collect personal information via our website, mobile application, services, or tools from anyone under 13.</p>\n' +
          '<h3>Updates to this Policy</h3>\n' +
          '<p class="d">This Privacy Policy was last updated on 24 May 2018 and from time to time it may be updated. You agree that we may notify you about material changes in the way we treat personal information by placing a notice on the Humaniq App.</p>\n' +
          '<h3>Contact Us</h3>\n' +
          '<p class="d">If you still have questions about our privacy policy, or would like to enjoy one of your rights please feel free to send us an email to privacy@humaniq.com or write a letter to the address:\n' +
          '<ol><li>41 Luke Street,\n' +
          '<li>London EC2A 4DP,\n' +
          '<li>UK</ol></p>',
      },
    ],
  },
  {
    title: 'Humaniq Terms of Use',
    slugtitle: 'User Terms of Service',
    sections: [
      {
        header: 'Last updated: 14 November 2018',
        html: '<p>These Terms of Use (the “Terms”) govern the basic rights and obligations that you and us have when you use Humaniq website, download, browse, access or in other way use Humaniq mobile application  (the “Services”) and constitute a binding agreement between Humaniq Limited (hereinafter “Humaniq”)  and yourself. The Terms also mean our Privacy Policy, Data Privacy Policy and other policies on our policies page, which are incorporated herein. You can opt not to enjoy the Services, if you don’t want the Terms to apply.</p>\n' +
	'<h2>1. Legal Capacity</h2>\n' + 
	'<p>1.1. You confirm that you have the legal capacity in your country to enter a binding agreement. In case if you are a minor you should be emancipated or granted consent from your legal representatives (parents or guardians).</p>\n' + 
	'<p>1.2. The Services are not intended for children under 13 and if you are under 13, please stop using the Services.</p>\n' + 
	'<h2>2. Use of the Humaniq mobile application</h2>\n' + 
	'<p>2.1. We will use reasonable endeavours to correct any errors or omissions as soon as practicable after being notified of them. However, we do not guarantee that the Services or the Humaniq mobile application will be free of faults, and we do not accept liability for any such faults, errors or omissions. In the event of any such error, fault or omission, please report it to us.</p>\n' + 
	'<p>2.2. We do not warrant that your use of the Services or the Humaniq mobile application will be uninterrupted and we do not warrant that any information (or messages) transmitted via the Services or the Humaniq mobile application will be transmitted accurately, reliably, in a timely manner or at all. Notwithstanding that we will try to allow uninterrupted access to the Services and the Humaniq mobile application, access to the Services and the Humaniq mobile application may be suspended, restricted or terminated at any time.</p>\n' + 
	'<p>2.3. We do not give any warranty that the Services and the Humaniq mobile application are free from viruses or anything else which may have a harmful effect on any technology.</p>\n' + 
	'<p>2.4. We reserve the right to change, modify, substitute, suspend or remove without notice any information or Services on the Humaniq mobile application from time to time. So the Services are provided on an "as is" principle, i.e. the type and extent of their provision by Humaniq when you access the Services.</p>\n' + 
	'<p>Your access to the Humaniq mobile application and/or the Services may also be occasionally restricted to allow for repairs, maintenance or the introduction of new facilities or services. We will attempt to restore such access as soon as we reasonably can.</p>\n' + 
	'<p>2.5. By registering your account in Humaniq mobile application you provide accurate information about yourself which is needed to ensure proper functioning of the application and security and completeness of transactions with HMQ tokens. This is not considered as opening of bank account opening or other kinds of financial accounts.</p>\n' + 
	'<p>2.6. One user may use only one device with functioning Humaniq mobile application and Humaniq may trace this using the EMEI number of the users device. Furthermore Humaniq mobile application will not be available with more than one mobile telephone SIM card.</p>\n' + 
	'<p>2.7. The provision of the Services and the Humaniq mobile application does not include the provision of a mobile telephone or handheld device or other necessary equipment to access the Humaniq mobile application. To use the Humaniq mobile application you will require Internet connectivity and appropriate telecommunication links. You acknowledge that the terms of agreement with your respective mobile network provider will continue to apply when using the Humaniq mobile application.</p>\n' + 
	'<p>2.8. When using the feature of exchanging the token HMQ you are acting on your own behalf and risk to transact with other Humaniq mobile application users directly. Humaniq provides only information support and will not be the organizer, party, agent or other representative to the users within those transactions between the users.  It is your responsibility to ensure that the conditions of such transactions available through the Humaniq mobile application meet your specific requirements before making any transaction.</p>\n' + 
	'<h2>3. Security</h2>\n' + 
	'<p>3.1. You will monitor the security of your account access details and not disclose them to third parties. Any action taken from your user account in Humaniq mobile application shall be deemed to be an act of your own, authorized by you and establishing the duties and liability for you in respect of such actions.\n' + 
	'<p>3.2. You are required to immediately change the account access detail if you have reasons to suspect that these data were disclosed to or may be used by unauthorized third parties or at Humaniq\'s request.</p>\n' + 
	'<p>3.3. Humaniq has the right to use available technical solutions to verify the correctness of the information provided by you.</p>\n' + 
	'<p>3.4. Humaniq has the right to block the user account in case of breach of the Terms or in case of reasonable ground to consider that the user account is used for fraud.</p>\n' + 
	'<h2>4. Intellectual property rights</h2>\n' + 
	'<p>4.1. All editorial content, information, photographs, illustrations, artwork and other graphic materials, and names, logos and trade marks on the Humaniq mobile application and the Humaniq website are protected by copyright laws and/or other laws and/or international treaties, and belong to us and/or our suppliers, as the case may be. These works, logos, graphics, sounds or images may not be copied, reproduced, retransmitted, distributed, disseminated, sold, published, broadcasted or circulated whether in whole or in part, unless expressly permitted by us and/or our suppliers, as the case may be.</p>\n' + 
	'<p>4.2. By using the Services, you do not acquire any ownership rights in materials contained therein. Misuse of any trademarks or any other content displayed on the Humaniq mobile application or the Humaniq website is prohibited.</p>\n' + 
	'<h2>5. Indemnity</h2>\n' + 
	'<p>You agree to indemnify and hold harmless Humaniq from and against any and all claims, demands, liabilities, costs or expenses, including reasonable attorney’s fees, resulting from your breach of the Terms.</p>\n' + 
	'<h2>6. Release</h2>\n' + 
	'<p>If you have a dispute with one or more users, you release Humaniq from all claims, demands, liabilities, costs, or expenses and damages. In entering into this release, you expressly waive any protections (whether statutory or otherwise) to the extent permitted by applicable law that would otherwise limit the coverage of this release to include only those claims which you may know or suspect to exist in your favor at the time of agreeing to this release.</p>\n' + 
	'<h2>7. Local Regulations.</h2>\n' + 
	'<p>7.1. We make no representation that the Service is permitted by law in any particular location. To the extent you choose to access the Service, you do so at your own initiative and are responsible for compliance with any applicable laws, including but not limited to applicable local laws.</p>\n' + 
	'<p>7.2. You specifically agree to comply with all applicable laws concerning the transmission of technical data exported from the United States or the country you reside in.</p>\n' + 
	'<h2>8. Limitation of liability</h2>\n' + 
	'<p>8.1. We shall not be liable in contract, tort (including negligence or breach of statutory duty) or otherwise howsoever and whatever the cause thereof, for any indirect, consequential, collateral, special or incidental loss or damage suffered or incurred by you in connection with the Humaniq mobile application and the Terms. For the purposes of the Terms, indirect or consequential loss or damage includes, without limitation, loss of revenue, profits, anticipated savings or business, loss of data or goodwill, loss of use or value of any equipment including software, claims of third parties, and all associated and incidental costs and expenses.</p>\n' + 
	'<p>8.2. We shall not be liable for any acts or omissions of any third parties howsoever caused, and for any direct, indirect, incidental, special, consequential or punitive damages, howsoever caused, resulting from or in connection with the mobile application and the services offered in the mobile application, your access to, use of or inability to use the mobile application or the services offered in the mobile application, reliance on or downloading from the mobile application and/or services, or any delays, inaccuracies in the information or in its transmission including but not limited to damages for loss of business or profits, use, data or other intangible, even if we have been advised of the possibility of such damages.</p>\n' + 
	'<p>8.3. The above exclusions and limitations apply only to the extent permitted by law. None of your statutory rights as a consumer that cannot be excluded or limited are affected.</p>\n' + 
	'<p>8.4. Notwithstanding our efforts to ensure that our system is secure, you acknowledge that all electronic data transfers are potentially susceptible to interception by others. We do not warrant that data transfers via the Humaniq mobile application will not be intercepted or read by third parties.</p>\n' + 
	'<h2>9. Suspension and termination</h2>\n' + 
	'<p>9.1. If you or anyone other than you, with your permission use(s) the Humaniq mobile application, any Services in contravention of the Terms, we may suspend your use of the Services and/or Humaniq mobile application.</p>\n' + 
	'<p>9.2. If we suspend the Services or Humaniq mobile application, we may refuse to restore the Services or Humaniq mobile application for your use until we receive an assurance from you, in a form we deem acceptable, that there will be no further breach of the provisions of the Terms.</p>\n' + 
	'<p>9.3. Without limitation to anything else in this Clause 9, we shall be entitled immediately or at any time (in whole or in part) to suspend the Services and/or Humaniq mobile application if we suspect, on reasonable grounds, that you may have committed or be committing any fraud against us or any other person.</p>\n' + 
	'<p>9.4. Our rights under this Clause 9 shall not prejudice any other right or remedy we may have in respect of any breach or any rights, obligations or liabilities accrued prior to termination.</p>\n' + 
	'<h2>10. Applicable law and jurisdiction</h2>\n' + 
	'<p>10.1. The Services may be accessed from all countries around the world where the local technology permits. As each of these places have differing laws, by accessing the Services both you and we agree that the laws of England and Wales, without regard to the conflicts of laws principles thereof, will govern the Terms and apply to all matters relating to the use of the Services.</p>\n' + 
	'<p>10.2. You accept and agree that both you and we shall submit to the exclusive jurisdiction of the courts of England and Wales in respect of any dispute arising out of and/or in connection with the Terms and use of Services.</p>\n' + 
	'<p>10.3. If you ever wish to seek any relief from us, you waive the ability to pursue class action.</p>\n' + 
	'<h2>11. Updates to Terms</h2>\n' + 
	'<p>11.1. We reserve the right to amend the Terms from time to time without notice. The revised Terms will be posted on the Humaniq website and shall take effect from the date of such posting. You are advised to review these terms and conditions periodically as they are binding upon you.</p>\n' + 
	'<p>11.2. If you do not agree to updated Terms, you should stop using our Services and/or close your account. Your continued use of any of our Services will be deemed as your acceptance of any revisions.</p>',
      },
    ],
  },
]
