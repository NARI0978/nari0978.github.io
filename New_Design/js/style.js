var _window = $(window),
    _header = $('.site-header'),
    _hamopen = $('.ham-open'),
    _logo = $('.ham-site-logo'),
    _content = $('.ham-content'),
    heroBottom;

_window.on('scroll', function() {
    heroBottom = $('.sw').height();
    if (_window.scrollTop() > heroBottom) {
        _header.addClass('transform');
        _hamopen.addClass('transform');
        _logo.addClass('transform');
        _content.addClass('transform');
    } else {
        _header.removeClass('transform');
        _hamopen.removeClass('transform');
        _logo.removeClass('transform');
        _content.removeClass('transform');
    }
});

_window.trigger('scroll');