var ctx = document.getElementById('myChart');

var hours = [20, 26, 10, 16];
var courses = ['Science of matter', 'Optics and spectroscopy', 'Introduction to complex systems', 'Applied statistics for quality control'];

var myChart = new Chart(ctx, {
 type: 'polarArea',
 data: {
    labels: courses2015,
    datasets: [{
        label: 'Teaching activities 2014-2015',
        data: hours
        }]
 },
});

