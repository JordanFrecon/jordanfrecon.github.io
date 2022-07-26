function createPieChart(id, labelsvar, backgroundColorvar, datavar) {
  var ctx = document.getElementById(id);
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labelsvar,
      datasets: [{
        backgroundColor: backgroundColorvar,
        data: datavar
      }]
    }
  });
}
