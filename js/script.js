const body = document.querySelector('body');

const shareBtn1 = document.querySelector('.btn1');
const shareBtn2 = document.querySelector('.btn2');

const outer = document.querySelector('.outer-media');
const profileBox = document.querySelector('.profile-box');
let rect = profileBox.getBoundingClientRect();

const shareBox = document.querySelector('.share-box');

let theHeight = rect.height;

function showElement() {
	let clientWidth = body.clientWidth;
	if (clientWidth < 800) {
		shareBox.classList.remove('hide');
		setTimeout(100);
		shareBox.style.height = theHeight + 'px';
	} else if (outer.classList.contains('active')) {
		outer.classList.remove('active');
		shareBtn1.classList.remove('activebtn');
	} else {
		outer.classList.add('active');
		shareBtn1.classList.add('activebtn');
	}
}

function hideElement() {
	let clientWidth = body.clientWidth;
	if (clientWidth < 800) {
		shareBox.style.height = '0';
		setTimeout(100);
		shareBox.classList.add('hide');
	}
}

shareBtn1.addEventListener('click', showElement);
shareBtn2.addEventListener('click', hideElement);
