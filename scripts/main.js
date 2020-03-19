let map;
let tempxstore;
let popxstore;
let stores;
let sales;
let lineStores;


let store = [['us-al', 4.0],
['us-ak', 4.0],
['us-az', 33.0],
['us-ar', 7.0],
['us-ca', 440.0],
['us-co', 25.0],
['us-ct', 8.0],
['us-dc', 2.0],
['us-fl', 103.0],
['us-ga', 24.0],
['us-hi', 13.0],
['us-id', 8.0],
['us-il', 128.0],
['us-in', 13.0],
['us-ks', 9.0],
['us-ky', 11.0],
['us-la', 18.0],
['us-md', 47.0],
['us-ma', 2.0],
['us-mi', 33.0],
['us-mn', 2.0],
['us-ms', 11.0],
['us-mo', 13.0],
['us-mt', 2.0],
['us-ne', 3.0],
['us-nv', 19.0],
['us-nj', 43.0],
['us-nm', 15.0],
['us-ny', 99.0],
['us-nc', 31.0],
['us-oh', 17.0],
['us-ok', 8.0],
['us-or', 24.0],
['us-pa', 22.0],
['us-sc', 11.0],
['us-tn', 42.0],
['us-tx', 134.0],
['us-ut', 13.0],
['us-va', 44.0],
['us-wa', 58.0],
['us-wv', 3.0],
['us-wi', 7.0],
['us-wy', 1.0],
['us-as', 0.0],
['us-de', 0.0],
['us-fm', 0.0],
['us-gu', 0.0],
['us-ia', 0.0],
['us-me', 0.0],
['us-mh', 0.0],
['us-mp', 0.0],
['us-nd', 0.0],
['us-nh', 0.0],
['us-pr', 0.0],
['us-pw', 0.0],
['us-ri', 0.0],
['us-sd', 0.0],
['us-vi', 0.0],
['us-vt', 0.0]];

let decoder = {'us-al': 'Alabama',
'us-ak': 'Alaska',
'us-az': 'Arizona',
'us-ar': 'Arkansas',
'us-ca': 'California',
'us-co': 'Colorado',
'us-ct': 'Connecticut',
'us-dc': 'District Of Columbia',
'us-fl': 'Florida',
'us-ga': 'Georgia',
'us-hi': 'Hawaii',
'us-id': 'Idaho',
'us-il': 'Illinois',
'us-in': 'Indiana',
'us-ks': 'Kansas',
'us-ky': 'Kentucky',
'us-la': 'Louisiana',
'us-md': 'Maryland',
'us-ma': 'Massachusetts',
'us-mi': 'Michigan',
'us-mn': 'Minnesota',
'us-ms': 'Mississippi',
'us-mo': 'Missouri',
'us-mt': 'Montana',
'us-ne': 'Nebraska',
'us-nv': 'Nevada',
'us-nj': 'New Jersey',
'us-nm': 'New Mexico',
'us-ny': 'New York',
'us-nc': 'North Carolina',
'us-oh': 'Ohio',
'us-ok': 'Oklahoma',
'us-or': 'Oregon',
'us-pa': 'Pennsylvania',
'us-sc': 'South Carolina',
'us-tn': 'Tennessee',
'us-tx': 'Texas',
'us-ut': 'Utah',
'us-va': 'Virginia',
'us-wa': 'Washington',
'us-wv': 'West Virginia',
'us-wi': 'Wisconsin',
'us-wy': 'Wyoming',
'us-as': 'American Samoa',
'us-de': 'Delaware',
'us-fm': 'Federated States Of Micronesia',
'us-gu': 'Guam',
'us-ia': 'Iowa',
'us-me': 'Maine',
'us-mh': 'Marshall Islands',
'us-mp': 'Northern Mariana Islands',
'us-nd': 'North Dakota',
'us-nh': 'New Hampshire',
'us-pr': 'Puerto Rico',
'us-pw': 'Palau',
'us-ri': 'Rhode Island',
'us-sd': 'South Dakota',
'us-vi': 'Virgin Islands',
'us-vt': 'Vermont'}

