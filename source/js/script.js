'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var sectionsToggle = document.querySelector('.page-footer__sections-container button');
  var addressToggle = document.querySelector('.page-footer__address-container button');

  sectionsToggle.addEventListener('click', function () {
    var parent = this.closest('.page-footer__sections');
    if (parent.classList.contains('page-footer__sections--close')) {
      parent.classList.remove('page-footer__sections--close');
    } else {
      parent.classList.add('page-footer__sections--close');
    }
  });

  addressToggle.addEventListener('click', function () {
    var parent = this.closest('.page-footer__address');
    if (parent.classList.contains('page-footer__address--close')) {
      parent.classList.remove('page-footer__address--close');
    } else {
      parent.classList.add('page-footer__address--close');
    }
  });
});