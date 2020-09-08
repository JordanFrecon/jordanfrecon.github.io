window.onload = function() {
  var ctx = document.getElementById("myChart");
  var lineChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["Electromagnetism","Agregation de Physique"],
      datasets: [{
        label: "2013-2014",
        data: [20, 18]
      }]
    }
  });
  var ctx2 = document.getElementById("myChart2");
  var lineChart2 = new Chart(ctx2, {
    type: 'polarArea',
    data: {
      labels: ["Electromagnetism", "Optics", "Complex systems", "Applied Statistics"],
      datasets: [{
        label: "2014-2015",
        data: [20, 26, 10, 16]
      }]
    }
  });
  var ctx3 = document.getElementById("myChart3");
  var lineChart3 = new Chart(ctx3, {
    type: 'polarArea',
    data: {
      labels: ["Electromagnetism", "Optics", "Python", "Signal processing"],
      datasets: [{
        label: "2015-2016",
        data: [20, 39.5, 20, 8]
      }]
    }
  })
};