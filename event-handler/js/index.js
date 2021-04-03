function transformUppercase(_val){
return _val.toUppercase();
}

let elNamaPengguna = document.getElementById("namaPengguna"); // 1)select element
elNamaPengguna.addEventListener("keyup", function(){
elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});

function checkPassword(){
    let elKataLaluan = document.getElementById("kataLaluan");
    let password_val = elKataLaluan.value;
    if(password_val.length > 5){
        alert("Password check...OK!");
    } else {
        alert("Password too short!");
    }
}

let elKataLaluan = document.getElementById("KataLaluan");
elKataLaluan.onblur = checkPassword;