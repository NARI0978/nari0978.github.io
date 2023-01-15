var _window = $(window),
    _header = $('.site-header'),
    _hamopen = $('.ham-open'),
    _content = $('.ham-content'),
    heroBottom;

_window.on('scroll', function() {
    heroBottom = $('.hero').height();
    if (_window.scrollTop() > heroBottom) {
        _header.addClass('transform');
        _hamopen.addClass('transform');
        _content.addClass('transform');
    } else {
        _header.removeClass('transform');
        _hamopen.removeClass('transform');
        _content.removeClass('transform');
    }
});

_window.trigger('scroll');