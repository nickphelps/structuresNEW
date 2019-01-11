//header scroll logic
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbartop').css('background', '#F8F8FF')
    } else {
        $('.navbartop').css('background', 'transparent')
    }
})


document.getElementById('submitButton').addEventListener('click', function () {
    let name = document.getElementById('name-field').value
    let phone = document.getElementById('phone-field').value
    let company = document.getElementById('company-field').value
    let email = document.getElementById('email-field').value
    let message = document.getElementById('form-message').value

    //ajax get that sends information to backend

    $.ajax({
        type: 'POST',
        url: '/form/info',
        data: {
            customerName: name,
            customerPhone: phone,
            customerCompany: company,
            customerEmail: email,
            customerMessage: message
        }
    })
        .then(function (result) {
            console.log(result)
            if (result === true) {
                document.getElementById('emailStatus').innerHTML = '<br/><h4 style="color: Green;">Message Sent</h4>'
                document.getElementById('contact-form').reset()
            }
        })
        .catch(function(err) {
            console.log(err)
        })
})//eventListener
