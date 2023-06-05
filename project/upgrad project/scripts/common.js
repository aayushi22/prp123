//sign in button js
document.getElementsByClassName('a-form').addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    let confirmPwd = document.getElementById('confirmPwd').value;

    if(name === '' || userName === '' || password === '' || confirmPwd === ''){
        document.getElementById('errorMessage').textContent = 'Please fill out the fields.';
        document.getElementById('errorMessage').style.display = 'block';
    }
    else {
        document.getElementsByClassName('a-form').submit();
      }
})
//sign up button js
document.getElementsByClassName('a-form1').addEventListener('submit', function(event){

    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if(userName === '' || password === ''){
        document.getElementById('errorMessage1').textContent = 'Please fill out the fields.';
        document.getElementById('errorMessage1').style.display = 'block';
    }
    else {
        document.getElementsByClassName('a-form1').submit();
      }
    
})
const container = document.querySelector(".container"),
signUp = document.querySelector(".signin-link");
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
});
signUp.addEventListener("click", ( )=>{
    container.classList.remove("active");
});
