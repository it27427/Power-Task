const dateselect = document.querySelector('#dateselect');
const timeselect = document.querySelector('#timeselect');
const selectTime = document.querySelector('#select-time');

NiceSelect.bind(dateselect, {
  searchable: false,
  placeholder: 'Thu Dec 15, 2022'
});

NiceSelect.bind(timeselect, {
  searchable: false,
  placeholder: '6:15 pm'
});

NiceSelect.bind(selectTime, {
  searchable: false,
  placeholder: '7:15 pm'
});