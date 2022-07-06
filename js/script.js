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
    var scroll = $(window).scrollTop()
    const navbar = $('.navbar')
    if (scroll > 500) {
        navbar.addClass('bg-light')
        navbar.removeClass('navbar-dark')
        navbar.addClass('navbar-light')
    } else {
        navbar.removeClass('bg-light')
        navbar.removeClass('navbar-light')
        navbar.addClass('navbar-dark')
    }
})