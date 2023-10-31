/*!
 * we send tech LLC (https://wesend.tech)
 * 10.30.2023
 */
const chartDataSets = (labels, data, backgroundColor, opts) => {
	return {
		labels,
		datasets: [ {
			label: 'Usage',
			data,
			backgroundColor,
			hoverOffset: opts?.offset || 4
		} ]
	}
}

const donutChart = document.getElementById( 'donutChart' )
new Chart( donutChart, {
	type: 'doughnut',
	data: chartDataSets( [
		'Item 1',
		'Item 2',
		'Item 3'
	], [ 90, 50, 75 ], [
		'#ced4da',
		'#adb5bd',
		'#6c757d'
	] ),
	options: {
		plugins: {
			legend: {
				display: false
			}
		}
	}
} )

const pieChart = document.getElementById( 'pieChart' )
new Chart( pieChart, {
	type: 'pie',
	data: chartDataSets(
		[
			'Item 1',
			'Item 2',
			'Item 3'
		],
		[ 90, 50, 75 ],
		[
			'#495057',
			'#343a40',
			'#212529'
		] ),
	options: {
		plugins: {
			legend: {
				display: false
			}
		}
	}
} )

const lineChart = document.getElementById( 'lineChart' )
const lineChartData = {
	labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ],
	datasets: [ {
		label: 'First Qtr',
		data: [ 35, 42, 55, 62, 45, 47, 80 ],
		fill: true
	} ]
}
new Chart( lineChart, {
	type: 'line',
	data: lineChartData,
	options: {
		plugins: {
			legend: {
				display: false
			}
		}
	}
} )

const totalSales = document.getElementById( 'totalSales' )
const totalSalesSelects = document.getElementById( 'total_sales_options' )
const totalSalesData = [
	[
		65,
		59,
		80,
		81,
		56,
		55,
		40,
		33,
		22,
		17,
		50,
		99
	],
	[
		99,
		50,
		17,
		22,
		33,
		55,
		56,
		81,
		80,
		59,
		65,
		40
	],
	[
		99,
		50,
		17,
		22,
		33,
		55,
		56,
		81,
		80,
		59,
		65,
		40
	],
	[
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	],
	[
		99,
		50,
		17,
		22,
		33,
		55,
		56,
		81,
		80,
		59,
		65,
		40
	],
	[
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	],
	[
		99,
		50,
		17,
		22,
		33,
		55,
		56,
		81,
		80,
		59,
		65,
		40
	],
	[
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	],
	[
		99,
		50,
		17,
		22,
		33,
		55,
		56,
		81,
		80,
		59,
		65,
		40
	],
	[
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	],
	[
		99,
		50,
		17,
		22,
		33,
		55,
		56,
		81,
		80,
		59,
		65,
		40
	],
	[
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12
	]
]
let totalSalesChart = new Chart( totalSales, {
	type: 'line',
	data: {
		labels: [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ],
		datasets: [ {
			data: totalSalesData[0],
			fill: false,
			borderColor: 'rgb(75, 192, 192)',
			tension: 0.1
		} ]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		}
	}
} )
const selectedOption = (data) => {
	let tempData
	const val = totalSalesSelects.value
	switch (val) {
		case 'jan':
			tempData = totalSalesData[0]
			break
		case 'feb':
			tempData = totalSalesData[1]
			break
		case 'mar':
			tempData = totalSalesData[2]
			break
		case 'apr':
			tempData = totalSalesData[3]
			break
		case 'may':
			tempData = totalSalesData[4]
			break
		case 'jun':
			tempData = totalSalesData[5]
			break
		case 'jul':
			tempData = totalSalesData[6]
			break
		case 'aug':
			tempData = totalSalesData[7]
			break
		case 'sep':
			tempData = totalSalesData[8]
			break
		case 'oct':
			tempData = totalSalesData[9]
			break
		case 'nov':
			tempData = totalSalesData[10]
			break
		case 'dec':
			tempData = totalSalesData[11]
			break
	}
	if (tempData) {
		totalSalesChart.destroy()
		totalSalesChart = new Chart( totalSales, {
			type: 'line',
			data: {
				labels: [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ],
				datasets: [ {
					label: 'My First Dataset',
					data: tempData,
					fill: false,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				} ]
			},
			options: {
				plugins: {
					legend: {
						display: false
					}
				}
			}
		} )
	}
}

const barChart = document.getElementById( 'barChart' )
new Chart( barChart, {
	type: 'bar',
	data: {
		labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ],
		datasets: [ {
			// label: 'Bar Chart',
			data: [ 65, 59, 80, 81, 56, 55, 40 ],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(201, 203, 207, 0.2)'
			],
			borderColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(201, 203, 207)'
			],
			borderWidth: 1
		} ]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		}
	}
} )