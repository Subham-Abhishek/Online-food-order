function logging(e) {
    e.preventDefault();
    let form = document.getElementById("form");
    let mail = form.mail.value;
    let pass = form.pass.value;

    if (mail.trim() == "" || pass.trim() == "") {
      alert("Fill the mandatory feilds");
      return;
    }

    let logged = {
        mail,
        pass
    }
    let users = JSON.parse(localStorage.getItem("users"));
    // console.log(logged);
    // let i=0;
    users.forEach(function (el) {
        if(el.mail == logged.mail && el.pass == logged.pass) {
              window.location.href = "menu.html";
        }
        // else if(i==users.length-1) {
        //     alert("Invalid Credentials")
        // }
        // i++;
    });
}