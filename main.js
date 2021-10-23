new fullpage('#fullpage', {
	// Scrolling
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 800,
	scrollBar: false,
	scrollingSpeed: 900,
	
	// Navigation
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['HOME', 'ABOUT', 'MENU', 'CONTACT'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	// Design
	controlArrows: false,
	verticalCentered: true,
	responsiveSlides: true,

	//GSAP 
	afterRender: function () {
		homeSection();
	},
	
	onLeave: (origin, destination) => {
		if (destination.index == 1) {
			// About Section
			aboutSection ();
		}

		else if (destination.index == 2) {
			//Menu Section
			menuSection ();
		}

		else if (destination.index == 3) {
			//Contact Section
			contactSection ();
		}
	} 
});

// Home Section Animations
function homeSection () {
	// GSAP Timeline
	const tl = new TimelineMax({delay: 0.5});

	//Element Animation
	tl.from('#logo', {scale: 0.1, opacity: 0, duration: 1.5})
	  .from('.bg', {opacity: 0, duration: 1})
	  .from('.view-menu', {opacity: 0, duration: 0.8})
	  .from('.jumpto-s3', {y: 50, opacity: 0, ease: 'bounce', duration:0.8})
	  .from('.orderbtn', {opacity: 0, scale: 0.1, ease: 'elastic', duration: 0.6});
}

// About Section Animations
function aboutSection (_destination) {

	// GSAP Timeline
	const tl = new TimelineMax({delay: 0.2});

	//Element Animation
	tl.from('h1', {opacity: 0, duration: 0.8})
	  .from('p', {opacity: 0, duration: 0.8})
	  .from('.glider-contain', {opacity: 0, duration: 0.8})
	  .from('h4', {opacity: 0, scale: 0.1, ease: 'elastic', duration: 0.6});
}

// Image Carousel - Glider.js
new Glider(document.querySelector('.glider'), {
	slidesToShow: 1,
	slidesToScroll: 1,
	scrollLock: true,
	draggable: true,
	arrows: {
	  prev: '.glider-prev',
	  next: '.glider-next',
	},
	
	responsive: [
    {
    	breakpoint: 768,
    	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	itemWidth: 150,
        	duration: 0.25,
      }
    },{
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  itemWidth: 150,
		  duration: 0.25,
      }
    }
  ]
});

// Menu Section Animations
function menuSection (_destination) {

	// GSAP Timeline
	const tl = new TimelineMax({delay: 0.2});

	//Element Animation
	tl.from('h1', {opacity: 0, duration: 0.8})
	  .from('h2', {opacity: 0, duration: 0.8})
	  .from('li', {opacity: 0, duration:0.8})
	  .from('.next-slide-btn', {opacity: 0, duration: 0.6}, '+=0.5');
}

// Next Slide
let nextSlideBtn = document.querySelectorAll('.next-slide-btn');
nextSlideBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		fullpage_api.moveSlideRight();
	});
});

// Previous Slide
let prevSlideBtn = document.querySelectorAll('.prev-slide-btn');
prevSlideBtn.forEach(btn => {
	btn.addEventListener('click', () => {
		fullpage_api.moveSlideLeft();
	});
});

// Contact Section Animations
function contactSection (_destination) {
	
	// GSAP Timeline
	const tl = new TimelineMax({delay: 0.2});

	//Element Animation
	tl.from('h1', {opacity: 0, duration: 0.5})
	  .from('p', {opacity: 0, duration: 0.5})
	  .from('#footer', {opacity: 0, duration:0.8});
}

// Jump to Menu Section Btns
let jumptoS3Btns = document.querySelectorAll('.jumpto-s3');
jumptoS3Btns.forEach(btn => {
	btn.addEventListener('click', () => {
	fullpage_api.moveTo(3);
	});
});

// Back to Top Btn
let backtoTopBtn = document.querySelector('.home');
backtoTopBtn.addEventListener('click', () => {
	fullpage_api.moveTo(1);
});

// Order Now Alert
const orderBtn = document.querySelector('.orderbtn');
const container = document.querySelector('.orderalert');
const alert = container.querySelector('sl-alert');

orderBtn.addEventListener('click', () => alert.show());