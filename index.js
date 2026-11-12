function toggleMenu() {
  const navLinks = document.querySelector('.nav__links');
  navLinks.classList.toggle('active'); 
}

function startSearch() {
    document.getElementById('searchIcon').style.display = 'none';
    document.getElementById('spinner').style.display = 'inline-block';

    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('searchIcon').style.display = 'inline-block';
        
        window.location.href = 'http://127.0.0.1:64547'; 
    }, 3000);
}