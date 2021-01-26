// form validation for the index or login page
const form = document.getElementById('login-form');
let username = form.elements.namedItem('username');
let password = form.elements.namedItem('password');
// let loginBtn = document.getElementById('login-btn');

username.addEventListener('input', validate);
password.addEventListener('input', validate);
// loginBtn.addEventListener('click', function(e){
//     if(){

//     }
// });

form.addEventListener('submit', function(e){
  e.preventDefault;
  validate(e);
});

function validate(e){
  let target = e.target;

  if(target.name == "username"){
      if(target.value.length >= 4){
            target.classList.add('valid');
            target.classList.remove('invalid');
        }
        else{
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    }
    if(target.name == "password" ){
        if(target.value.length >= 8){
            target.classList.add('valid');
            target.classList.remove('invalid');
        }
        else{
            target.classList.add('invalid');
            target.classList.remove('valid');
            
        }
    }
}