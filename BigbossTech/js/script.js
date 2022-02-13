const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 4000);

function changeSlides() {
	slides[prevActive].classList.remove('active');
	controls[prevActive].classList.remove('active');

	slides[activeSlide].classList.add('active');
	controls[activeSlide].classList.add('active');
	
	prevActive = activeSlide++;
	
	if(activeSlide >= slides.length) {
		activeSlide = 0;
	}
	
	console.log(prevActive, activeSlide);
}

controls.forEach(control => {
	control.addEventListener('click', () => {
		let idx = [...controls].findIndex(c => c === control);
		activeSlide = idx;

		changeSlides();

		clearInterval(int);
		int = setInterval(changeSlides, 4000);
	});
});

// COUNTER
// const counters = document.querySelectorAll(".count");
// const speed = 50;

// counters.forEach((counter) => {
//   const updateCount = () => {
//     const target = parseInt(+counter.getAttribute("data-target"));
//     const count = parseInt(+counter.innerText);
//     const increment = Math.trunc(target / speed);
//     console.log(increment);

//     if (count < target) {
//       counter.innerText = count + increment;
//       setTimeout(updateCount, 1);
//     } else {
//       count.innerText = target;
//     }
//   };
//   updateCount();
// });



//   document.querySelector(document).ready(function(){
//     document.querySelector('.counter').counterUp({
//       delay: 10,
//       time: 1200
//     });
//   });    



document.querySelector(document).ready(function(){
    document.querySelector('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});



document.querySelector(".gallery").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:  {
        enabled:true,
    }
})

// document.querySelector(document).ready(function() {
//     document.querySelector('.clients').slick({
//         slidesToShow:6,
//         slidesToScroll:1,
//         autoplay:true,
//         autoplaySpeed:1500,
//         arrows:false,
//         dots:false,
//         pauseOnHover:false,
//         responsive:[{
//             breakpoint:768,
//             setting: {
//                 slidesToShow:4
//             }
//         }, {
//             breakpoint:520,
//             setting: {
//                 slidesToShow:3
//             }
//         }]
//     });
// });




