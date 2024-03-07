function sendEmail() {
    let params = {
        form_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_3szlke6", "template_nhtmrcr", params).then(function(res) {
        alert("Emailul a fost trimis cu succes!" + res.status);
    })
}