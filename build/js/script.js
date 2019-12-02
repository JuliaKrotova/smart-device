'use strict';

document.addEventListener('DOMContentLoaded', function() {
  //event handlers -----------------------------
  var sectionsToggle = document.querySelector('.page-footer__sections-container button');
  var addressToggle = document.querySelector('.page-footer__address-container button');

  var description = document.querySelector('.about-us__description');
  var aboutUsToggle = document.querySelector('.about-us__button');

  sectionsToggle.addEventListener('click', function() {
    var parent = this.closest('.page-footer__sections');
    if (parent.classList.contains('page-footer__sections--close')) {
      parent.classList.remove('page-footer__sections--close');
    } else {
      parent.classList.add('page-footer__sections--close');
    }
  });

  addressToggle.addEventListener('click', function() {
    var parent = this.closest('.page-footer__address');
    if (parent.classList.contains('page-footer__address--close')) {
      parent.classList.remove('page-footer__address--close');
    } else {
      parent.classList.add('page-footer__address--close');
    }
  });

  aboutUsToggle.addEventListener('click', function() {
    description.classList.remove('about-us__description--height');
    description.innerHTML = allHtml;
  });

  //clip text ----------------------------------
  if (window.innerWidth < 1024) {
    var clone = document.createElement('div');
    clone.classList.add('about-us__description');

    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.width = description.clientWidth + 'px';
    clone.innerHTML = description.innerHTML;
    document.body.appendChild(clone);

    var lastChild = clone.children[description.children.length - 1];
    var text = lastChild.innerHTML;

    var l = text.length - 1;
    while (l >= 0 && clone.clientHeight > description.clientHeight) {

      while (text[l] != ' ') l--;
      lastChild.innerHTML = text.substring(0, l) + '...';
      l--;

    }

    var allHtml = description.innerHTML;
    description.innerHTML = clone.innerHTML;
    clone.remove();
  }
});
