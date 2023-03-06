let doughnutId = document.getElementById("D").getContext("2d");
let doughnut = new Chart(doughnutId, {
  type: "doughnut",
  data: {
    labels: ["Data1", "Data2", "Data3"],
    datasets: [
      {
        data: [100, 50, 40],
        backgroundColor: ["rgba(154, 18, 179, .7)", "rgba(232, 126, 4, .7)", "rgba(0, 230, 64, .7)"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    plugins: {
      title: {
        position: 'bottom',
        display: true,
        text: 'It is doughnut chart'
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
})