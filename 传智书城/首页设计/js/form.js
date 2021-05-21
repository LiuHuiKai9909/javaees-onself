var emailObj;
    var usernameObj;
    var passwordObj;
    var confirmObj;
    var emailMsg;
    var usernameMsg;
    var passwordMsg;
    var confirmMsg;
    window.onload = function () {
        emailObj = document.getElementById("email");
        usernameObj = document.getElementById("username");
        passwordObj = document.getElementById("passwor");
        confirmObj = document.getElementById("repasswor");
        emailMsg = document.getElementById("emailMsg");
        usernameMsg = document.getElementById("usernameMsg");
        passwordMsg = document.getElementById("passwordMsg");
        confirmMsg = document.getElementById("confirmMsg");
    }

    function checkForm() {
        var bEmail = checkEmail();
        var bUsername = checkUsername();
        var bPassword = checkPassword();
        var bConfirm = checkConfirm();
        // return false 后，事件将会被取消
        return bEmail && bUsername && bPassword && bConfirm
    }

    function checkEmail() {
        var regex = /^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,4}$/;
        var value = emailObj.value;
        var msg = "";
        if (!value) {
            msg = "邮箱必须填写";
        }
        else if (!regex.test(value)) {
            msg = "邮箱格式不合法"
        }
        emailMsg.innerHTML = msg;
        emailObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
        return msg == "";
    }

    function checkUsername(){
        var regex = /^[a-zA-Z]\w{0,9}$/;
        var value = usernameObj.value;
        var msg = "";
        if(!value){
            msg="用户名必须填写";
        }
        else if (!regex.test(value)) {
            msg = "用户名不合法"
        }
        usernameMsg.innerHTML = msg;
        usernameObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
        return msg == "";
    }

    function checkPassword(){
        var regex = /^.{6,16}$/;  //任意字符 6-16位
        var value = passwordObj.value;
        var msg = "";
        if(!value){
            msg="密码必须填写";
        }
        else if (!regex.test(value)) {
            msg = "密码不合法"
        }
        passwordMsg.innerHTML = msg;
        passwordObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
        return msg == "";
    }

    function checkConfirm(){
        var passwordValue = passwordObj.value;
        var confirmValue = confirmObj.value;
        var msg = "";
        if(!confirmValue){
            msg="确认密码必须填写";
        }
        else if ( passwordValue != confirmValue ) {
            msg = "密码必须保持一致"
        }
        confirmMsg.innerHTML = msg;
        confirmObj.parentNode.parentNode.style.color = msg == "" ? "black" : "red";
        return msg == "";
    }