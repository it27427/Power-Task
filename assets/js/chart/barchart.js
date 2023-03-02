let barChartData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ],
  datasets: [
    {
      label: "American Express",
      backgroundColor: "pink",
      borderColor: "red",
      borderWidth: 1,
      data: [3, 5, 6, 7,3, 5, 6, 7]
    },
    {
      label: "Mastercard",
      backgroundColor: "lightblue",
      borderColor: "blue",
      borderWidth: 1,
      data: [4, 7, 3, 6, 10,7,4,6]
    },
  ]
};

let chartOptions = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Chart.js Bar Chart"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }],
    xAxes: [{
      categoryPercentage: 0.4,
      barThickness: 20
    }]
  }
}

window.onload = function() {
  let barChart = document.getElementById("barChart").getContext("2d");
  window.myBar = new Chart(barChart, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });
};
