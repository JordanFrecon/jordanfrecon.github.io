function createPieChart(id, labels, backgroundColor, data) {
  var ctx = document.getElementById(id);
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        backgroundColor: backgroundColor,
        data: data
      }]
    }
  });
}



