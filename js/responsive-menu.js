const open_close_menu = document.querySelector('.open_close_menu');
const open_close_menu_icon = document.querySelector('.open_close_menu span');
const sidebar = document.querySelector('.wrapper .content .sidebar');

// SIDEBAR 
open_close_menu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        open_close_menu_icon.innerHTML = 'filter_list';
    } else {
        open_close_menu_icon.innerHTML = 'sort';
    }
});




const subm = document.querySelector('.btn-toggle-subInfo');
const submIcon = document.querySelector('.btn-toggle-subInfo span');
const info = document.querySelector('header .inHeader .info');
const modal = document.querySelector('.modal');


// SUBMENU MOBILE INFO
subm.addEventListener('click', () => {
    info.classList.toggle('active');
    modal.classList.add('active');
    if (info.classList.contains('active')) {
        submIcon.innerHTML = 'close';
    } else {
        submIcon.innerHTML = 'menu';
        modal.classList.remove('active');
    }

    // // Disable Submenu
    // if (sidebar.classList.contains('active')) {
    //     sidebar.classList.toggle('active');
    //     btnToggle.innerHTML = 'menu';
    // }
});


// ABLE AND DISABLE
modal.addEventListener('click', () => {
    info.classList.remove('active');
    submIcon.innerHTML = 'menu';

    modal.classList.remove('active');
});