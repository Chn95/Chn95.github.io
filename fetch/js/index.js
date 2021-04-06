let elLoadUser = document.getElementById("getRandomUserBtn");
elLoadUser.addEventListener("click",function(){
    elLoadUser();
});

function LoadUser(){
    let url = "https://randomuser.me/api/";

    fetch(url)
    .then((response) => response.json())
    .then(data =>{
        let fn = document.getElementById("firstName");
        let in = document.getElementById("lastName");
        let phone = document.getElementById("phone");
        let img = document.getElementById("userimg");

        fn.innerHTML = data.results[0].name.first;
        ln.innerHTML = data.results[0].name.last;
        phone.innerHTML = data.results[0].phone;
        img.src = data.results[0].picture.large;
    });
}