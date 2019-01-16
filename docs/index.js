//header scroll logic
$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.navbartop').css('background', '#F5F5F5')
    } else {
        $('.navbartop').css('background', 'transparent')

        // $('.navbartop').css('background', 'rgba(164,182,202,0.75)')
        // $('.navbartop').css('opacity', '0.2')
    }
})

//Home Page Card Logic for Scope Cards
document.getElementById('flatwork-card').onmouseover = function() {
    document.getElementById('flatwork-innertext').style = 'opacity: 1;'
}

document.getElementById('flatwork-card').onmouseout = function() {
    document.getElementById('flatwork-innertext').style = 'opacity: 0;'
}

document.getElementById('waterfeature-card').onmouseover = function() {
    document.getElementById('waterfeature-innertext').style = 'opacity: 1;'
}

document.getElementById('waterfeature-card').onmouseout = function() {
    document.getElementById('waterfeature-innertext').style = 'opacity: 0;'
}

document.getElementById('foundation-card').onmouseover = function() {
    document.getElementById('foundation-innertext').style = 'opacity: 1;'
}

document.getElementById('foundation-card').onmouseout = function() {
    document.getElementById('foundation-innertext').style = 'opacity: 0;'
}

document.getElementById('pumptruck-card').onmouseover = function() {
    document.getElementById('pumptruck-innertext').style = 'opacity: 1;'
}

document.getElementById('pumptruck-card').onmouseout = function() {
    document.getElementById('pumptruck-innertext').style = 'opacity: 0;'
}