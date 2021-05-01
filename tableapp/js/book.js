let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    let userAddress = document.getElementById("userAddress");
    let userAddressVal =userAddress.value;

    let userContactNumber = document.getElementById("userContactNumber");
    let userContactNumber = userContactNumber.value;

    BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal, userAddressVal, userContactNumberVal);

});

function BookNow(userName, userEmail, userPax, userRemarks, userAddress, userContactNumber){

    let url = 'https://api.sheety.co/bed74b1a6b2423924028ecc0585e4cbd/tableapp/bookingitems';
    let body = {
      bookingitem: {
        name: userName,
        email: userEmail,
        pax:userPax,
        remarks:userRemarks,
        address: userAddress,
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

