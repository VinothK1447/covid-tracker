import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_data_countries2 from '@amcharts/amcharts4-geodata/data/countries2';
import am4themes_spiritedaway from '@amcharts/amcharts4/themes/spiritedaway';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_animated);

class Chart extends Component {
	componentDidMount() {
		var defaultMap = 'usaAlbersLow';
		var currentMap = defaultMap;
		var title = '';
		// var displayData = this.props.displayData;
		if (am4geodata_data_countries2[this.props.countryCode] !== undefined) {
			currentMap =
				am4geodata_data_countries2[this.props.countryCode]['maps'][0];
			if (am4geodata_data_countries2[this.props.countryCode]['country']) {
				title =
					am4geodata_data_countries2[this.props.countryCode][
						'country'
					];
			}
		}
		var chart = am4core.create('chartdiv', am4maps.MapChart);
		chart.titles.create().text = title;
		chart.geodataSource.url =
			'https://www.amcharts.com/lib/4/geodata/json/' +
			currentMap +
			'.json';
		chart.geodataSource.events.on('parseended', function (ev) {
			var data = [];
			console.log(ev.target.data.features);
			for (var i = 0; i < ev.target.data.features.length; i++) {
				data.push({
					id: ev.target.data.features[i].id,
					value: 123,
				});
			}

			polygonSeries.data = data;
		});
		chart.maxZoomLevel = 1;
		chart.seriesContainer.draggable = false;
		chart.seriesContainer.resizable = false;
		chart.projection = new am4maps.projections.Mercator();
		var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
		polygonSeries.heatRules.push({
			property: 'fill',
			target: polygonSeries.mapPolygons.template,
			min: chart.colors.getIndex(1).brighten(1),
			max: chart.colors.getIndex(1).brighten(-0.3),
		});
		polygonSeries.useGeodata = true;

		var polygonTemplate = polygonSeries.mapPolygons.template;
		polygonTemplate.tooltipText = '{name}: {value}';
		polygonTemplate.nonScalingStroke = true;
		polygonTemplate.strokeWidth = 0.5;

		var hs = polygonTemplate.states.create('hover');
		hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);
	}

	componentWillUnmount() {
		if (this.chart) {
			this.chart.dispose();
		}
	}

	render() {
		return <div id='chartdiv'></div>;
	}
}

export default Chart;
