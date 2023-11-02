
const $account = document.querySelector(".id").value;
const $signup_button = document.querySelector("#button_1");
const $password = document.querySelector(".pw").value;
console.log($password);
const $re_password = document.querySelector(".re_pw").value;
const $cancel = document.querySelector("#button_2");

$signup_button.addEventListener('click',function(e){
    e.preventDefault();
    var test = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    tr = test.test($account);
    if(tr==false){
        alert("아이디 형식이 올바르지 않습니다");
    } //아이디 형식 검사
    if($password!=$re_password){
        alert("비밀번호가 일치하지 않습니다.");
    }
    
})
$cancel.addEventListener('click', function(){
    window.location.href="login.html";
})






