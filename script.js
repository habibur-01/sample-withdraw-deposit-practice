document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email')
    const userPassword =  document.getElementById('user-password')
    const email = userEmail.value
    const password = userPassword.value
    if(email === 'saykat@gail.com' && password === 'secret'){
        window.location.href='money.html'
    }
    else{
        return alert('User email or password does not match')
    }

})
