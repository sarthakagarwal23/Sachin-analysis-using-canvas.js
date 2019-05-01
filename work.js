window.onload = function () {

 var chart0 = new CanvasJS.Chart("chartContainer0", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Run scored during the career"
	},
	axisY:{
		includeZero: false
	},
	data: [{        
		type: "line",       
		dataPoints: [
  {y:0},{y:0},{y:36},{y:10},{y:20},{y:19},{y:31},{y:36},{y:53},{y:30},{y:4},{y:53},{y:52},{y:22},{y:11},{y:49},{y:0},{y:62},{y:4},{y:1},{y:1},{y:36},{y:57},{y:48},{y:21},{y:77},{y:31},{y:57},{y:4},{y:69},{y:35},{y:11},{y:54},{y:81},{y:4},{y:84},{y:14},{y:39},{y:15},{y:10},{y:22},{y:21},{y:32},{y:23},{y:21},{y:82},{y:1},{y:3},{y:24},{y:5},{y:34},{y:3},{y:8},{y:21},{y:15},{y:25},{y:26},{y:2},{y:24},{y:3},{y:15},{y:28},{y:1},{y:11},{y:52},{y:15},{y:82},{y:63},{y:40},{y:63},{y:73},{y:6},{y:24},{y:11},{y:6},{y:110},{y:0},{y:0},{y:0},{y:8},{y:115},{y:34},{y:62},{y:66},{y:54},{y:88},{y:105},{y:13},{y:37},{y:47},{y:41},{y:4},{y:112},{y:41},{y:30},{y:39},{y:7},{y:65},{y:1},{y:127},{y:70},{y:90},{y:137},{y:3},{y:31},{y:65},{y:28},{y:100},{y:1},{y:2},{y:118},{y:17},{y:57},{y:30},{y:6},{y:1},{y:110},{y:40},{y:7},{y:89},{y:20},{y:2},{y:3},{y:23},{y:11},{y:88},{y:64},{y:28},{y:62},{y:67},{y:114},{y:0},{y:6},{y:1},{y:14},{y:41},{y:104},{y:32},{y:45},{y:13},{y:44},{y:65},{y:9},{y:1},{y:117},{y:2},{y:4},{y:21},{y:28},{y:53},{y:27},{y:6},{ y:27},{y:39},{y:17},{y:25},{y:0},{y:6},{y:51},{y:2},{y:21},{ y:7},{y:91},{y:3},{y:1},{y:82},{ y:6},{y:54},{y:67},{y:95},{y:1},{y:41},{y:8},{y:5},{y:100},{y:1},{y:15},{y:40},{y:80},{y:38},{y:143},{y:134},{y:33},{y:18},{ y:100 },{y:65},{y:53},{ y:17},{y:128},{y:77},{y:127},{y:29},{y:2},{y:141},{y:8},{y:3},{y:118},{y:18},{y:11},{ y:124},{y:0},{y:23},{y:45}, {y:5},{y:28},{ y:140},{y:2},{y:22},{y:0},{y:45},{y:16},{y:14},{y:37},{y:120},{y:85},{y:40},{y:0 },{y:32},{y:186},{y:1},{y:2},{y:0},{y:13},{y:12},{y:1},{y:93},{y:41},{y:18},{y:17},{y:3},{y:26},{y:21},{y:12},{y:122},{y:93},{y:5},{y:11},{y:10},{y:39},{y:36},{y:93},{y:25},{y:25},{y:38},{y:39},{y:69},{y:101},{y:8},{y:4},{y:61},{y:5},{y:44},{y:8},{y:146},{y:62},{y:27},{y:35},{y:32},{y:139},{y:62},{y:12},{y:70},{y:9},{y:81},{y:122},{y:0},{y:101},{y:38},{y:3},{y:37},{y:146},{y:17},{y:36},{y:45},{y:68},{y:87},{y:18},{y:12},{y:34},{y:65},{y:1},{y:49},{y:105},{y:19},{y:36},{y:113},{y:14},{y:7},{y:9},{y:16},{y:7},{y:0},{y:1},{y:1},{y:52},{y:36},{y:81},{y:152},{y:50},{y:98},{y:5},{y:97},{y:15},{y:83},{y:4},{y:48},{y:100},{y:68},{y:14},{y:89},{y:102},{y:45},{y:63},{y:44},{y:86},{y:5},{y:3},{y:8},{y:27},{y:28},{y:141},{y:0},{y:7},{y:37},{y:18},{y:11},{y:82},{y:78},{y:18},{y:74},{y:16},{y:19},{y:47},{y:4},{y:2},{y:6},{y:123},{y:1},{y:9},{y:93},{y:67},{y:2},{y:11},{y:19},{y:39},{y:2},{y:2},{y:2},{y:30},{y:100},{y:42},{y:95},{y:0},{y:2},{y:141},{y:12},{y:65},{y:4},{y:35},{y:29},{y:10},{y:35},{y:2},{y:1},{y:55},{y:31},{y:0},{y:60},{y:100},{y:54},{y:1},{y:7},{y:57},{y:0},{y:4},{y:99},{y:93},{y:8},{y:17},{y:99},{y:8},{y:55},{y:71},{y:94},{y:30},{y:0},{y:16}, {y:43},{y:79},{y:47},{y:72},{y:21},{y:4},{y:99},{y:29},{y:97},{y:30},{y:10},{y:35},{y:44},{y:32},{y:5},{y:0},{y:2},{y:63},{y:117},{y:91},{y:11},{y:50},{y:5},{y:6},{y:7},{y:20},{y:61},{y:163},{y:46},{y:27},{y:138},{y:8},{y:14},{y:4},{y:32},{y:40},{y:175},{y:10},{y:69},{y:43},{y:96},{y:8},{y:4},{y:200},{y:7},{y:24},{y:28},{y:120},{y:38},{y:27},{y:111},{y:2},{y:53},{y:85},{y:18},{y:2},{y:48},{y:15},{y:3},{y:22},{y:14},{y:39},{y:6},{y:114},{y:52}
     ]
   }]
});
chart0.render();


