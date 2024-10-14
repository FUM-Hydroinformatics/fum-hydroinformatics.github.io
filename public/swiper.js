// Import Swiper
import Swiper from 'swiper'

// Import Swiper modules
import { Navigation, FreeMode, Thumbs, Mousewheel, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

// Wait for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
	// Initialize thumbs swiper
	const thumbs_swiper = new Swiper('.thumbs', {
		modules: [FreeMode],
		spaceBetween: 3,
		slidesPerView: 7,
		freeMode: true,
		watchSlidesProgress: true
	})

	// Initialize main swiper
	const main_swiper = new Swiper('.main', {
		modules: [Navigation, Thumbs, Mousewheel, Autoplay],
		spaceBetween: 4,
		slidesPerView: 2,
		mousewheel: true,
		freeMode: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		autoplay: {
			delay: 1500
		},
		thumbs: {
			swiper: thumbs_swiper
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 4
			},
			768: {
				freeMode: false,
				slidesPerView: 3,
				spaceBetween: 4
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 4
			},
			1280: {
				slidesPerView: 7,
				spaceBetween: 4
			}
		}
	})
})
