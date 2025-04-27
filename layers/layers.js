var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KOTAPARIAMAN_1 = new ol.format.GeoJSON();
var features_KOTAPARIAMAN_1 = format_KOTAPARIAMAN_1.readFeatures(json_KOTAPARIAMAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPARIAMAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPARIAMAN_1.addFeatures(features_KOTAPARIAMAN_1);
var lyr_KOTAPARIAMAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPARIAMAN_1, 
                style: style_KOTAPARIAMAN_1,
                popuplayertitle: 'KOTA PARIAMAN',
                interactive: true,
                title: '<img src="styles/legend/KOTAPARIAMAN_1.png" /> KOTA PARIAMAN'
            });
var format_KawasanRawan_2 = new ol.format.GeoJSON();
var features_KawasanRawan_2 = format_KawasanRawan_2.readFeatures(json_KawasanRawan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanRawan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanRawan_2.addFeatures(features_KawasanRawan_2);
var lyr_KawasanRawan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanRawan_2, 
                style: style_KawasanRawan_2,
                popuplayertitle: 'Kawasan Rawan ',
                interactive: true,
                title: '<img src="styles/legend/KawasanRawan_2.png" /> Kawasan Rawan '
            });
var format_KABPADANGPARIAMAN_3 = new ol.format.GeoJSON();
var features_KABPADANGPARIAMAN_3 = format_KABPADANGPARIAMAN_3.readFeatures(json_KABPADANGPARIAMAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KABPADANGPARIAMAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KABPADANGPARIAMAN_3.addFeatures(features_KABPADANGPARIAMAN_3);
var lyr_KABPADANGPARIAMAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KABPADANGPARIAMAN_3, 
                style: style_KABPADANGPARIAMAN_3,
                popuplayertitle: 'KAB PADANG PARIAMAN',
                interactive: true,
                title: '<img src="styles/legend/KABPADANGPARIAMAN_3.png" /> KAB PADANG PARIAMAN'
            });
var format_16Des2024_4 = new ol.format.GeoJSON();
var features_16Des2024_4 = format_16Des2024_4.readFeatures(json_16Des2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16Des2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16Des2024_4.addFeatures(features_16Des2024_4);
var lyr_16Des2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16Des2024_4, 
                style: style_16Des2024_4,
                popuplayertitle: '16 Des 2024',
                interactive: true,
                title: '<img src="styles/legend/16Des2024_4.png" /> 16 Des 2024'
            });
var format_16des2024buffer16_des_2024_5 = new ol.format.GeoJSON();
var features_16des2024buffer16_des_2024_5 = format_16des2024buffer16_des_2024_5.readFeatures(json_16des2024buffer16_des_2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16des2024buffer16_des_2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16des2024buffer16_des_2024_5.addFeatures(features_16des2024buffer16_des_2024_5);
var lyr_16des2024buffer16_des_2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_16des2024buffer16_des_2024_5, 
                style: style_16des2024buffer16_des_2024_5,
                popuplayertitle: '16 des 2024 buffer — 16_des_2024',
                interactive: true,
                title: '<img src="styles/legend/16des2024buffer16_des_2024_5.png" /> 16 des 2024 buffer — 16_des_2024'
            });
var format_Buffered_6 = new ol.format.GeoJSON();
var features_Buffered_6 = format_Buffered_6.readFeatures(json_Buffered_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_6.addFeatures(features_Buffered_6);
var lyr_Buffered_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_6, 
                style: style_Buffered_6,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_6.png" /> Buffered'
            });
var format_9Des2024_7 = new ol.format.GeoJSON();
var features_9Des2024_7 = format_9Des2024_7.readFeatures(json_9Des2024_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9Des2024_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9Des2024_7.addFeatures(features_9Des2024_7);
var lyr_9Des2024_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9Des2024_7, 
                style: style_9Des2024_7,
                popuplayertitle: '9 Des 2024',
                interactive: true,
                title: '<img src="styles/legend/9Des2024_7.png" /> 9 Des 2024'
            });
var format_9des2024buffer9_des_2024_8 = new ol.format.GeoJSON();
var features_9des2024buffer9_des_2024_8 = format_9des2024buffer9_des_2024_8.readFeatures(json_9des2024buffer9_des_2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_9des2024buffer9_des_2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9des2024buffer9_des_2024_8.addFeatures(features_9des2024buffer9_des_2024_8);
var lyr_9des2024buffer9_des_2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9des2024buffer9_des_2024_8, 
                style: style_9des2024buffer9_des_2024_8,
                popuplayertitle: '9 des 2024 buffer — 9_des_2024',
                interactive: true,
                title: '<img src="styles/legend/9des2024buffer9_des_2024_8.png" /> 9 des 2024 buffer — 9_des_2024'
            });
var format_Buffered_9 = new ol.format.GeoJSON();
var features_Buffered_9 = format_Buffered_9.readFeatures(json_Buffered_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_9.addFeatures(features_Buffered_9);
var lyr_Buffered_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_9, 
                style: style_Buffered_9,
                popuplayertitle: 'Buffered',
                interactive: true,
                title: '<img src="styles/legend/Buffered_9.png" /> Buffered'
            });
