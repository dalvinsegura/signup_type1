let showName = document.getElementById('showname');
let formContent = document.getElementById('sign_up');
let inputs = document.getElementsByTagName('input');

let invalidForm = document.getElementById('invalid_form');
let validTrueForm = document.getElementById('valid_form');

// form
let nameInput = document.getElementById('name_input');
let lnameInput = document.getElementById('lastname_input');

let emailInput = document.getElementById('email_input');

let ageInput = document.getElementById('age_input');

let genderWomanInput = document.getElementById('gender_woman_input');
let genderManInput = document.getElementById('gender_man_input');

let careerYesInput = document.getElementById('career_yes_input');
let careerNoInput = document.getElementById('career_no_input');

let agreementsInput = document.getElementById('agreements_input');
let btnSubmit = document.getElementById('btn_submit');
// 

console.log(inputs);


function validForm() {       
    for(let i=0; i <= 10;){
        // alert("eres tonto que llene los campos vacios")
        
        if(false){

            function plusShake(){invalidForm.className += " invalid_form_show shake";}
            function lessShake(){invalidForm.className += " invalid_form_hide";}
            
            plusShake()
            // lessShake()
            window.setTimeout(lessShake, 2500);            
            
        }else{
            // alert("perfecto");
            function plusShake2(){validTrueForm.className += " valid_form_show";}
            function lessShake2(){validTrueForm.className += " valid_form_hide";}
            
            plusShake2()
            window.setTimeout(lessShake2, 2500);
            
            
            function hideForm() {
                formContent.className += " hide_signup";
                
            }
            
            window.setTimeout(hideForm, 2500);
            
            
        }
            i++
            console.log(i)
        }
}

btnSubmit.addEventListener('click', validForm);











