var ctx2014 = document.getElementById('teaching2014');
var ctx2015 = document.getElementById('teaching2015');

var hours2014 = [18, 20];
var courses2014 = ['Agregation de physique', 'Science of matter'];

var hours2015 = [20, 26, 10, 16];
var courses2015 = ['Science of matter', 'Optics and spectroscopy', 'Introduction to complex systems', 'Applied statistics for quality control'];

var teaching2014 = new Chart(ctx2014, {
 type: 'polarArea',
 data: {
    labels: courses2014,
    datasets: [{
        label: 'Teaching activities 2013-2014',
        data: hours2014
        }]
 },
});

var teaching2015 = new Chart(ctx2015, {
 type: 'polarArea',
 data: {
    labels: courses2015,
    datasets: [{
        label: 'Teaching activities 2014-2015',
        data: hours2015
        }]
 },
});

