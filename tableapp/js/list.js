let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click",function(){
    GetBooking();
});

function GetBooking(){
     let url = 'https://api.sheety.co/9d74311ba789d76dc962bf092a41ae29/tableapp/bookingitems';
     fetch(url)
     .then((response) => response.json())
     .then(json => {

        let bookingNameList = document.getElementById("bookingNameList");

        //clear the table rows
        for(let k = bookingNameList.rows.length- 1; k > 0; k--){
            bookingNameList.deleteRow(k);
        }

        for(let i= 0; i < json.bookingitems.length; i++){
            let gName = json.bookingitems[i].name;
            let gEmail = json.bookingitems[i].email;
            let gPAx = json.bookingitems[i].pax;
            let gRemarks = json.bookingitems[i].pax;
            let gId = json.bookingitems[i].id;

            let row = bookingNameList.insertRow(bookingNameList.rows.length);
            row.insertCell(0).innerHTML = gId;
            row.insertCell(1).innerHTML = gName;
            row.insertCell(2).innerHTML = gEmail;
            row.insertCell(3).innerHTML = gPax;
            row.insertCell(4).innerHTML = gRemarks;
            row.insertCell(5).innerHTML = "TBC";
        }
     });
}