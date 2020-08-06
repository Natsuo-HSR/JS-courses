function showModalViaOverlay() {
    $('.overlay').fadeIn(2000);
    $('.modal').slideDown(1200);
}

function closeModal() {
    $('.modal').slideUp(1200);
    $('.overlay').fadeOut(2000);
}



$(document).ready(function() {
    $('.main_btna').on('click', showModalViaOverlay);
    $('.main_btn').on('click', showModalViaOverlay);
    $('a:contains("расписания туров")').on('click', showModalViaOverlay);
    $('.close').on('click', closeModal);
    console.log($('li:eq(1) a'));
});