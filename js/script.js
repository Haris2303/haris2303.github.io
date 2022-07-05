// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    const href = $(this).attr('href')
        // tangkap element
    const elementHref = $(href)
    console.log(elementHref.offset().top)

    // pindahkan scroll
    $('html').animate({
        scrollTop: elementHref.offset().top - 50
    }, 800, 'swing')

    e.preventDefault()

})

// $(window).scroll(function() {
//     console.log($('body').offset().top)
// })

$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    const navbar = $('.navbar')
    if (scroll < 500) {
        navbar.removeClass('bg-success')
    } else if (scroll > 500 && scroll < 1130) {
        navbar.addClass('bg-success')
    }
    // 1113
    else if (scroll > 1130 && scroll < 2139) {
        navbar.removeClass('bg-success')
    }
    // 2139
    else if (scroll > 2135 && scroll < 4564) {
        navbar.addClass('bg-success')
    }
    // 4564
    else {
        navbar.removeClass('bg-success')
    }
})