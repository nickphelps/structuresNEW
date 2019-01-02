//header scroll logic
$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('.navbartop').css('background', '#F8F8FF')
    } else {
        $('.navbartop').css('background', 'transparent')
    }
})

//Home Page Card Logic
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