var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Export_Output_1 = new ol.format.GeoJSON();
var features_Export_Output_1 = format_Export_Output_1.readFeatures(json_Export_Output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_1.addFeatures(features_Export_Output_1);
var lyr_Export_Output_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_1, 
                style: style_Export_Output_1,
                interactive: true,
    title: 'Export_Output<br />\
    <img src="styles/legend/Export_Output_1_0.png" /> Agriculture - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_1.png" /> Agriculture - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_2.png" /> Agriculture - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_3.png" /> Agriculture - HSP<br />\
    <img src="styles/legend/Export_Output_1_4.png" /> Agriculture - River<br />\
    <img src="styles/legend/Export_Output_1_5.png" /> Agriculture - Urban<br />\
    <img src="styles/legend/Export_Output_1_6.png" /> Agriculture - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_7.png" /> Agriculture - Water Body<br />\
    <img src="styles/legend/Export_Output_1_8.png" /> Dry Fellow - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_9.png" /> Dry Fellow - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_10.png" /> Dry Fellow - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_11.png" /> Dry Fellow - HSP<br />\
    <img src="styles/legend/Export_Output_1_12.png" /> Dry Fellow - River<br />\
    <img src="styles/legend/Export_Output_1_13.png" /> Dry Fellow - Urban<br />\
    <img src="styles/legend/Export_Output_1_14.png" /> Dry Fellow - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_15.png" /> Dry Fellow - Water Body<br />\
    <img src="styles/legend/Export_Output_1_16.png" /> Fish Farm - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_17.png" /> Fish Farm - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_18.png" /> Fish Farm - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_19.png" /> Fish Farm - HSP<br />\
    <img src="styles/legend/Export_Output_1_20.png" /> Fish Farm - River<br />\
    <img src="styles/legend/Export_Output_1_21.png" /> Fish Farm - Urban<br />\
    <img src="styles/legend/Export_Output_1_22.png" /> Fish Farm - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_23.png" /> Fish Farm - Water Body<br />\
    <img src="styles/legend/Export_Output_1_24.png" /> HSP - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_25.png" /> HSP - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_26.png" /> HSP - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_27.png" /> HSP - HSP<br />\
    <img src="styles/legend/Export_Output_1_28.png" /> HSP - Urban<br />\
    <img src="styles/legend/Export_Output_1_29.png" /> HSP - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_30.png" /> HSP - Water Body<br />\
    <img src="styles/legend/Export_Output_1_31.png" /> River - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_32.png" /> River - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_33.png" /> River - HSP<br />\
    <img src="styles/legend/Export_Output_1_34.png" /> River - River<br />\
    <img src="styles/legend/Export_Output_1_35.png" /> River - Urban<br />\
    <img src="styles/legend/Export_Output_1_36.png" /> River - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_37.png" /> River - Water Body<br />\
    <img src="styles/legend/Export_Output_1_38.png" /> Urban - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_39.png" /> Urban - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_40.png" /> Urban - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_41.png" /> Urban - HSP<br />\
    <img src="styles/legend/Export_Output_1_42.png" /> Urban - River<br />\
    <img src="styles/legend/Export_Output_1_43.png" /> Urban - Urban<br />\
    <img src="styles/legend/Export_Output_1_44.png" /> Urban - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_45.png" /> Urban - Water Body<br />\
    <img src="styles/legend/Export_Output_1_46.png" /> Vegetation - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_47.png" /> Vegetation - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_48.png" /> Vegetation - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_49.png" /> Vegetation - HSP<br />\
    <img src="styles/legend/Export_Output_1_50.png" /> Vegetation - Urban<br />\
    <img src="styles/legend/Export_Output_1_51.png" /> Vegetation - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_52.png" /> Vegetation - Water Body<br />\
    <img src="styles/legend/Export_Output_1_53.png" /> Water Body - Agriculture<br />\
    <img src="styles/legend/Export_Output_1_54.png" /> Water Body - Dry Fellow<br />\
    <img src="styles/legend/Export_Output_1_55.png" /> Water Body - Fish Farm<br />\
    <img src="styles/legend/Export_Output_1_56.png" /> Water Body - HSP<br />\
    <img src="styles/legend/Export_Output_1_57.png" /> Water Body - River<br />\
    <img src="styles/legend/Export_Output_1_58.png" /> Water Body - Urban<br />\
    <img src="styles/legend/Export_Output_1_59.png" /> Water Body - Vegetation<br />\
    <img src="styles/legend/Export_Output_1_60.png" /> Water Body - Water Body<br />\
    <img src="styles/legend/Export_Output_1_61.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Export_Output_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Export_Output_1];
lyr_Export_Output_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Raster': 'FID_Raster', 'Class_Name': 'Class_Name', 'area_2003': 'area_2003', 'FID_Rast_1': 'FID_Rast_1', 'Class_Na_1': 'Class_Na_1', 'area_2023': 'area_2023', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Change': 'Change', 'change_are': 'change_are', });
lyr_Export_Output_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_Raster': 'TextEdit', 'Class_Name': 'TextEdit', 'area_2003': 'TextEdit', 'FID_Rast_1': 'TextEdit', 'Class_Na_1': 'TextEdit', 'area_2023': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Change': 'TextEdit', 'change_are': 'TextEdit', });
lyr_Export_Output_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_Raster': 'hidden field', 'Class_Name': 'hidden field', 'area_2003': 'hidden field', 'FID_Rast_1': 'hidden field', 'Class_Na_1': 'hidden field', 'area_2023': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Change': 'inline label - always visible', 'change_are': 'hidden field', });
lyr_Export_Output_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});