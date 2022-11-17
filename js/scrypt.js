const popupWrapper = document.querySelector('#popupWrapper');
const btnOpenPopup = document.querySelector('#btnOpenPopup');

if (btnOpenPopup) {
  document.addEventListener('click', function (clickObject) {
    if (!clickObject.target.closest('#popup')) {
      popupWrapper.classList.remove('active-popup');
      document.body.classList.remove("lock");
    }
    if (clickObject.target.closest('#popapCloseBtn')) {
      popupWrapper.classList.remove('active-popup');
      document.body.classList.remove("lock");
    }
    if (clickObject.target.closest('#btnOpenPopup')) {
      popupWrapper.classList.add('active-popup');
      document.body.classList.add("lock");
    }
  })
}

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iphone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opear Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('touch')
} else {
  document.body.classList.add('pc')
}

const burger = document.querySelector(".menu__burger")
const headerBlock = document.querySelector(".header__block")


if (burger) {
  burger.addEventListener("click", function () {
    headerBlock.classList.toggle('active');
    burger.classList.toggle('active');
    if (headerBlock.classList.contains("active") && window.screen.width < 820) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });
}
