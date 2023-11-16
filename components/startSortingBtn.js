import renderToDom from '../utils/sample_data/renderToDom';

const startSortingBtn = () => {
  const domString = '<button type="button" class="btn btn-info" id="start-sorting">Start the Sorting Ceremony!</button>';

  renderToDom('#form-container', domString);
};

export default startSortingBtn;
