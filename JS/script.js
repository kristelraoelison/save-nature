
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.btn');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnLogin = document.querySelector('.login');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
}); 

btnPopup.addEventListener('click',()=>{
     wrapper.classList.add('active-popup');
 });

 btnLogin.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

 iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});