var format_RumahIbadah_10 = new ol.format.GeoJSON();
var features_RumahIbadah_10 = format_RumahIbadah_10.readFeatures(json_RumahIbadah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahIbadah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahIbadah_10.addFeatures(features_RumahIbadah_10);
var lyr_RumahIbadah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahIbadah_10, 
                style: style_RumahIbadah_10,
                popuplayertitle: 'Rumah Ibadah',
                interactive: true,
                title: '<img src="styles/legend/RumahIbadah_10.png" /> Rumah Ibadah'
            });
var format_Wisata_11 = new ol.format.GeoJSON();
var features_Wisata_11 = format_Wisata_11.readFeatures(json_Wisata_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wisata_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wisata_11.addFeatures(features_Wisata_11);
var lyr_Wisata_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wisata_11, 
                style: style_Wisata_11,
                popuplayertitle: 'Wisata',
                interactive: true,
                title: '<img src="styles/legend/Wisata_11.png" /> Wisata'
            });
var format_SaraanaPendidikan_12 = new ol.format.GeoJSON();
var features_SaraanaPendidikan_12 = format_SaraanaPendidikan_12.readFeatures(json_SaraanaPendidikan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaraanaPendidikan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaraanaPendidikan_12.addFeatures(features_SaraanaPendidikan_12);
var lyr_SaraanaPendidikan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaraanaPendidikan_12, 
                style: style_SaraanaPendidikan_12,
                popuplayertitle: 'Saraana Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/SaraanaPendidikan_12.png" /> Saraana Pendidikan'
            });
var format_Pasar_13 = new ol.format.GeoJSON();
var features_Pasar_13 = format_Pasar_13.readFeatures(json_Pasar_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasar_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasar_13.addFeatures(features_Pasar_13);
var lyr_Pasar_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pasar_13, 
                style: style_Pasar_13,
                popuplayertitle: 'Pasar',
                interactive: true,
                title: '<img src="styles/legend/Pasar_13.png" /> Pasar'
            });
var format_SaranaPendidikan_14 = new ol.format.GeoJSON();
var features_SaranaPendidikan_14 = format_SaranaPendidikan_14.readFeatures(json_SaranaPendidikan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaranaPendidikan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaranaPendidikan_14.addFeatures(features_SaranaPendidikan_14);
var lyr_SaranaPendidikan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaranaPendidikan_14, 
                style: style_SaranaPendidikan_14,
                popuplayertitle: 'Sarana Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/SaranaPendidikan_14.png" /> Sarana Pendidikan'
            });
var format_RumahSakit_15 = new ol.format.GeoJSON();
var features_RumahSakit_15 = format_RumahSakit_15.readFeatures(json_RumahSakit_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_15.addFeatures(features_RumahSakit_15);
var lyr_RumahSakit_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSakit_15, 
                style: style_RumahSakit_15,
                popuplayertitle: 'Rumah Sakit',
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_15.png" /> Rumah Sakit'
            });
var format_TempatWisata_16 = new ol.format.GeoJSON();
var features_TempatWisata_16 = format_TempatWisata_16.readFeatures(json_TempatWisata_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatWisata_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatWisata_16.addFeatures(features_TempatWisata_16);
var lyr_TempatWisata_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatWisata_16, 
                style: style_TempatWisata_16,
                popuplayertitle: 'Tempat Wisata',
                interactive: true,
                title: '<img src="styles/legend/TempatWisata_16.png" /> Tempat Wisata'
            });
var format_TempatIbadah_17 = new ol.format.GeoJSON();
var features_TempatIbadah_17 = format_TempatIbadah_17.readFeatures(json_TempatIbadah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_17.addFeatures(features_TempatIbadah_17);
var lyr_TempatIbadah_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_17, 
                style: style_TempatIbadah_17,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_17.png" /> Tempat Ibadah'
            });
var group_FasilitasUmumKotaPariaman = new ol.layer.Group({
                                layers: [lyr_SaranaPendidikan_14,lyr_RumahSakit_15,lyr_TempatWisata_16,lyr_TempatIbadah_17,],
                                fold: 'close',
                                title: 'Fasilitas Umum Kota Pariaman'});
var group_FasilitasUmumKabPadangPariaman = new ol.layer.Group({
                                layers: [lyr_RumahIbadah_10,lyr_Wisata_11,lyr_SaraanaPendidikan_12,lyr_Pasar_13,],
                                fold: 'open',
                                title: 'Fasilitas Umum Kab Padang Pariaman'});
