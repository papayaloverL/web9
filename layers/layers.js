ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([120.197445, 22.985975, 120.202085, 22.988516]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoads_1 = new ol.layer.Tile({
            'title': 'Google Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_park_3 = new ol.format.GeoJSON();
var features_park_3 = format_park_3.readFeatures(json_park_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_park_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_park_3.addFeatures(features_park_3);cluster_park_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_park_3
});
var lyr_park_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_park_3, 
                style: style_park_3,
                interactive: true,
                title: '<img src="styles/legend/park_3.png" /> park公園'
            });
var format_toiletheatmap_4 = new ol.format.GeoJSON();
var features_toiletheatmap_4 = format_toiletheatmap_4.readFeatures(json_toiletheatmap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_toiletheatmap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toiletheatmap_4.addFeatures(features_toiletheatmap_4);
var lyr_toiletheatmap_4 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_toiletheatmap_4, 
                radius: 10 * 2,
                gradient: ['#fef0d9', '#fdcc8a', '#fc8d59', '#e34a33', '#b30000'],
                blur: 15,
                shadow: 250,
                title: 'toilet(heatmap)公廁(熱點)'
            });
var format_bus_5 = new ol.format.GeoJSON();
var features_bus_5 = format_bus_5.readFeatures(json_bus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_bus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bus_5.addFeatures(features_bus_5);
var lyr_bus_5 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_bus_5, 
                radius: 10 * 2,
                gradient: ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177'],
                blur: 15,
                shadow: 250,
                title: 'bus公車'
            });
var format_church_6 = new ol.format.GeoJSON();
var features_church_6 = format_church_6.readFeatures(json_church_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_church_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_church_6.addFeatures(features_church_6);
var lyr_church_6 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_church_6, 
                radius: 10 * 2,
                gradient: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
                blur: 15,
                shadow: 250,
                title: 'church教堂'
            });
var format_temple_7 = new ol.format.GeoJSON();
var features_temple_7 = format_temple_7.readFeatures(json_temple_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_temple_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temple_7.addFeatures(features_temple_7);
var lyr_temple_7 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_temple_7, 
                radius: 10 * 2,
                gradient: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
                blur: 15,
                shadow: 250,
                title: 'temple寺廟'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoads_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_park_3.setVisible(true);lyr_toiletheatmap_4.setVisible(true);lyr_bus_5.setVisible(true);lyr_church_6.setVisible(true);lyr_temple_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoads_1,lyr_OSMStandard_2,lyr_park_3,lyr_toiletheatmap_4,lyr_bus_5,lyr_church_6,lyr_temple_7];
lyr_park_3.set('fieldAliases', {'編號': '編號', '公園名稱': '公園名稱', '里別': '里別', '面積': '面積', '類別': '類別', '座落位置': '座落位置', '使用分區': '使用分區', '所在轄區': '所在轄區', 'X座標': 'X座標', 'Y座標': 'Y座標', });
lyr_park_3.set('fieldImages', {'編號': 'Range', '公園名稱': 'TextEdit', '里別': 'TextEdit', '面積': 'TextEdit', '類別': 'TextEdit', '座落位置': 'TextEdit', '使用分區': 'TextEdit', '所在轄區': 'TextEdit', 'X座標': 'TextEdit', 'Y座標': 'TextEdit', });
lyr_park_3.set('fieldLabels', {'編號': 'no label', '公園名稱': 'header label', '里別': 'header label', '面積': 'header label', '類別': 'no label', '座落位置': 'header label', '使用分區': 'header label', '所在轄區': 'no label', 'X座標': 'no label', 'Y座標': 'no label', });
lyr_park_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});