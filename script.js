'use strict';

const open_menu = document.querySelector('.menu-outline');
const sidebarMenu = document.querySelector('.sidebar');
const close_menu = document.querySelector('.close-outline');
const nav_list = document.querySelectorAll('.list-item');

open_menu.addEventListener('click', function () {
  sidebarMenu.classList.remove('hidden');
});

close_menu.addEventListener('click', function () {
  sidebarMenu.classList.add('hidden');
});

nav_list.forEach(function (item) {
  item.addEventListener('click', function () {
    sidebarMenu.classList.add('hidden');
  });
});
