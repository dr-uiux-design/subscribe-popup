/* ------------------- Крестик закрытия попапа -------------------- */
const popupClose = document.querySelectorAll('.popup-start__close');

// Закрываем попапы по нажатию на крестик
popupClose.forEach(button => {
	button.addEventListener('click', () => {
		cookiePopup.classList.remove('is-active');
		cookiePopup.classList.add('is-hidden');
		subscribePopup.classList.remove('is-active');
		subscribePopup.classList.add('is-hidden');
	});
});

/* ------------------- COOKIEPOPUP -------------------- */
const cookiePopup = document.querySelector('.cookie-popup');
const acceptCookie = document.querySelector('#accept-cookie');
const cancelCookie = document.querySelector('#cancel-cookie');

// Если кликнули на кнопку "Принять все", то закрываем попап и включаем прокрутку у body
acceptCookie.addEventListener('click', () => {
	cookiePopup.classList.remove('is-active');
	cookiePopup.classList.add('is-hidden');
});

// Если кликнули на кнопку "Отменить все", то закрываем попап и включаем прокрутку у body
cancelCookie.addEventListener('click', () => {
	cookiePopup.classList.remove('is-active');
	cookiePopup.classList.add('is-hidden');
});

/* ------------------- SUBSCRIBE -------------------- */
const subscribePopup = document.querySelector('.subscribe');
const subscribeClose = document.querySelector('#subscribe-close');

// Закрываем попап по нажатию на кнопку "Не сейчас"
subscribeClose.addEventListener('click', () => {
	subscribePopup.classList.remove('is-active');
	subscribePopup.classList.add('is-hidden');
});