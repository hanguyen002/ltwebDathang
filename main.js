var parentElement = document.querySelector('.recive');
var radioPromoElements = parentElement.querySelectorAll('.radio-promo');

radioPromoElements.forEach(function(e) {
    e.addEventListener('click', function() {
      var selectedCheck = e.querySelector('.select_payment--check');
  
      document.querySelectorAll('.select_payment--check').forEach(function(check) {
        check.style.display = 'none';
      });

      selectedCheck.style.display = 'block';
    });
});


 
var colorOptionsLinks = document.querySelectorAll('.select_color .options_link');
var versionOptionsLinks = document.querySelectorAll('.select_version .options_link');

colorOptionsLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    colorOptionsLinks.forEach(function(otherLink) {
      otherLink.classList.remove('active');
    });

    this.classList.add('active');
  });
});

versionOptionsLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    versionOptionsLinks.forEach(function(otherLink) {
      otherLink.classList.remove('active');
      otherLink.querySelector('.option_icon').classList.remove('bg-icon');
    });

    this.classList.add('active');
    this.querySelector('.option_icon').classList.add('bg-icon');
  });
});