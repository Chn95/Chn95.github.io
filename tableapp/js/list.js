let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click",function(){
    GetBooking();
});

function GetBooking(){
     let url = 'https://api.sheety.co/bed74b1a6b2423924028ecc0585e4cbd/tableapp/bookingitems';
     fetch(url)
     .then((response) => response.json())
     .then(json => {

        let bookingNameList = document.getElementById("bookingNameList");
        let bookingIds = [];

        //clear the table rows 
        for(let k = bookingNameList.rows.length- 1; k > 0; k--){
            bookingNameList.deleteRow(k);
        }

        for(let i= 0; i < json.bookingitems.length; i++){
            let gName = json.bookingitems[i].name;
            let gEmail = json.bookingitems[i].email;
            let gPax = json.bookingitems[i].pax;
            let gYourORder = json.bookingitems[i].yourorder;
            let gYourPreferredDate = json.bookingitems[i].yourpreferreddate;
            let gContactNumber = json.bookingitems[i].contactnumber;
            let gId = json.bookingitems[i].id;
            let btnId = "delete" + gId;

            let row = bookingNameList.insertRow(bookingNameList.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(1).innerHTML = gName;
            row.insertCell(2).innerHTML = gEmail;
            row.insertCell(3).innerHTML = gPax;
            row.insertCell(4).innerHTML = gYourOrder;
            row.insertCell(5).innerHTML = gYourPreferredDate;
            row.insertCell(6).innerHTML = gContactNumber;
            row.insertCell(7).innerHTML = "<button id='" + btnId +"' class='btn btn-danger'>Delete</button>";

            bookingIds.push(btnId);
        }

        for(let j = 0; j < bookingIds.length; j++){
            let el = document.getElementById(bookingIds[j]);
            el.addEventListener("click",function(){
                let theId = bookingIds[j].replace("delete","");
                DeleteBooking(theId);

            });
        }
     });
}

function DeleteBooking(id){
    let url = 'https://api.sheety.co/bed74b1a6b2423924028ecc0585e4cbd/tableapp/bookingitems/' + id;
fetch(url, {
  method: 'DELETE',
})
.then(() => {
  alert(" Record id " + id + " deleted!");
  GetBooking();
});
}