//let myMap;
 
//const init = function()  {
 //myMap = new yandexmaps.Map("map", {
 //  center: [55.76, 37.64],
 //  zoom: 11,
 //  controls:[],

 //});



//let coords = [
//    [59.94554327989287, 30.38935262114668],
//    [59.91142323563909, 30.50024587065841],
 //   [59.88693161784606, 30.319658102103713],
 //   [59.97033574821672, 30.315194906302924],
//  ],
//  myCollection = new yandexmaps.GeoObjectCollection({}, {
//    draggable: false,
//    iconLayout: 'default#image',
 //   iconImageHref: './img/icons/marker.svg',
 //   iconImageSize: [46, 57],
 //   iconImageOffset: [-35, -52]
 // });

//for (let i = 0; i < coords.length; i++) {
 // myCollection.add(new yandexmaps.Placemark(coords[i]));
//}

//myMap.geoObjects.add(myCollection);

//myMap.behaviors.disable('scrollZoom');
//};
//yandexmaps.ready(init);



const myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:10
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}

