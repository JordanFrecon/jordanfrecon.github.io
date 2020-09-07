var ctx = document.getElementById('myChart');

var hours = [18, 20];
var courses = ['Agregation de physique', 'Science of matter'];

var mychart = new Chart(ctx, {
 type: 'polarArea',
 data: {
    labels: courses,
    datasets: [{
        label: 'Teaching activities 2013-2014',
        data: hours
        }]
 },
});