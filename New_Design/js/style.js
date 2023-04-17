var _body = $('body');

function isChecked() {
    if (document.getElementById('ham-check').checked) {
        _body.addClass('dontmove');
    } else {
        _body.removeClass('dontmove');
    }
}