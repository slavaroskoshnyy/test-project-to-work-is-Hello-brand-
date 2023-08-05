$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});

// $("#hidden-content").submit(function(){
// 	let str = $(this).serialize();
// 	$.ajax({
// 		type: "POST",
// 		url: "php/index.php",
// 		data: str,
// 		success: function(html){
// 			$('.content_p').html(html);
// 		}
// 	});
// 	return false;
// })

$('#sendMail').click (function () {
	let email = $('#email').val().trim();
	let name = $('#name').val().trim();
	let surname = $('#surname').val().trim();
	let checkbox = $('#checkbox').is(':checked');
	let date = $('#date').val().trim();


	if (name == "") {
		$(".errorMessage").text(' Введите имя!');
		return false;
	} else if (surname == "") {
		$(".errorMessage").text(' Введите фамилию!');
		return false;
	}else if (email == "") {
		$(".errorMessage").text(' Введите email!');
		return false;
	} else if (!checkbox) {
		$(".errorMessage").text(' Вы не соглосились с политикой конфиденциальности!');
		return false;
	};

	$('.errorMessage').text('')

	$.ajax({
		url:'php/index.php',
		type:'POST',
		cache: false,
		data:	{'name':name, 'email':email, 'surname':surname, 'date': date},
		dataType: 'html',
		beforeSend: function () {
			$('#sendMail').prop ("disabled", true);
		},
		success: function(data) {
			if (data) {
				$('#hidden-content').trigger ("reset")
				alert("Сообщение отправлено!");
				$('#sendMail').prop ("disabled", false);
			} else {
				if (!data)				
					alert ("Что-то пошло не так! Сообщение не отправлено.");
			$('#sendMail').prop ("disabled", false);				
		}
	}
	});
});

// const swiper = new Swiper('.swiper', {
// 	speed: 400,
// 	spaceBetween: 100,
//  });
 	
// Позволяет установить разные параметры для разных контрольных точек (размеров экрана). В точках останова можно изменить не все параметры, а только те, которые не требуют другой схемы и логики, например slidesPerView, slidesPerGroup, spaceBetween, grid.rows. Такие параметры вроде loopи effectне подойдут

// const swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     // when window width is >= 640px
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   }
// })

const swiper = new Swiper('.swiper', {
	loop: true,

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	slideToClickedSlide: true,
 
	keyboard: {
		enabled: true,
		onlyInViewport:true,
		pageUpDown: true,
	},

	mousewheel: {
		sensitivity: 1,
	},

	watchOverflow: true,

	speed: 800,

	breakpoints: {
		// when window width is >= 320px
		// 320: {
		//   slidesPerView: 2,
		//   spaceBetween: 20
		// },
		// // when window width is >= 480px
		// 480: {
		//   slidesPerView: 3,
		//   spaceBetween: 30
		// },
		// // when window width is >= 640px
		// 640: {
		//   slidesPerView: 4,
		//   spaceBetween: 40
		// },
	},
 });