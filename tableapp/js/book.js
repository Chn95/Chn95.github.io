let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userYourOrderVal = document.getElementById("userYourOrder").value;

    let userYourPreferredDate = document.getElementById("userYourPreferredDate");
    let userYourPreferredDateVal =userYourPreferredDate.value;

    let userContactNumber = document.getElementById("userContactNumber");
    let userContactNumberVal = userContactNumber.value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userYourOrderVal, userYourPreferredDateVal, userContactNumberVal);

});

function BookNow(userName, userEmail, userPax, userYourOrder, userYourPreferredDate, userContactNumber){

    let url = 'https://api.sheety.co/bed74b1a6b2423924028ecc0585e4cbd/tableapp/bookingitems';
    let body = {
      bookingitem: {
        name: userName,
        email: userEmail,
        pax:userPax,
        yourorder:userYourOrder,
        yourpreferreddate: userYourPreferredDate,
        contactnumber: userContactNumber,
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then(json => {
     alert("ID:" + json.bookingitem.name + " sucessfully added!");
    });
}

