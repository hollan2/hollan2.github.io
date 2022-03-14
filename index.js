function showAndHide(className) {
    for (let i = 0; i < 5; i++) {
        let str = 'descr' + i;
        let tab = 'tab' + i;
        if (str == className) {
            document.getElementsByClassName(str)[0].style.display = 'block';
        } else {
            document.getElementsByClassName(str)[0].style.display = 'none';
        }
    }
}

function changeImage() {
    let img = document.getElementsByClassName('cat-btn-img')[0];
    let str = img.src;
    let res = str.search('cat_button_altered.jpg');
    if (res >= 0) {
        img.src = 'images/cat_button.jpg';
    } else {
        img.src = 'images/cat_button_altered.jpg';
        document.getElementsByClassName('dropdown-content')[0].style.display =
            'block';
    }
}