import { connect } from 'react-redux';
import SE_Legal from '../components/SE_Legal';

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

function mapStateToProps(state) {
  return {
    articles: [
      {
        title: 'User Terms of Service',
        sections: [
          {
            header: 'Effective: July 10 , 2017',
            paragraphs: [
              'Our main priority is your data security here at Humaniq. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security.',
              'If you have additional questions regarding security, we are happy to answer them. Please write to feedback@humaniq.com and we will respond as quickly as we can.',
            ],
          }
        ]
      },
      {
        title: 'Customer Terms of Service',
        sections: [
          {
            header: 'Effective: July 10 , 2017',
            paragraphs: [
              'Our main priority is your data security here at Humaniq. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security.',
              'If you have additional questions regarding security, we are happy to answer them. Please write to feedback@humaniq.com and we will respond as quickly as we can.',
            ],
          }
        ]
      },
      {
        title: 'General Privacy Policy',
        sections: [
          {
            header: 'Effective: July 10 , 2017',
            paragraphs: [
              'Our main priority is your data security here at Humaniq. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security.',
              'If you have additional questions regarding security, we are happy to answer them. Please write to feedback@humaniq.com and we will respond as quickly as we can.',
            ],
          },
          {
            header: 'Confidentiality',
            paragraphs: [
              'We place strict controls over our employees’ access to the data and code you make available via the Humaniq services, as more specifically defined in your agreement with Humaniq covering the use of the Humaniq services ("Customer Data"), and are committed to ensuring that Customer Data is not seen by anyone who should not have access to it. The operation of the Humaniq services requires that some employees have access to the systems which store and process Customer Data. For example, in order to diagnose a problem you are having with the Humaniq services, we may need to access your Customer Data. These employees are prohibited from using these permissions to view Customer Data unless it is necessary to do so. We have technical controls and audit policies in place to ensure that any access to Customer Data is logged.',
              'All of our employees and contract personnel are bound to our policies regarding Customer Data and we treat these issues as matters of the highest importance within our company.',
            ],
          },
          {
            header: 'Personnel Practices',
            paragraphs: [
              'Humaniq conducts background checks on all employees before employment, and employees receive security training during onboarding as well as on an ongoing basis. All employees are required to read and sign our comprehensive information security policy covering the security, availability, and confidentiality of the Humaniq services.',
            ],
          },
          {
            header: 'Compliance',
            paragraphs: [
              'The following security-related audits and certifications are applicable to the Humaniq services: Service Organization Control (SOC) Reports: Humaniq is undergoing a SOC 3 audit.',
              'PCI: Humaniq is not currently a PCI-certified Service Provider. We are a PCI Level 4 Merchant and have completed the Payment Card Industry Data Security Standard’s SAQ-A, allowing us to use a third party to process your credit card information securely.',
              'The environment that hosts the Humaniq services maintains multiple certifications for its data centers, including ISO 27001 compliance, PCI Certification, and SOC reports. For more information about their certification and compliance, please visit the AWS Security website, AWS Compliance website and the Google Cloud Platform Security website.',
            ],
          },
          {
            header: 'Data Encryption In Transit and At Rest',
            paragraphs: [
              'The Humaniq services support the latest recommended secure cipher suites and protocols to encrypt all traffic in transit. Customer Data is E2E encrypted at rest.',
              'We monitor the changing cryptographic landscape closely and work promptly to upgrade the service to respond to new cryptographic weaknesses as they are discovered and implement best practices as they evolve. For encryption in transit, we do this while also balancing the need for compatibility for older clients.',
            ],
          },
          {
            header: 'Availability',
            paragraphs: [
              `We understand that you rely on the Humaniq services to communicate and process payments. We're committed to making Humaniq a highly-available service that you can count on. Our infrastructure runs on systems that are fault tolerant, for failures of individual servers or even entire data centers. Our operations team tests disaster-recovery measures regularly and staffs an around-the-clock on-call team to quickly resolve unexpected incidents.`,
            ],
          },
          {
            header: 'Disaster Recovery',
            paragraphs: [
              'Customer Data (which is to be stored) is stored redundantly at multiple locations in our hosting provider’s data centers to ensure availability. We have well-tested backup and restoration procedures, which allow recovery from a major disaster. Customer Data and our source code are automatically backed up nightly. The Operations team is alerted in case of a failure with this system. Backups are fully tested at least every 90 days to confirm that our processes and tools work as expected.',
            ],
          },
          {
            header: 'Network Protection',
            paragraphs: [
              'In addition to sophisticated system monitoring and logging, we have implemented two-factor authentication for all server access across our production environment. Firewalls are configured according to industry best practices and unnecessary ports are blocked by configuration with AWS Security Groups and GCP Security Groups.',
            ],
          },
          {
            header: 'Host Management',
            paragraphs: [
              'We perform automated vulnerability scans on our production hosts and remediate any findings that present a risk to our environment. We enforce screens lockouts and the usage of full disk encryption for company laptops.',
            ],
          },
          {
            header: 'Logging',
            paragraphs: [
              'Humaniq maintains an extensive, centralized logging environment in its production environment which contains information pertaining to security, monitoring, availability, access, and other metrics about the Humaniq services. These logs are analyzed for security events via automated monitoring software, overseen by the security team.',
            ],
          },
          {
            header: 'Incident Management & Response',
            paragraphs: [
              'In the event of a security breach, Humaniq will promptly notify you of any unauthorized access to your Customer Data. Humaniq has incident management policies and procedures in place to handle such an event.',
            ],
          },
          {
            header: 'External Security Audits',
            paragraphs: [
              'We contract with respected external security firms who perform regular audits of the Humaniq services to verify that our security practices are sound and to monitor the Humaniq services for new vulnerabilities discovered by the security research community. In addition to periodic and targeted audits of the Humaniq services and features, we also employ the use of continuous hybrid automated scanning of our web platform.',
            ],
          },
          {
            header: 'Product Security Practices',
            paragraphs: [
              'New features, functionality, and design changes go through a security review process facilitated by the security team. In addition, our code is audited with automated static analysis software, tested, and manually peer-reviewed prior to being deployed to production. The security team works closely with development teams to resolve any additional security concerns that may arise during development.',
            ],
          },
        ]
      },
      {
        title: 'Data Privacy',
        sections: [
          {
            header: 'Effective: July 10 , 2017',
            paragraphs: [
              'Our main priority is your data security here at Humaniq. As transparency is one of the principles on which our company is built, we aim to be as clear and open as we can about the way we handle security.',
              'If you have additional questions regarding security, we are happy to answer them. Please write to feedback@humaniq.com and we will respond as quickly as we can.',
            ],
          },
          {
            header: 'Confidentiality',
            paragraphs: [
              'We place strict controls over our employees’ access to the data and code you make available via the Humaniq services, as more specifically defined in your agreement with Humaniq covering the use of the Humaniq services ("Customer Data"), and are committed to ensuring that Customer Data is not seen by anyone who should not have access to it. The operation of the Humaniq services requires that some employees have access to the systems which store and process Customer Data. For example, in order to diagnose a problem you are having with the Humaniq services, we may need to access your Customer Data. These employees are prohibited from using these permissions to view Customer Data unless it is necessary to do so. We have technical controls and audit policies in place to ensure that any access to Customer Data is logged.',
              'All of our employees and contract personnel are bound to our policies regarding Customer Data and we treat these issues as matters of the highest importance within our company.',
            ],
          },
          {
            header: 'Personnel Practices',
            paragraphs: [
              'Humaniq conducts background checks on all employees before employment, and employees receive security training during onboarding as well as on an ongoing basis. All employees are required to read and sign our comprehensive information security policy covering the security, availability, and confidentiality of the Humaniq services.',
            ],
          },
        ]
      },
    ]
  };
}

export default connect(mapStateToProps)(SE_Legal);