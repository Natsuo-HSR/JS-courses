window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Tabs
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(a) {
        if (tabContent[a].classList.contains('hide')) {
            tabContent[a].classList.add('show');
            tabContent[a].classList.remove('hide');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Timer
    let finalDate = '2020-07-08 00:00:00';

    function getRemainingTime(finalDate) {
        let delta = Date.parse(finalDate) - Date.parse(new Date());
        let seconds = Math.floor((delta / 1000) % 60);
        let minutes = Math.floor((delta / 1000 / 60) % 60);
        let hours = Math.floor((delta / 1000 / 60 / 60));

        return {
            delta,
            seconds, 
            minutes,
            hours
        };
    }

    function setLock(selectorID, finalDate) {
        let timer = document.querySelector(selectorID);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');

        let timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getRemainingTime(finalDate);
            t.hours < 10 ? hours.textContent = '0' + t.hours :  
                hours.textContent = t.hours;

            t.minutes < 10 ? minutes.textContent = '0' + t.minutes :  
                minutes.textContent = t.minutes;

            t.seconds < 10 ? seconds.textContent = '0' + t.seconds :  
                seconds.textContent = t.seconds;

            if (t.delta <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    
    setLock('#timer', finalDate);


    // Modal
    function toggleModal(btn) {
        let overlay = document.querySelector('.overlay');
        let closeBtn = document.querySelector('.popup-close');
    
        btn.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    
        closeBtn.addEventListener('click', function() {
            overlay.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    }

    let moreBtn = document.querySelector('.more');
    toggleModal(moreBtn);

    let descrBtn = document.querySelector('.description-btn');
    toggleModal(descrBtn);

    
    // second task
    let age = document.getElementById('age');
    function showUser(surname, name) {
      alert("Пользователь " + surname + " " + name + 
      ", его возраст " + this.value);
    }
    


    // AJAX requests from modal
    
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form');
    let inputs = form.querySelectorAll('input');
    let statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    // configure requests from modal window
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        
        // *********** request-form ***********
        // request.setRequestHeader('Content-Type','application/x-www-form-urlencoder');
        // // getting data from form
        // let formData = new FormData(form);
        // request.send(formData);
        

        // *********** request-JSON ***********
        request.setRequestHeader('Content-type', 'application/json; charset=utf8');
        // converting data from form into JSON via temp object

        // getting data from form
        let formData = new FormData(form);
        let temp = {};
        formData.forEach(function(value, key) {
            temp[key] = value;
        });
        let json = JSON.stringify(temp);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            let promise = new Promise((resolve, reject) => {
                if (request.readyState < 4) {
                    resolve(message.loading);
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve(message.success);
                } else {
                    reject(message.failure);
                }
            });
            
            promise.then(data => statusMessage.textContent = data)
                .catch(data => statusMessage.textContent = data);
        });

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    });


    // configure requests from contacts window
    //let contactsCont = document.querySelector('.contact-form');
    //let contactsForm = contactsCont.querySelector('form');
    let contactsForm = document.querySelector('form');
    let contactsInputs = contactsForm.querySelectorAll('input');
    let contactStatusMessage = document.createElement('div');

    contactStatusMessage.classList.add('status');


    contactsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactsForm.appendChild(contactStatusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        request.setRequestHeader('Content-type', 'application/json; charset=utf8');
        
        // getting data from form
        let formData = new FormData(contactsForm);
        let temp = {};
        formData.forEach(function(value, key) {
            temp[key] = value;
        });
        console.log(temp);
        let json = JSON.stringify(temp);
        request.send(json);

        request.addEventListener('readystatechange', function() {
            let promise = new Promise((resolve, reject) => {
                if (request.readyState < 4) {
                    resolve(message.loading);
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve(message.success);
                } else {
                    reject(message.failure);
                }
            });
            
            promise.then(data => statusMessage.textContent = data)
                .catch(data => statusMessage.textContent = data);
            // if (request.readyState < 4) {
            //     contactStatusMessage.textContent = message.loading;
            // } else if (request.readyState === 4 && request.status == 200) {
            //         contactStatusMessage.textContent = message.success;
            // } else {
            //     contactStatusMessage.textContent = message.failure;
            // }
        });

        for (let i = 0; i < contactsInputs.length; i++) {
            contactsInputs[i].value = '';
        }
    });


    // Slider
    
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');


    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        } 

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
    });
    next.addEventListener('click', function() {
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', function(e) {
        for(let i = 0; i < dots.length; i++) {
            if (e.target.classList.contains('dot') && e.target == dots[i]) {
                currentSlide(i + 1);          
            }
        }
    });

    // Calc

    let person = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.querySelector('#select');
    let totalValue = document.querySelector('#total');
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.textContent = 0;

    person.addEventListener('input', function() {
        personsSum = +this.value;
        if (restDays.value != '' && this.value != '') {
            total = (daysSum + personsSum) * 4000;
            totalValue.textContent = total;
        } else {
            totalValue.textContent = 0;
        }
    });

    restDays.addEventListener('input', function() {
        daysSum = +this.value;
        if (person.value != '' && this.value != '') {
            total = (daysSum + personsSum) * 4000;
            totalValue.textContent = total;
        } else {
            totalValue.textContent = 0;
        }
    });

    place.addEventListener('change', function() {
        if (!(restDays.value == '' || person.value == '')) {
            totalValue.textContent = total * this.options[this.selectedIndex].value;
        } else {
            totalValue.textContent = 0;
        }
    });
});