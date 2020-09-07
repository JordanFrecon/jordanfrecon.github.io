window.onload = function() {
  var ctx = document.getElementById("myChart");
  var lineChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "2015",
        data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10]
      }]
    }
  })
}

window.onload = function() {
  var ctx2 = document.getElementById("myChart2");
  var lineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "2015",
        data: [10, 8, 6, 5, 12, 8, 16, 17, 6, 7, 6, 10]
      }]
    }
  })
}