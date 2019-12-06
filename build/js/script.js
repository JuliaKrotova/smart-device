'use strict';

document.addEventListener('DOMContentLoaded', function() {
  //event handlers -----------------------------
  var body = document.querySelector('body');
  var sectionsToggle = document.querySelector('.page-footer__sections-container button');
  var addressToggle = document.querySelector('.page-footer__address-container button');
  var sections = document.querySelector('.page-footer__sections');
  var address= document.querySelector('.page-footer__address');

  var description = document.querySelector('.about-us__description');
  var aboutUsToggle = document.querySelector('.about-us__button');

  var questionsForm = document.querySelector('.questions form');
  var isStorageSupport = true;
  var nameField = document.querySelector('.questions input[name=name]');
  var phoneField = document.querySelector('.questions input[name=phone]');
  var questionField = document.querySelector('.questions textarea[name=question]');
  var name = "";
  var phone = "";
  var question = "";

  var feedbackButton = document.querySelector('.user-nav__call button');
  var modalFeedback = document.querySelector('.modal-backdrop');
  var modalClose = document.querySelector('.modal-close');
  var modalNameInput = document.querySelector('.modal input[name=name]');

  sectionsToggle.addEventListener('click', function() {
    if (sections.classList.contains('page-footer__sections--close')) {
      sections.classList.remove('page-footer__sections--close');
      address.classList.add('page-footer__address--close');
    } else {
      sections.classList.add('page-footer__sections--close');
    }
  });

  addressToggle.addEventListener('click', function() {
    if (address.classList.contains('page-footer__address--close')) {
      address.classList.remove('page-footer__address--close');
      sections.classList.add('page-footer__sections--close');
    } else {
      address.classList.add('page-footer__address--close');
    }
  });

  document.addEventListener('click', function(evt){
    var target = evt.target;
    if(target.tagName.toLowerCase() === "a"){

    var id  = target.getAttribute("href");
    if(id.startsWith("#")){
      evt.preventDefault();
      var scrollTarget = document.querySelector(id);
      var offsetTop = scrollTarget.offsetTop;
      window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
});
    }
    }
  })


  aboutUsToggle.addEventListener('click', function() {
    if (window.innerWidth < 1024) {
      description.classList.remove('about-us__description--height');
      description.innerHTML = allHtml;
    }
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

  //form data
  try {
    name = localStorage.getItem("name");
    phone = localStorage.getItem("phone");
    question = localStorage.getItem("question");
  } catch (err) {
    isStorageSupport = false;
  }

  if(name){
    nameField.value = name;
  }
  if(phone){
    phoneField.value = phone;
  }
  if(question){
    questionField.value = question;
  }

  questionsForm.addEventListener("submit", function(evt) {
    if (isStorageSupport) {
        localStorage.setItem("phone", phoneField.value);
        localStorage.setItem("name", nameField.value);
        localStorage.setItem("question", questionField.value);
      }
  });

  //modal

  feedbackButton.addEventListener("click", function(evt) {
    modalFeedback.classList.add("modal-open");
    modalNameInput.focus();
    body.classList.add('no-scroll');
  });
  modalClose.addEventListener("click", function(evt) {
    modalFeedback.classList.remove("modal-open");
    body.classList.remove('no-scroll');
  });
  modalFeedback.addEventListener("click", function(evt) {
    if(evt.target.classList.contains('modal-backdrop')){
      modalFeedback.classList.remove("modal-open");
      body.classList.remove('no-scroll');
    }
  });
  window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-open");
    body.classList.remove('no-scroll');
  }
});
});

var phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

  var modalPhoneMask = IMask(
    document.getElementById('modal-phone-mask'), {
      mask: '+{7}(000)000-00-00'
    });
