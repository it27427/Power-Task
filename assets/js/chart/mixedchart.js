let ctx = document.getElementById("mixedChart").getContext("2d");

const mydata = {
  labels: [
    'January',
    'February',
    'March',
    'April'
  ],
  datasets: [{
    type: 'bar',
    label: 'Bar Dataset',
    data: [10, 20, 30, 40],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)'
  }, {
    type: 'line',
    label: 'Line Dataset',
    data: [50, 100, 50, 150],
    fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }]
};

const mixedChart = new Chart(ctx, {
  data: mydata,
});
