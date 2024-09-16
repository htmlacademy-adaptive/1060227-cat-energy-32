// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//           center: [59.938631, 30.323037],
//           zoom: 14
//       }, {
//           searchControlProvider: 'yandex#search'
//       }),

//       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//           hintContent: 'Cat Energy',
//           balloonContent: 'Это красивая метка'
//       }, {
//           // Опции.
//           // Необходимо указать данный тип макета.
//           iconLayout: 'default#image',
//           // Своё изображение иконки метки.
//           iconImageHref: '../images/map-pin@2x.png',
//           // Размеры метки.
//           iconImageSize: [90, 80]
//       });

//   myMap.geoObjects
//       .add(myPlacemark)
//       .add(myPlacemarkWithContent);
// });

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/map-pin@2x.png',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