var chart1 = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title: {
		text: "Runs conceded by Sachin as a bowler against oppositions"
	},
	axisY: {
		title: "Runs Conceded",
		
		includeZero: false
	},
	axisX: {
		title: "Countries"
	},
	data: [{
		type: "column",
	
		dataPoints: [
			{ label: "Australi", y: 567 },	
			{ label: "Bangladesh", y: 130 },	
			{ label: "England", y: 320 },
			{ label: "New Zealand", y: 272 },	
			{ label: "Pakistan", y: 395 },
			{ label: "South Africa", y: 300 },
			{ label: " Ssri Lanka", y: 74 },
			{ label: "South Afirca", y: 262},
			{ label: "Kenya", y: 172 },
			{ label: "Bermuda", y: 30 },
			{ label: "UAE", y: 15 },
			{ label: "Ireland", y: 75 }
			
		]
	}]
});
chart1.render();

var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	exportEnabled: true,
	theme: "light1", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Wickets Taken By Sachin Year Wise"
	},
	data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#5A5757",
		indexLabelPlacement: "outside",
		dataPoints:  [
			{ x: 1990, y: 2 },
			{ x: 1991, y: 6 },
			{ x: 1992, y: 4 },
			{ x: 1993, y: 4 },
			{ x: 1994, y: 14 },
			{ x: 1995, y: 4 },
			{ x: 1996, y: 9 },
			{ x: 1997, y: 6 },
			{ x: 1998, y: 24 },
			{ x: 1999, y: 5 },
			{ x: 2000, y: 20 },
			{ x: 2002, y: 5 },
			{ x: 2002, y: 7 },
			{ x: 2003, y: 3 },
			{ x: 2004, y: 19 },
			{ x: 2005, y: 8},
			{ x: 2006, y: 3},
			{ x: 2007, y: 11 },
			{ x: 2008, y: 0},
			{ x: 2009, y: 0 },
			{ x: 2011, y: 0 },
			{ x: 2012, y: 0 }
			
		]
	}]
});
chart2.render();



