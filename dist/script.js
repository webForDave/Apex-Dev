let menu_Opened = document.getElementById('menu-opened');
let menu_Closed = document.getElementById('menu-closed');
let open_icon = document.getElementById('open-icon');
let close_icon = document.getElementById('close-icon');

open_icon.addEventListener('click', () =>{
    menu_Opened.style.display = 'block';
    menu_Closed.style.display = 'none';
})

close_icon.addEventListener('click', () => {
    menu_Closed.style.display = 'flex';
    menu_Opened.style.display = 'none';
})
