var wms_layers = [];


        var lyr_GoogleEarthSatellite_0 = new ol.layer.Tile({
            'title': 'Google Earth Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DesaSemelagiBesar_1 = new ol.format.GeoJSON();
var features_DesaSemelagiBesar_1 = format_DesaSemelagiBesar_1.readFeatures(json_DesaSemelagiBesar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaSemelagiBesar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaSemelagiBesar_1.addFeatures(features_DesaSemelagiBesar_1);
var lyr_DesaSemelagiBesar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaSemelagiBesar_1, 
                style: style_DesaSemelagiBesar_1,
                popuplayertitle: 'Desa Semelagi Besar',
                interactive: true,
                title: '<img src="styles/legend/DesaSemelagiBesar_1.png" /> Desa Semelagi Besar'
            });
var format_RumahJekswan_2 = new ol.format.GeoJSON();
var features_RumahJekswan_2 = format_RumahJekswan_2.readFeatures(json_RumahJekswan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahJekswan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahJekswan_2.addFeatures(features_RumahJekswan_2);
var lyr_RumahJekswan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahJekswan_2, 
                style: style_RumahJekswan_2,
                popuplayertitle: 'Rumah Jekswan',
                interactive: true,
                title: '<img src="styles/legend/RumahJekswan_2.png" /> Rumah Jekswan'
            });

lyr_GoogleEarthSatellite_0.setVisible(true);lyr_DesaSemelagiBesar_1.setVisible(true);lyr_RumahJekswan_2.setVisible(true);
var layersList = [lyr_GoogleEarthSatellite_0,lyr_DesaSemelagiBesar_1,lyr_RumahJekswan_2];
lyr_DesaSemelagiBesar_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'luas_km': 'luas_km', 'luas_ha': 'luas_ha', 'ID': 'ID', 'nama': 'nama', });
lyr_RumahJekswan_2.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', 'Koordinat': 'Koordinat', 'Web': 'Web', 'Nama': 'Nama', 'Foto Ku': 'Foto Ku', });
lyr_DesaSemelagiBesar_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'luas_km': 'TextEdit', 'luas_ha': 'TextEdit', 'ID': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahJekswan_2.set('fieldImages', {'id': 'TextEdit', 'Lokasi': 'TextEdit', 'Koordinat': 'TextEdit', 'Web': 'TextEdit', 'Nama': 'TextEdit', 'Foto Ku': 'ExternalResource', });
lyr_DesaSemelagiBesar_1.set('fieldLabels', {'NAMOBJ': 'hidden field', 'WIADKC': 'no label', 'WIADKK': 'no label', 'luas_km': 'hidden field', 'luas_ha': 'hidden field', 'ID': 'hidden field', 'nama': 'hidden field', });
lyr_RumahJekswan_2.set('fieldLabels', {'id': 'hidden field', 'Lokasi': 'no label', 'Koordinat': 'no label', 'Web': 'no label', 'Nama': 'hidden field', 'Foto Ku': 'header label - visible with data', });
lyr_RumahJekswan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});