window.onload = function() {
  var ctx = document.getElementById("teaching2014");
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Electromagnetism (L1)","Agrégation de Physique"],
      datasets: [{
        label: "2013-2014",
        backgroundColor: ["#e76f51", "#264653"],
        data: [20, 18]
      }]
    }
  });
  var ctx2 = document.getElementById("teaching2015");
  var chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ["Electromagnetism (L1)", "Optics (L2)", "Complex Systems (M2)", "Applied Statistics (L3)"],
      datasets: [{
        label: "2014-2015",
        backgroundColor: ["#e76f51", "#f4a261","#2a9d8f","#e9c46a"],
        data: [20, 26, 10, 16]
      }]
    }
  });
  var ctx3 = document.getElementById("teaching2016");
  var chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ["Electromagnetism (L1)", "Optics (L2)", "Experimental Physics (L3)", "Python (L3)", "Signal Processing (L3)"],
      datasets: [{
        label: "2015-2016",
        backgroundColor: ["#e76f51", "#f4a261"," #27ae60", "#40916c","#52b788"],
        data: [20, 26, 8, 20, 20]
      }]
    }
  });
  var ctx4 = document.getElementById("teaching2021");
  var chart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: ["Informatics (L1)", "Data Science (L2)"],
      datasets: [{
        label: "2021-2022",
        backgroundColor: ["#6495ED", "#1434A4"],
        data: [36, 30]
      }]
    }
  })
};
