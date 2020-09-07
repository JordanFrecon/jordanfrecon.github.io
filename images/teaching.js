var ctx = document.getElementById('myChart');

var hours2015 = [20, 26, 10, 16];
var courses2015 = ['Science of matter', 'Optics and spectroscopy', 'Introduction to complex systems', 'Applied statistics for quality control'];
var hours2014 = [18, 20];
var courses2014 = ['Agregation de physique', 'Science of matter'];

var teachingsecond = new Chart(ctx, {
 type: 'polarArea',
 data: {
    labels: courses2015,
    datasets: [{
        label: 'Teaching activities 2014-2015',
        data: hours2015
        }]
 },
});


var teachingfirst = new Chart(ctx, {
 type: 'polarArea',
 data: {
    labels: courses2014,
    datasets: [{
        label: 'Teaching activities 2013-2014',
        data: hours2014
        }]
 },
});