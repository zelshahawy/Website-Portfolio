$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyY6TXaXgDdtJbrevGl_tmevdxcL7SxlSlHYYlK2lvZKV5b8TnGizAEXdkvoAgR1V9HsQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you for your message! I will get back to you as soon as possible."
            setTimeout(function(){ msg.innerHTML = ""; }, 3000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
        })