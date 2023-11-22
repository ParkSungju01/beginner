const $account = document.querySelector(".id").value;
const $signup_button = document.querySelector("#button_1");
const $password = document.querySelector(".pw").value;
const $re_password = document.querySelector(".re_pw").value;
const $cancel = document.querySelector("#button_2");
const $student_number = document.querySelector(".num").value;
const $phone_number = document.querySelector(".ph_num").value;
const $catImage = document.querySelector("#catImage");

const image = document.createElement("image");

const instance = () => {
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then((res) => ($catImage.src = res.data[0].url));
};

instance();
document.body.appendChild(image);
