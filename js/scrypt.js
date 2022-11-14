const popupWrapper = document.querySelector('#popupWrapper');
const btnOpenPopup = document.querySelector('#btnOpenPopup');

document.addEventListener('click', function (clickObject) {
  if (!clickObject.target.closest('#popup')) {
    popupWrapper.style.display = "none";
    document.body.classList.remove("lock");
  }
  if (clickObject.target.closest('#popapCloseBtn')) {
    popupWrapper.style.display = "none";
    document.body.classList.remove("lock");
  }
  if (clickObject.target.closest('#btnOpenPopup')) {
    popupWrapper.style.display = "flex";
    document.body.classList.toggle("lock");
  }
})
