function sub(){
    let firstName = document.getElementById("f1");
    let lastName = document.getElementById("f2");
    let userName = document.getElementById("f3");
    let pass = document.getElementById("f4");
    let rePass = document.getElementById("f5");
    let mobile = document.getElementById("f6");
    let f_err = document.getElementById("first");
    let l_err = document.getElementById("last");
    let user_err = document.getElementById("user");
    let pass_err = document.getElementById("pass");
    let repass_err = document.getElementById("repass");
    let mob_err = document.getElementById("mobile");
    


    if(firstName.value == ''){
        f_err.innerHTML = "first name can't be empty";
        f_err.style.color = 'red';
        
    }
    else if(lastName.value == ''){
        l_err.innerHTML = "Last name can't be empty";
        l_err.style.color = 'red';
    }
    else if (userName.value == '') {
        user_err.innerHTML = "Users name can't be empty";
        user_err.style.color = 'red';
    }
    else if (pass.value == '') {
        pass_err.innerHTML = "Password can't be empty";
        pass_err.style.color = 'red';
    }
    else if(pass.value != rePass.value){
        repass_err.innerHTML = "password not matched"
        pass_err.style.color = 'red';

    }
    else if(pass.value.length < 8){
        pass_err.innerHTML = "password too short";
        pass_err.style.color = 'red';

    }
    else if(mobile.value.length < 10){
      mob_err.innerHTML = "Invalid Number";
      mob_err.style.color = 'red';
    }

    



}