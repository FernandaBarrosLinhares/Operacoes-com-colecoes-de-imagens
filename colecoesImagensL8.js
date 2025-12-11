//Coleções de imagens - Ex. Landsat 8 é uma ee.ImageCollection
//Pesquisar uma imagem L8 e importar para o código:

//var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA');

//Filtros para coleções:

//var filtroEspacial = l8.filterBounds(brasilia);
//print('Filtro espacial', filtroEspacial);

//var filtroTemporal = filtroEspacial.filterDate('2015-01-01', '2015-12-31');
//print('Filtro temporal + espacial', filtroTemporal);

//Classificando os resultados:
// Classificar do menos para o mais nublado.

//var classificar = filtroTemporal.sort('CLOUD_COVER');

// Obtenha a primeira (com menos nuvens).

//var menosNuvens = classificar.first();
//print(menosNuvens);

//Imagem RGB:

//Outros parâmetros de visualização da Landsat8:
//https://www.usgs.gov/media/images/common-landsat-band-rgb-composites

//Cores verdadeiras

var visParams = {bands: ['B4', 'B3', 'B2'], max: 0.3}; 

//Cores falsa cor

//var visParams = {bands: ['B5', 'B4', 'B3'], max: 0.3};

//Composicao para agricultura para ver vigor e falha de plantio

//var visParams = {bands: ['B6', 'B5', 'B4'], max: 0.3}

//Map.addLayer(menosNuvens, visParams, 'Composição em cores verdadeiras');
//Map.addLayer(menosNuvens, visParams, 'Composição falsa cor');

//Exibindo coleções de imagens:
//Exibir imagens de 2016, Landsat, utilizando o visParams já definido.

var l8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA');
var landsat2016 = l8.filterDate('2016-01-01', '2016-12-31');
Map.addLayer(landsat2016, visParams, 'Coleção Landsat 8');