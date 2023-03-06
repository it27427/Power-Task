window.addEventListener('load', displayLineChart);

function displayLineChart() {
  let chartDot = new Image();
  chartDot.src = 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png';
  chartDot.width = 25;
  chartDot.height = 25;

  let ctx = document.getElementById("lineChart").getContext("2d");
  let chart = new Chart(ctx, {
    type: 'line',
    responsive: true,

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Teo',
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30],
          pointStyle: chartDot,
          pointRadius: [0, 0, 0, 0, 0, 1] // Last dot
        },
        {
          label: 'Ti',
          fill: false,
          backgroundColor: '#2596be',
          borderColor: '#2596be',
          data: [0, 10, 3, 15, 25],
          pointStyle: chartDot,
          pointRadius: [0, 0, 0, 0, 1] // Last dot
        }
      ]
    },

    // Configuration options go here
    options: {
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
  });
}