const temperatura = document.getElementById("graficoTemperatura");
const umidade = document.getElementById("graficoUmidade");

new Chart(temperatura, {
  type: "line",
  data: {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    datasets: [
      {
        label: "Temperatura",
        data: [30, 29, 28, 25, 22, 23],
        borderWidth: 3,
        borderColor: "#ff6384",
        backgroundColor: "#ff6384",
      },
    ],
  },
  options: {
    scales: {
      y: {
        
      },
    },
  },
});

new Chart(umidade, {
  type: "line",
  data: {
    labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
    datasets: [
      {
        label: "Umidade",
        data: [80, 82, 80, 85, 80, 83],
        borderWidth: 3,
        borderColor: "#36a2eb",
        backgroundColor: "#36a2eb",
      },
    ],
  },
  options: {
    scales: {
      y: {
        
      },
    },
  },
});
