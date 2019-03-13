const toggleMenu = () => {
  nav.classList.toggle('menu--open');
  console.log(nav.classList);
}

const nav = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);


const corners = document.querySelector('.taco-picture');
corners.addEventListener('mouseover', function(remove) {
  remove.target.style.borderRadius = '50px';
  remove.target.style.transition = '3s';
  remove.target.style.width = '90%';
  remove.target.style.backgroundPositionY = '-300px';

});

const signUpButton = document.querySelector('.sign button');
signUpButton.style.fontSize = '3em';
signUpButton.style.borderRadius = '10px';
signUpButton.style.margin = '10px';
signUpButton.style.width = '90%';
signUpButton.addEventListener('mouseover', function(callback){
  callback.target.style.backgroundColor = 'black';
  callback.target.style.color = 'white';
  callback.target.style.width = '32%';
  callback.target.style.transition = '3s';
});


//this calls an ettor in the console but it still functions
const sections = document.querySelector('.about-middle-content');
sections.addEventListener('mouseover', function (call){
  call.target.style.backgroundColor = 'black';
  call.target.style.color = 'white';
});