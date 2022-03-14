function showAndHide(className) {
    for (let i = 0; i < 5; i++) {
        let str = 'descr' + i;
        let tab = 'tab' + i;
        if (str == className) {
            document.getElementsByClassName(str)[0].style.display = 'block';
            document.getElementsByClassName(tab)[0].style.background = '#555555';
        } else {
            document.getElementsByClassName(str)[0].style.display = 'none';
            document.getElementsByClassName(tab)[0].style.background =
                'rgb(54, 129, 142)';
        }
    }
}

function changeImage() {
    let img = document.getElementsByClassName('menu-btn-img')[0];
    let str = img.src;
    let res = str.search('menu_button_altered.jpg');
    if (res >= 0) {
        img.src = 'images/menu_button.jpg';
    } else img.src = 'images/menu_button_altered.jpg';
}