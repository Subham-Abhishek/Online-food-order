function register(e) {
    e.preventDefault();
    let form = document.getElementById("form");
    let name = form.name.value;
    let contact = form.contact.value;
    let mail = form.name.value;
    let pass = form.pass.value;
    if(name.trim() == "" || contact.trim() == "" || mail.trim() == "" || pass.trim() == ""){
        alert('Fill the mandatory feilds')
        return;
    }
    let user_data = {
        name,
        contact,
        mail,
        pass
    }

    let users = localStorage.getItem("users");
    if(users == null){
        users = [];
    }
    else {
        users = JSON.parse(users);
    }
    users.push(user_data);

    localStorage.setItem("users",JSON.stringify(users))
    document.body.style.cursor = "progress"
    setTimeout(function(){
        window.location.href="login.html"
        document.body.style.cursor = "default";
    },1000)
}