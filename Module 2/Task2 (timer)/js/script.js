window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
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
    let finalDate = '2020-07-06';

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
});