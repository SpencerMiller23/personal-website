import construx from '../Common/construx.jpg'
import donkeyfinance from '../Common/donkeyfinance.jpg'
import ilta from '../Common/ilta.jpg'
import impactlabs from '../Common/impactlabs.jpg'
import kromad from '../Common/kromad.jpg'
import niftable from '../Common/niftable.jpg'
import hrvst from '../Common/hrvst.jpg'

// When adding a new role, do not forget to add its data object to the array at the bottom

const donkeyRoleData = {
  'websiteUrl': 'https://don-key.finance/',
  'companyLogo': donkeyfinance,
  'companyName': 'Don-key Finance',
  'date': 'February 2022 - Present',
  'position': 'Web3 Development Jedi',
  'objectiveArr': [
    'Overseeing the architecting and development of a secure, cross-chain messaging system to synchronize data between smart contracts deployed on different blockchains.',
    'Conducting security audits for smart contracts to ensure contracts are free of security vulnerabilities while also eliminating bugs',
    'Developed a scalable blockchain indexing tool that will replace a third-party alternative, leading to a reduction in cost and improvement in performance.'
  ]
}

const niftableRoleData = {
  'websiteUrl': 'https://www.niftable.io/',
  'companyLogo': niftable,
  'companyName': 'Niftable',
  'date': 'March 2021 - February 2022',
  'position': 'Co-founder, Chief Technology Jedi Master',
  'objectiveArr': [
    'Spearheaded the development of a platform for creating and trading fractional shares of NFTs.',
    'Delivered several presentations to prospective investors for the purpose of securing investment.',
    'Designed and developed the landing page and blog using React and multiple AWS services.'
  ]
}

const iltaRoleData = {
  'websiteUrl': 'https://www.ilta.co.il/',
  'companyLogo': ilta,
  'companyName': 'Israeli Legal-Tech Accelerator',
  'date': 'November 2020 - February 2021',
  'position': 'Full-Stack Development Padawan Learner',
  'objectiveArr': [
    'Led the continued development of a Node.js REST API service which will be used by the incoming legaltech startup cohort to retrieve historical legal documents and data.',
    'Spearheaded operations to build a React front-end prototype intended to showcase potential uses for a legal document REST API.',
    'Piloted efforts to refactor legacy code in order to improve performance and ensure compatibility with current software.'
  ]
}

const kromadRoleData = {
  'websiteUrl': 'https://kromad.com/',
  'companyLogo': kromad,
  'companyName': 'Kromad Design Studio',
  'date': 'May 2019 - August 2019',
  'position': 'Frontend Web Jedi',
  'objectiveArr': [
    'Governed the design and development of custom ecommerce websites, leveraging Shopify and WordPress frameworks to reduce development time and achieve overall vision.',
    'Pioneered initiatives to optimize new and existing websites for search engine ranking, mobile usability, mobile responsiveness, and loading time.',
    'Crafted and produced website proposals customized for the needs of prospective clients, successfully demonstrating the impact and value-add to their business.'
  ]
}

const impactLabsRoleData = {
  'websiteUrl': 'https://www.impactlabs.tech/?lang=en',
  'companyLogo': impactlabs,
  'companyName': 'Impact Labs',
  'date': 'June 2018 - August 2018',
  'position': 'Summer Padawan Learner',
  'objectiveArr': [
    'Innovated and developed a serverless application using AWS, enabling the automatic synchronization of a client-facing database with CRM software via REST API.',
    'Ideated and implemented a comprehensive marketing campaign, which included designing promotional material and building an online advertising strategy for an upcoming 3D printing course.'
  ]
}

const construxRoleData = {
  'websiteUrl': 'http://www.construx.co/',
  'companyLogo': construx,
  'companyName': 'Construx.co',
  'date': 'November 2017 - October 2018',
  'position': 'IT Solutions Jedi Ambassador',
  'objectiveArr': [
    'Constructed an internal web application which reduced data re-entry by allowing employees to remotely log hours and submit petty cash forms.',
    'Integrated a new enterprise software suite to successfully improve efficiency across all departments while also reducing administrative costs.'
  ]
}

const hrvstRoleData = {
  'websiteUrl': 'https://gohrvst.com/',
  'companyLogo': hrvst,
  'companyName': 'HRVST',
  'date': 'November 2016 - October 2017',
  'position': 'Frontend Web Jedi',
  'objectiveArr': [
    'Architected custom ecommerce websites while reducing development time by using industry leading CMS platforms to manage the back-end.',
    'Elevated sales pipeline performance by designing and developing landing pages for prospective clients, yielding a significant increase in conversion rates.',
    'Headed operations for debugging pre-existing websites of current clients to optimize loading times and improve responsiveness across various web browsers and screen sizes.'
  ]
}

const roleDataArr = [donkeyRoleData, niftableRoleData, iltaRoleData, kromadRoleData, impactLabsRoleData, construxRoleData, hrvstRoleData]

export default roleDataArr