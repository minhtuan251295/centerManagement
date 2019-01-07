$(function () { 
    Highcharts.chart('container-chart', {

        title: {
            text: 'Tình Hình Ghi Danh Tại Các Khóa Học'
        },
    
        subtitle: {
            text: 'Năm: 2017-2018'
        },
    
        yAxis: {
            title: {
                text: 'Số lượng ghi danh'
            }
        },
        xAxis: {
            title: {
                text: 'Tháng'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },
    
        series: [{
            name: 'Front End 1',
            data: [4393, 5250, 5717, 6965, 9703, 11993, 13713, 15417,10683,23875,32751,95107]
        }, {
            name: 'Front End 2',
            data: [2491, 2406, 2974, 2985, 3249, 3028, 3812, 4043,5717, 6965, 9703,11993]
        }, {
            name: 'Lập Trình Tư Duy',
            data: [1174, 1772, 1600, 1977, 2018, 2437, 3214, 3938, 4043,5135, 5855, 10030]
        }, {
            name: 'Lập Trinh C++',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227,40137,28106,42433,28541]
        }, {
            name: 'Lập Trinh C#',
            data: [1290, 5948, 8105, 11248, 8989, 11816, 18274, 18111,28877,29994,17113,37766]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });
    Highcharts.chart('container-chart-2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Tình hình ghé thăm trang web'
        },
        subtitle: {
            text: 'Năm: 2017-2018'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Số lượng theo dõi'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Khánh',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    
        }, {
            name: 'Admin',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    
        }, {
            name: 'Học Viên',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
    
        }, {
            name: 'Giáo Vụ',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
    
        }]
    });
});