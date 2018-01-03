import database from './pics/projectimplement.png';
import carApplication from './pics/carbrowsing.png';
import questionnaire from './pics/questionnaire.png';

export const projectDetails = {
  'questionnaire': {
  	'title': 'Real-time questionnaire website',
  	'skills': 'Web full stack',
  	'pic': questionnaire,
  	'description': 'Developed a single-page application which allows users to collect survey results in real time. Used React, JavaScript for front-end components interaction and Express, Node.js for server side. Deployed backend system on cloud infrastructure Heroku. Implemented a set of Restful API to allow front-end components to write/read data with server.'
    },
  'carApplication': {
  	'title': 'Vehicle Dealer Management System',
  	'skills': 'Java, Swing',
  	'pic': carApplication,
  	'description': 'Worked with other teams (25 people) to design the functionality and to implement UI using Swing. Designed and Implemented a sort panel that in-time updates product order according to user inputs.'
    },
  'database': {
  	'title': 'Exchange Support SQL database',
  	'skills': 'SQL',
  	'pic': database,
  	'description': 'Designed Entity Relationship Model of ticket SQL database for Microsoft exchange support group. Implemented the database using SQL server by creating tables, stored procedures and functions.'
    }
};