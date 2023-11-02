
const $account = document.querySelector(".id").value;
const $signup_button = document.querySelector("#button_1");
const $password = document.querySelector(".pw").value;
const $re_password = document.querySelector(".re_pw").value;
const $cancel = document.querySelector("#button_2");
const $student_number = document.querySelector(".num").value;
const $phone_number = document.querySelector(".ph_num");

$signup_button.addEventListener('click',function(e){
    e.preventDefault();
    var test = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    tr = test.test($account);
    if(tr==false){
        alert("아이디 형식이 올바르지 않습니다");
    } //아이디 형식 검사
    if($password!=$re_password){
        alert("비밀번호가 일치하지 않습니다.");
    }
    if($student_number.length>10){
        alert("학번이 너무 깁니다.");
    }
    
})
$phone_number.addEventListener('focus', function(){
    if($student_number.value.length>10){
        alert("학번이 너무 깁니다.");
    }
    console.log($student_number.value.length);
})
$cancel.addEventListener('click', function(){
    window.location.href="C:\Users\psj00\Desktop\vscode\bcsd\실습과제\login.html";
})






