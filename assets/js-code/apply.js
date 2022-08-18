
// const form          = document.getElementById('form');
// const firstName     = document.getElementById('firstName');
// const lastName      = document.getElementById('lastName');
// const mobileNumber   = document.getElementById('mobileNumber');
// const birthday      = document.getElementById('birthday');
// const streetAddress = document.getElementById('streetAddress');
// const city          = document.getElementById('city');
// const State         = document.getElementById('State');
// const Zipcode = document.getElementById('Zipcode');
// const SSN = document.getElementById('SSN');
// const monthlyIncome = document.getElementById('monthlyIncome');

// //Show input error messages
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'customForm error';
//     const small = formControl.querySelector('small');
//     small.innerText = message;
// }

// //show success colour
// function showSucces(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'customForm success';
// }



// //checkRequired fields
// function checkRequired(inputArr) {
//     inputArr.forEach(function(input){
//         if(input.value.trim() === ''){
//             showError(input,`${getFieldName(input)} is required`)
//         }else {
//             showSucces(input);
//         }
//     });
// }


// //check input Length
// function checkLength(input, min ,max) {
//     if(input.value.length < min) {
//         showError(input, `${getFieldName(input)} is required`);
//     }
//     else {
//         showSucces(input);
//     }
// }

// //get FieldName
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }


// //Event Listeners
// form.addEventListener('submit',function(e) {
//     e.preventDefault();

//     checkRequired([firstName,lastName, mobileNumber, birthday, streetAddress, city, State, Zipcode, SSN, monthlyIncome]);
//     checkLength(firstName,3,15);
//     checkLength(lastName,3,15);
//     checkLength(mobileNumber, 11);
//     checkLength(birthday,10);
//     checkLength(streetAddress,3,30);
//     checkLength(city,3,30);
//     checkLength(State,2,30);
//     checkLength(Zipcode,4,10);
//     checkLength(SSN,11);
//     checkLength(monthlyIncome,1,10);
// });




$().ready(function() {
// validate signup form on keyup and submit
$("#applyForm").validate({
    rules: {
        firstName: "required",
        lastName: "required",
        mobileNumber: {
            required: true,
            minlength: 11,
            maxlength: 11
        },
        birthday: {
            required: true,
            minlength: 10,
            maxlength: 10
        },
        streetAddress: "required",
        city: "required",
        state: "required",
        zipcode: {
            required: true,
            minlength: 4,
            maxlength: 6
        },
        SSN: {
            required: true,
            minlength: 11,
            maxlength: 11
        },
        monthlyIncome: "required",
        authorization: "required"
    },
    messages: {
        firstName: "First name is required",
        lastName: "Last name is required",
        mobileNumber: "Mobile number is required",
        birthday: "Birthday date is required",
        streetAddress: "Street Address is required",
        city: "City is required",
        state: "State is required",
        zipcode: "Zipcode is required",
        SSN: "SSN is required",
        monthlyIncome: "Monthly income is required",
        authorization: "Authorization is required"
    }
});

});