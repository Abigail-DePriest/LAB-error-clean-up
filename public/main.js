import '../styles/main.scss';
import header from '../components/header';
import htmlStructure from '../components/htmlStructure';
import startSortingBtn from '../components/startSortingBtn';
import events from '../utils/sample_data/events';

// starts as an empty array

// target filter buttons on Dom

// ********** HTML Components  ********** //
// the basic HMTL structure of app

// filter buttons

// ********** LOGIC  ********** //
// sorts student to a house and then place them in the students array

// Create a new ID for the students

// add form to DOM on start-sorting click.
// Add events for form after the form is on the DOM

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};
startApp();
