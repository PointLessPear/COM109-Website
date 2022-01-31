
function validation() {
    var first_name = document.getElementById('fname').value;
    var surname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

if (first_name==null || first_name==""){
    alert("First name can't be blank");
    return false
}   else if (surname==null || surname==""){
    alert("Surname can't be blank")
    return false
}   
if (comment==null || comment=="") {
    alert("Comment can't be blank")
    return false
}

return true }
