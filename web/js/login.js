document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if(username === 'admin' && password === '1234') {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.style.display = 'block';
        document.getElementById('password').value = '';
        
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});
