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