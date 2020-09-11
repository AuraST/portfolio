'use strict'

document.addEventListener("DOMContentLoaded", () => {
    let menuBtn = document.querySelector('.menu__button'),
        skillIcon = document.getElementsByClassName('skill__item-icon')[0];

    menuBtn.onclick = () => {
        if (!menuBtn.classList.contains('menu__button--close')) {
            menuBtn.classList.add('menu__button--close');
            document.querySelector('.menu__list').style.display = 'block';
        } else  {
            menuBtn.classList.remove('menu__button--close');
            document.querySelector('.menu__list').style.display = 'none';
        }
    }

    document.onclick = (e) => {
        if (e.target.classList.contains('skill__item-tag')) {
            [...document.querySelectorAll('.skill__item-info')].map(blocks => {
                if (blocks == e.target.previousElementSibling && !blocks.classList.contains('skill__item-info--active')) {
                    blocks.classList.add('skill__item-info--active');
                } else {
                    blocks.classList.remove('skill__item-info--active');
                }
            });
        } else {
            [...document.querySelectorAll('.skill__item-info')].map(blocks => {
                blocks.classList.remove('skill__item-info--active');
            });
        }

        if (!e.target.classList.contains('menu__button') && document.documentElement.clientWidth < 991) {
            menuBtn.classList.remove('menu__button--close');
            document.querySelector('.menu__list').style.display = 'none';
        }
    }
})