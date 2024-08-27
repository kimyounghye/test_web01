//top으로 올라가는 버튼
$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })
});



//패밀리링크
$(function () {
    $('#flnk').on('change', function () {
        const lnk = $(this).val();
        if (lnk) {
            window.open(lnk)
        }
    })
});