var chart3 = new CanvasJS.Chart("chartContainer3", {
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	exportEnabled: true,
	animationEnabled: true,
	title: {
		text: "Match Result Share Played By Sachin"
	},
	data: [{
		type: "pie",
		startAngle: 25,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 51.2, label: "Win" },
			{ y: 42.20, label: "Loss" },
			{ y: 1.07, label: "Tied" },
			{ y: 5.38, label: "N/R" }
		]
	}]
});
chart3.render();

var chart4 = new CanvasJS.Chart("chartContainer4", {
	animationEnabled: true,
	title:{
		text: "Century analysis of Sachin year wise"
	},
	axisX: {
		title:"Years"
	},
	axisY:{
		title: "Number"
	},
	data: [{
		type: "scatter",
		toolTipContent: "<span style=\"color:#4F81BC \"><b>{name}</b></span><br/><b> Year:</b> {x} <br/><b> Number:</b></span> {y} ",
		name: "Full century",
		showInLegend: true,
		dataPoints: [
			{ x: 1990, y: 0 },
			{ x: 1991, y: 0 },
			{ x: 1992, y: 0 },
			{ x: 1993, y: 0 },
			{ x: 1994, y: 3 },
			{ x: 1995, y: 1 },
			{ x: 1996, y: 6 },
			{ x: 1997, y: 2 },
			{ x: 1998, y: 9 },
			{ x: 1999, y: 3 },
			{ x: 2000, y: 3 },
			{ x: 2001, y: 4 },
			{ x: 2002, y: 2 },
			{ x: 2003, y: 3 },
			{ x: 2004, y: 1 },
			{ x: 2005, y: 1},
			{ x: 2006, y: 2},
			{ x: 2007, y: 1 },
			{ x: 2008, y: 1},
			{ x: 2009, y: 3 },
			{ x: 2010, y: 1 },
			{ x: 2011, y: 2 },
			{ x: 2012, y: 1 }
		]
	},
	{
		type: "scatter",
		name: "Half Century",
		showInLegend: true, 
		toolTipContent: "<span style=\"color:#C0504E \"><b>{name}</b></span><br/><b> Year :</b> {x} <br/><b> Number:</b></span> {y} ",
		dataPoints: [
			{ x: 1990, y: 1 },
			{ x: 1991, y: 4 },
			{ x: 1992, y: 6 },
			{ x: 1993, y: 1 },
			{ x: 1994, y: 9 },
			{ x: 1995, y: 1 },
			{ x: 1996, y: 9 },
			{ x: 1997, y: 5 },
			{ x: 1998, y: 7 },
			{ x: 1999, y: 1 },
			{ x: 2000, y: 6 },
			{ x: 2002, y: 3 },
			{ x: 2002, y: 3 },
			{ x: 2003, y: 8 },
			{ x: 2004, y: 5 },
			{ x: 2005, y: 2 },
			{ x: 2006, y: 3},
			{ x: 2007, y: 13 },
			{ x: 2008, y: 3},
			{ x: 2009, y: 3 },
			{ x: 2011, y: 2 },
			{ x: 2012, y: 1 }
		]
	}]
});
chart4.render();

var chart5 = new CanvasJS.Chart("chartContainer5", {
	animationEnabled: true,
	title: {
		text: "Graphical Analysis of Wickets Taken by Batting Order  "
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 29.9, label: "Top order(1-3)"},
			{y: 50, label: "Middle Order(4-7)"},
			{y: 20.1, label: "Tail(8-11)"}
		]
	}]
});
chart5.render();


}