const wow = new WOW({
    mobile: false,
});

wow.init();

// Проверка на каком устройстве и в каком браузере открыто

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
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
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");

  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let index = 0; index < menuArrows.length; index++) {
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}
// меню бургер

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menuList = document.querySelector(".menu__list");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuList.classList.toggle("display__flex-bitween");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

$("#sendMail").click(function () {
  let email = $("#email").val().trim();
  let name = $("#name").val().trim();
  let surname = $("#surname").val().trim();
  let checkbox = $("#checkbox").is(":checked");
  let date = $("#date").val().trim();

  if (name == "") {
    $(".errorMessage").text(" Введите имя!");
    return false;
  } else if (surname == "") {
    $(".errorMessage").text(" Введите фамилию!");
    return false;
  } else if (email == "") {
    $(".errorMessage").text(" Введите email!");
    return false;
  } else if (!checkbox) {
    $(".errorMessage").text(
      " Вы не соглосились с политикой конфиденциальности!"
    );
    return false;
  }

  $(".errorMessage").text("");

  $.ajax({
    url: "php/index.php",
    type: "POST",
    cache: false,
    data: { name: name, email: email, surname: surname, date: date },
    dataType: "html",
    beforeSend: function () {
      $("#sendMail").prop("disabled", true);
    },
    success: function (data) {
      if (data) {
        $("#hidden-content").trigger("reset");
        alert("Сообщение отправлено!");
        $("#sendMail").prop("disabled", false);
      } else {
        if (!data) alert("Что-то пошло не так! Сообщение не отправлено.");
        $("#sendMail").prop("disabled", false);
      }
    },
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  watchOverflow: true,

  speed: 800,
});
