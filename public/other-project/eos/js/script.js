'use strict'

window.addEventListener('scroll', function() {
    let windowCurrent = this;

    // Работа с якорями
    [...document.querySelectorAll('[id*=anchor]')].map(blocks => {
        if (windowCurrent.scrollY > blocks.offsetTop - 100) {
            [...document.querySelectorAll('.navigation a')].map(block => {
                block.classList.remove('active');

                if (('#' + blocks.getAttribute('id')) === block.getAttribute('href')) {
                    block.classList.add('active');
                }
            });
        } else { 
            [...blocks.querySelectorAll('[class*=fade-block__item]')].map(block => {
                block.classList.remove('fade-block__item--within');
            });
        }
    });

    // Добавление/удаление анимации для блоков
    [...document.querySelectorAll('.fade-block')].map(blocks => {
        if (windowCurrent.scrollY > blocks.offsetTop - 500) {
            [...blocks.querySelectorAll('[class*=fade-block__item]')].map(block => {
                block.classList.add('fade-block__item--within');
            });
        }
    });

    topMenuFixed(document.querySelector('.header'));
});

function topMenuFixed(elem) {
    let scrollTop = window.scrollY,
        coefOffset = document.querySelector('.wrapper--top').clientHeight,
        offset = elem.offsetTop + coefOffset;

    if ((scrollTop > offset) && !elem.classList.contains('fixed')) {
        elem.classList.add('fixed');
    }

    if ((scrollTop <= offset) && elem.classList.contains('fixed')) {
        elem.classList.remove('fixed');
    }
}