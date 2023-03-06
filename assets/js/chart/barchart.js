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
}

let chartOptions = {
  responsive: true,
  plugins: {
    title: {
      position: 'bottom',
      display: true,
      text: 'Title will be here'
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        boxWidth: 50,
        color: "black",
        font: {
          size: 14,
          weight: "normal"
        }
      }
    }
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
