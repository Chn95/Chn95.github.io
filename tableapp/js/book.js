let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);

});

function BookNow(userName, userEmail, userPax, userRemarks){

    let url = 'https://api.sheety.co/9d74311ba789d76dc962bf092a41ae29/tableapp/bookingitems';
    let body = {
      bookingitem: {
        name: userName,
        email: userEmail,
        pax:userPax,
        remarks:userRemarks
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
      // Do something with object
     alert(json.bookingitem.name + " sucessfully added!"));
    });
}