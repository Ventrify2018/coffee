//
/* chart.js chart examples */
// chart colors

Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            let ctx = chart.chart.ctx;

            //Get options from the center object in options
            let centerConfig = chart.config.options.elements.center;
            let fontStyle = centerConfig.fontStyle || 'Arial';
            let txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

let colors = ['#007bff', '#28a745', '#333333', '#fff', '#dc3545', '#6c757d'];

/* 3 donut charts */
var donutOptions = {
    cutoutPercentage: 85,
    legend: {position: 'bottom', padding: 5, labels: {pointStyle: 'circle', usePointStyle: true}},
    elements: {
        center: {
            text: '100%',
            color: '#36A2EB', //Default black
            fontStyle: 'Helvetica', //Default Arial
            fontWeight: "bold",
            sidePadding: 15 //Default 20 (as a percentage)
        }
    }
};

// donut 1
var chDonutData1 = {
    labels: ['Bootstrap', 'Popper', 'Other'],
    datasets: [
        {
            backgroundColor: colors.slice(0, 3),
            borderWidth: 0,
            data: [74, 11, 40]
        }
    ]
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
    new Chart(chDonut1, {
        type: 'pie',
        data: chDonutData1,
        options: donutOptions
    });
}

// donut 2
var chDonutData2 = {
    labels: ['Wips', 'Pops', 'Dags'],
    datasets: [
        {
            backgroundColor: colors.slice(0, 3),
            borderWidth: 0,
            data: [40, 45, 30]
        }
    ]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions
    });
}

// donut 3
var chDonutData3 = {
    labels: ['Angular', 'React', 'Other', "other other"],
    datasets: [
        {
            backgroundColor: colors.slice(0, 4),
            borderWidth: 0,
            data: [21, 45, 55, 33]
        }
    ]
};
var chDonut3 = document.getElementById("chDonut3");
if (chDonut3) {
    new Chart(chDonut3, {
        type: 'pie',
        data: chDonutData3,
        options: donutOptions
    });
}


var ctx = document.getElementById("chDonut4");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Green", "Yellow", "Red", "Purple", "Blue"],
        datasets: [{
            data: [1, 2, 3, 4, 5],
            backgroundColor: [
                'green',
                'yellow',
                'red',
                'purple',
                'blue',
            ],
            labels: [
                'green',
                'yellow',
                'red',
                'purple',
                'blue',
            ]
        }, {
            data: [6, 7, 8],
            backgroundColor: [
                'black',
                'grey',
                'lightgrey'
            ],
            labels: [
                'black',
                'grey',
                'lightgrey'
            ],
        },]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var index = tooltipItem.index;
                    return dataset.labels[index] + ': ' + dataset.data[index];
                }
            }
        }
    }
});


//window.onload = function () {
//         window.myRadar = new Chart(document.getElementById("canvas1").getContext("2d")).Radar(radarChartData, {
//             responsive: true
//         });
//         var G2 = document.getElementById("canvas2").getContext("2d");
//         window.myBar = new Chart(G2).Bar(barChartData, {
//             responsive: true
//         });
//     }
//Is the data the user sends you as the data1 object? Do you always need a pie chart? If so...
//
// function createChart(data, id) {
//   addCanvas(id); // some id generated by you or sent by the user
//   generateChart(data, id); // data from the user
// }
//
// function addCanvas(id) { // create the new canvas
//   let canvas = document.createElement("canvas");
//   canv.setAttribute("id", "canvasID");
//   document.getElementsByClassName('pie-chart-container')[0].appendChild(canvas);
// }
//
// function generateChart(data, id) { // initialize the new chart
//   let piechart = $("#" + id);
//   let chart = new Chart(piechart,{
//     type:"pie",
//     data : data,
//     options: {
//       title: {
//         display: true,
//         text: namesArr[0]
//       }
//     }
//   });
// }