var group_HistoryGempa = new ol.layer.Group({
                                layers: [lyr_16Des2024_4,lyr_16des2024buffer16_des_2024_5,lyr_Buffered_6,lyr_9Des2024_7,lyr_9des2024buffer9_des_2024_8,lyr_Buffered_9,],
                                fold: 'close',
                                title: 'History Gempa '});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_KOTAPARIAMAN_1.setVisible(true);lyr_KawasanRawan_2.setVisible(true);lyr_KABPADANGPARIAMAN_3.setVisible(true);lyr_16Des2024_4.setVisible(true);lyr_16des2024buffer16_des_2024_5.setVisible(true);lyr_Buffered_6.setVisible(true);lyr_9Des2024_7.setVisible(true);lyr_9des2024buffer9_des_2024_8.setVisible(true);lyr_Buffered_9.setVisible(true);lyr_RumahIbadah_10.setVisible(true);lyr_Wisata_11.setVisible(true);lyr_SaraanaPendidikan_12.setVisible(true);lyr_Pasar_13.setVisible(true);lyr_SaranaPendidikan_14.setVisible(true);lyr_RumahSakit_15.setVisible(true);lyr_TempatWisata_16.setVisible(true);lyr_TempatIbadah_17.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_KOTAPARIAMAN_1,lyr_KawasanRawan_2,lyr_KABPADANGPARIAMAN_3,group_HistoryGempa,group_FasilitasUmumKabPadangPariaman,group_FasilitasUmumKotaPariaman];
lyr_KOTAPARIAMAN_1.set('fieldAliases', {'id': 'id', 'Penduduk': 'Penduduk', 'Cowok': 'Cowok', 'Cewek': 'Cewek', });
lyr_KawasanRawan_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KABPADANGPARIAMAN_3.set('fieldAliases', {'id': 'id', 'Penduduk': 'Penduduk', 'Laki Laki': 'Laki Laki', 'perempuan': 'perempuan', });
lyr_16Des2024_4.set('fieldAliases', {'id': 'id', 'MG': 'MG', });
lyr_16des2024buffer16_des_2024_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'MG': 'MG', });
lyr_Buffered_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'MG': 'MG', });
lyr_9Des2024_7.set('fieldAliases', {'id': 'id', 'MG': 'MG', });
lyr_9des2024buffer9_des_2024_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'MG': 'MG', });
lyr_Buffered_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'MG': 'MG', });
lyr_RumahIbadah_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Wisata_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_SaraanaPendidikan_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pasar_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_SaranaPendidikan_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahSakit_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TempatWisata_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_TempatIbadah_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KOTAPARIAMAN_1.set('fieldImages', {'id': 'TextEdit', 'Penduduk': 'TextEdit', 'Cowok': 'Range', 'Cewek': 'Range', });
lyr_KawasanRawan_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KABPADANGPARIAMAN_3.set('fieldImages', {'id': 'TextEdit', 'Penduduk': 'Range', 'Laki Laki': 'Range', 'perempuan': 'Range', });
lyr_16Des2024_4.set('fieldImages', {'id': 'TextEdit', 'MG': 'TextEdit', });
lyr_16des2024buffer16_des_2024_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'MG': 'TextEdit', });
lyr_Buffered_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'MG': 'TextEdit', });
lyr_9Des2024_7.set('fieldImages', {'id': 'TextEdit', 'MG': 'TextEdit', });
lyr_9des2024buffer9_des_2024_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'MG': 'TextEdit', });
lyr_Buffered_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'MG': 'TextEdit', });
lyr_RumahIbadah_10.set('fieldImages', {'id': '', 'nama': '', });
lyr_Wisata_11.set('fieldImages', {'id': '', 'nama': '', });
lyr_SaraanaPendidikan_12.set('fieldImages', {'id': '', 'nama': '', });
lyr_Pasar_13.set('fieldImages', {'id': '', 'nama': '', });
lyr_SaranaPendidikan_14.set('fieldImages', {'id': '', 'nama': '', });
lyr_RumahSakit_15.set('fieldImages', {'id': '', 'nama': '', });
lyr_TempatWisata_16.set('fieldImages', {'id': '', 'nama': '', });
lyr_TempatIbadah_17.set('fieldImages', {'id': '', 'nama': '', });
lyr_KOTAPARIAMAN_1.set('fieldLabels', {'id': 'no label', 'Penduduk': 'no label', 'Cowok': 'no label', 'Cewek': 'no label', });
lyr_KawasanRawan_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KABPADANGPARIAMAN_3.set('fieldLabels', {'id': 'no label', 'Penduduk': 'no label', 'Laki Laki': 'no label', 'perempuan': 'no label', });
lyr_16Des2024_4.set('fieldLabels', {'id': 'no label', 'MG': 'no label', });
lyr_16des2024buffer16_des_2024_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'MG': 'no label', });
lyr_Buffered_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'MG': 'no label', });
lyr_9Des2024_7.set('fieldLabels', {'id': 'no label', 'MG': 'no label', });
lyr_9des2024buffer9_des_2024_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'MG': 'no label', });
lyr_Buffered_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'MG': 'no label', });
lyr_RumahIbadah_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Wisata_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_SaraanaPendidikan_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pasar_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_SaranaPendidikan_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahSakit_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TempatWisata_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TempatIbadah_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_TempatIbadah_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});