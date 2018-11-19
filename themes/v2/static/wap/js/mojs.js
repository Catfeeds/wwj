// footerjs

$(function () {
    $('.ol-qq').find('.fa').removeClass('fa-qq').addClass('fa-weixin');
    $('.ol-qq').on('click', function () {
        return false;
    })

    function showqr(link) {
        if ($('._fakeDom').length) return $('._fakeDom');
        var _fakeDom = '<div class="_fakeDom" style="display: none; z-index:999; position: fixed; top: 0; left: 0;background: rgba(0,0,0,.5); width: 100vw; height: 100vh;"> <img src="' + link + '" style="width: 60%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"> </div>';

        var $_fakeDom = $(_fakeDom).appendTo('body').on('click', function () {
            $(this).hide()
        });
        $_fakeDom.find('img').on('click', function () {
            return false;
        })

        return $_fakeDom;

    }

    if ($('#mcontact .mobile').length) {
        var link = $('.ol-qq').attr('href');
        if (!link) return;
        var _fakeDom = showqr(link)
        $('.ol-qq').off('click').on('click', function () {
            _fakeDom.show();
            return false;
        })

    }

});