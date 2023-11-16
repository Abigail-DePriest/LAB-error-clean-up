import renderToDom from '../utils/sample_data/renderToDom';

const studentAreas = () => {
  const domString = `<div id="students">No Students</div>
<div id="voldy">No Death Eaters</div>`;

  renderToDom('#student-container', domString);
};

export default studentAreas;