function plotStore() {
    stores = Highcharts.mapChart('mapstore', {
        chart: {
            map: 'countries/us/us-all'

        },

        color: '#005ea6',
    
        title: {
            text: 'Number of Stores by State'
        },
    
        subtitle: {
            text: 'Source: <a href="http://yelp.com/">Yelp</a>'
        },
    
        colorAxis: {
            min: 0
        },

        credits: {enabled: false},
    
        series: [{
            data: store,
            name: 'Number of Stores',
            states: {
                hover: {
                    color: '#EA83BD'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.value}',
                color: 'black'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            nullColor: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
}

function plotLineSales() {
    sales = Highcharts.chart('sales', {
        chart: {
                    zoomType: 'x'
        },
        title: {
            text: 'Yearly Sales'
        },
    
        subtitle: {
            text: 'Source: <a href="http://investor.dunkinbrands.com/annual-report-proxy">Dunkin\' Brands</a>'
        },
        yAxis: {
            title: {
                text: 'Sales'
            },
            labels: {formatter: function(){
              compare =  this.value;
              if (compare >= 1000000000) {
              return compare/1000000000 + "B"
            } else if (compare >= 1000000) {
              return compare/1000000 + "M";
            } else {
              return compare
            }
              }
              }
        },
    
        xAxis: {
            categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
            '2016', '2017', '2018'],
           type: 'datetime',
           title: {text: 'Year'}
        },
    
        legend: {
            align: 'center',
            verticalAlign: 'top',
            floating: false,
            backgroundColor: 'white',
        },
        credits: {
			enabled: false
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            },
        },
    
        series: [{
            name: 'US',
            data: [572000000, 560000000, 524000000, 494000000, 496000000, 509300000, 513300000, 560500000, 594800000, 603600000, 606100000,
                611900000],
                color: '#EA83BD'
        }, {
            name: 'International',
            data: [723000000, 800000000, 970000000, 1158000000, 1292000000, 1356800000, 1362000000, 1335600000, 1273500000, 1307700000,
                1348200000, 1459800000],
                color: '#005ea6'
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
}

function plotLineStore() {
    lineStores = Highcharts.chart('store', {
        chart: {
                    zoomType: 'x'
        },
        title: {
            text: 'Yearly Number of Stores'
        },
    
        subtitle: {
            text: 'Source: <a href="http://investor.dunkinbrands.com/annual-report-proxy">Dunkin\' Brands</a>'
        },
        yAxis: {
            title: {
                text: 'Number of Stores'
            },
        },
    
        xAxis: {
            categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
            '2016', '2017', '2018'],
           type: 'datetime',
           title: {text: 'Year'}
        },
    
        legend: {
            align: 'center',
            verticalAlign: 'top',
            floating: false,
            backgroundColor: 'white',
        },
        credits: {
			enabled: false
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
            }
        },
    
        series: [{
            name: 'US',
            data: [2763, 2692, 2597, 2547, 2457, 2463.0, 2467.0, 2529.0, 2529.0,
                2538.0, 2560.0, 2550.0],
                color: '#EA83BD'
        }, {
            name: 'International',
            data: [3111, 3321, 3610, 3886, 4254, 4556.0, 4833.0, 5023.0, 5078.0,
                5284.0, 5422.0, 5491.0],
                color: '#005ea6'
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
}

function plotPieStore() {
    Highcharts.chart('pieStore', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Distribution of Stores in 2018'
        },
        subtitle: {
            text: 'Source: <a href="http://investor.dunkinbrands.com/annual-report-proxy">Dunkin\' Brands</a>'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                // cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    distance: '-50%',
                    color: 'white',
                    style: {
                        fontSize: '14px'
                    },
                },
                showInLegend: true
            }        
        },
        series: [{
            name: 'Location',
            colorByPoint: true,
            data: [{
                name: 'US',
                y: 2550,
                color: '#EA83BD'
            }, {
                name: 'International',
                y: 5491,
                color: '#005ea6'
            }]
        }],
        legend: {
            align: 'center',
            verticalAlign: 'top'
        },
        credits: {
			enabled: false
        },
        });
}

function plotOldPieStore() {
    Highcharts.chart('pieOldStore', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Distribution of Stores in 2007'
        },
        subtitle: {
            text: 'Source: <a href="http://investor.dunkinbrands.com/annual-report-proxy">Dunkin\' Brands</a>'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                // cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    distance: '-50%',
                    color: 'white',
                    style: {
                        fontSize: '14px'
                    }
                },
                showInLegend: true
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'top'
        },
        credits: {
			enabled: false
        },
        series: [{
            name: 'Location',
            colorByPoint: true,
            data: [{
                name: 'US',
                y: 2763,
                color: '#EA83BD'
            }, {
                name: 'International',
                y: 3111,
                color: '#005ea6' 
            }]
        }]
        });
}

function plotSalesStore() {
    Highcharts.chart('pieSale', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Distribution of Sales in 2018'
        },
        subtitle: {
            text: 'Source: <a href="http://investor.dunkinbrands.com/annual-report-proxy">Dunkin\' Brands</a>'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                // cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    distance: '-50%',
                    color: 'white',
                    style: {
                        fontSize: '14px'
                    }
                },
                showInLegend: true
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'top'
        },
        credits: {
			enabled: false
        },
        series: [{
            name: 'Location',
            colorByPoint: true,
            data: [{
                name: 'US',
                y: 611900000,
                color: '#EA83BD'
            }, {
                name: 'International',
                y: 1459800000,
                color: '#005ea6' 
            }]
        }]
        });
}

