/* loadProfile */
const loadProfile =(profile) => {
    /* Fetching the API */
    fetch('https://mocki.io/v1/3a96dc46-caca-4252-93b8-112c15364083')
    .then(res => {
        return res.json();
    })
    .then(data => {
        let card = "";
        let info;

        if(profile == "profile"){
            info = data;
        }else{
            console.log('Undefined!!!');
        }

        info.forEach(id => {
            let thisAge = "";
            let age = id.age;

            // Age Filter Validation
            if(age >= 1 && age <= 20){
                thisAge = "age20Below"
            } else if(age >= 21 && age <= 39){
                thisAge = "age21to39"
            } else if(age >= 40){
                thisAge = "age40Above"
            }
            // Creating a Card Profile Template
                card = card +
                `<div class="manager-id col-lg-6 pb-4 `+thisAge+`">`+
                `<div class="card py-4 d-flex justify-content-center align-items-center h-100">`+             
                    `<div class="card-body d-lg-flex">`+
                        `<div class="profile-img">`+
                            `<img src="assets/img/userphoto.png">`+
                        `</div>`+
                        `<div class="profile-info">`+
                            `<h5 class="profile-name">`+id.name+`</h5>`+
                            `<li>Username: <span>`+id.username+`</span></li>`+
                            `<li>Email: <span>`+id.email+`</span></li>`+
                            `<li>Age: <span>`+id.age+`</span></li>`+
                            `<li>Address: <span>`+id.address.city+` `+id.address.stree+` 
                            `+id.address.suite+` `+id.address.zipcode+`</span></li>`+
                            `<li>Phone: <span>`+id.phone+`</span></li>`+
                            `<li>Website: <span>`+id.website+`</span></li>`+
                            `<li>Company: <span>`+id.company+`</span></li>`+
                        `</div>`+
                    `</div>`+
                `</div>`+
            `</div>`;
            document.getElementById("profile-card").innerHTML = card;
        })
    })
    .catch(error => console.log(error));
};

/* If the Document is ready */
$(document).ready(function() {
    //To Call the FooBar function 
    doFooBar();
    
    //ScrollToTop Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $(".scrollToTop").fadeIn();
        } else {
          $(".scrollToTop").fadeOut();
        }
    });

    /* Getting onChange Age and designate their specific class */
    let getAgeRange = '.manager-id';
    $("select#filterage").change(function(){
        let selectedAgeRange = $(this).children("option:selected").val();
        if(selectedAgeRange == `All`){
            getAgeRange = '.manager-id';
        } else if(selectedAgeRange == `20 and Below`){
            getAgeRange = '.age20Below';
        } else if(selectedAgeRange == `21 to 39`){
            getAgeRange = '.age21to39';
        } else if(selectedAgeRange == `40 and Above`){
            getAgeRange = '.age40Above';
        }
        doShowFilter(getAgeRange);
    });

});

/*For Filter Function*/
const doShowFilter =(p) => {
	$('.manager-id').hide();
	$(p).show();
}

/* Getting the convertDate Button and throw a result */
$('#convertDate').click(function(){
    let getDate = $('.inputDate').val();
    if(getDate != ""){
        swal("Converted Date", doConvertDate(getDate), "success");
    } else{
        swal("Opss!!!", "Please select a date.", "error");
    }
    
})

/* Do the Convert Date */
const doConvertDate =(getDate) => {
    let d = new Date(getDate),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
    
};

// Do the FooBar Condition 
const doFooBar =() => {
    console.log('>> GROWTHOPS - JR WEB DEV EXAM <<')
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0) {
          console.log("Foo");
        }
        else if(i % 5 === 0) {
          console.log("Bar");
        }
        else {
          console.log(i);
        }
      }
}
