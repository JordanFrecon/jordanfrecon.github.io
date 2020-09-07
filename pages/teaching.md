---
layout: page
title: Publications
permalink: /publications/
weight: 3
---



var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
});


data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
};