function plotOldSalesStore() {
    Highcharts.chart('pieOldSale', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Distribution of Sales in 2007'
        },
        subtitle: {
            text: 'Source: <a href="http://investor.dunkinbrands.com/annual-report-proxy">Dunkin\' Brands</a>'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                // allowPointSelect: true,
                // cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f} %',
                    distance: '-50%',

                    color: 'white',
                    style: {
                        fontSize: '14px'
                    }
                    
                },
                showInLegend: true
            }
        },
        legend: {
            align: 'center',
            verticalAlign: 'top'
        },
        credits: {
			enabled: false
        },
        series: [{
            name: 'Type',
            colorByPoint: true,
            data: [{
                name: 'US',
                y: 572000000,
                color: '#EA83BD'
            }, {
                name: 'International',
                y: 723000000,
                color: '#005ea6' 
            }]
        }]
        });
}

function plotConsumption() {
    Highcharts.chart('consumption', {
        chart: {
                    zoomType: 'x'
        },
        title: {
            text: 'Ice Cream Consumption in the United States'
        },
        subtitle: {
            text: 'Source: <a href="https://www.ers.usda.gov/data-products/food-availability-per-capita-data-system/">USDA</a>'
        },
        yAxis: {
            title: {
                text: 'Yearly Consumption (lbs) per Person'
            },
        },
    
        xAxis: {
            title: {
                text: 'Year'
            },
            categories: [1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977,
                1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
                1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
                2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
                2011, 2012, 2013, 2014, 2015, 2016, 2017],
                tickInterval: 5        
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
            }
        },
    
        series: [{
            name: 'Consumption in Pounds',
            data: [16.9, 17.3, 17. , 16.7, 16.6, 16.5, 16.4, 16.5, 18.2, 17.6, 17.3,
                17.2, 16.9, 17.1, 17. , 17.2, 17.7, 17.8, 17.7, 18. , 17.9, 16.9,
                15.8, 15.4, 15.9, 15.6, 15.5, 15.4, 15. , 15.1, 15.5, 15.7, 16.2,
                16.1, 15.8, 16.2, 15.9, 14.6, 15.1, 15.3, 14.8, 14.2, 13.9, 14. ,
                13.2, 13.2, 13. , 12.5, 12.9, 12.9, 12.8],
                color: '#005ea6'
        }],
        legend: {
            align: 'center',
            verticalAlign: 'top',
            floating: false,
            backgroundColor: 'white',
        },
        credits: {
			enabled: false
        },
        
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
        },    
    });
}
function init() {
    plotStore();
    plotLineSales();
    plotLineStore();
    plotPieStore();
    plotSalesStore();
    plotOldPieStore();
    plotOldSalesStore();
    plotConsumption();
}

document.addEventListener('DOMContentLoaded', init, false)