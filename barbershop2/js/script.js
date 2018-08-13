'use strict';

var loginButton = document.querySelector('a.login');
var loginCloseButton = document.querySelector('.modal-content .modal-content-close');
var mapOpenButton = document.querySelector('.map-open-button');
var mapCloseButton = document.querySelector('.modal-content-map .modal-content-close');

var loginOverlay = document.querySelector('.modal-content');
var mapOverlay = document.querySelector('.modal-content-map');

var showLogin = function (evt) {
  evt.preventDefault();
  loginOverlay.style['display'] = 'block';
};

var hideLogin = function () {
  loginOverlay.style['display'] = 'none';
};

var showMap = function (evt) {
  evt.preventDefault();
  mapOverlay.style['display'] = 'block';
};

var hideMap = function () {
  mapOverlay.style['display'] = 'none';
};

loginButton.addEventListener('click', showLogin);
loginCloseButton.addEventListener('click', hideLogin);
mapOpenButton.addEventListener('click', showMap);
mapCloseButton.addEventListener('click', hideMap);
