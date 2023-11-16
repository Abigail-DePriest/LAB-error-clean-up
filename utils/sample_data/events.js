import form from './form';
import filterBtnRow from '../../components/filterBtnRow';
import studentAreas from '../../components/studentAreas';
import studentsOnDom from './studentsOnDom';
import students from './students';
import voldysArmy from './voldysArmy';

const events = () => {
  // get form on the DOM on button click
  document.querySelector('#start-sorting').addEventListener('click', () => {
    form();
    filterBtnRow();
    studentAreas();
    // put html elements on the DOM on click

    // form
    // students and voldy's army divs
  });

  // always load last

  // target expel buttons to move to voldys army
  document
    .querySelector('#student-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('expel')) {
        const [, id] = e.target.id.split('--');
        const index = students.findIndex((student) => student.id === Number(id));

        // move from one array to another
        voldysArmy.push(...students.splice(index, 1));
        // get both sets of students on the DOM
        studentsOnDom('#students', students);
        studentsOnDom('#voldy', voldysArmy);
      }
    });

  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter')) {
      const [, house] = e.target.id.split('--');
      if (house === 'all') {
        studentsOnDom('#students', students);
      } else if (house) {
        const filter = students.filter((student) => student.house === house);
        studentsOnDom('#students', filter, house);
      }
    }
  });
};

export default events;
