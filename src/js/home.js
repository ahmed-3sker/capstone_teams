let create=document.getElementById('create');


let member1_inp= document.getElementById('member1');
let member2_inp= document.getElementById('member2');
let member3_inp= document.getElementById('member3');
let member4_inp= document.getElementById('member4');
let member5_inp= document.getElementById('member5');

let hidden_popout =document.getElementById('hidden-create');

let contact_inp= document.getElementById('contact');

let conferm = document.getElementsByClassName('conf')[0];

let leave_form = document.getElementById('hidden-leave');
let user_leave = document.getElementById('hid-user-leave');
let code2 = document.getElementById('hid-code');
let confirm_leave = document.getElementsByClassName('conf-leave')[0];
let leave_btn = document.getElementsByClassName('delete')[0];



create.addEventListener( "click" , function() {
    hidden_popout.style.display='flex';
    
})

conferm.addEventListener('click', function(){
    let user= document.getElementById('hid-user');
    let phone = document.getElementById('hid-phone');
    
   
    alert('your team has been created.');
    hidden_popout.style.display='none';
    member1_inp.value = user.value;
    contact_inp.value = phone.value;
    user.value='';
    phone.value='';
})

leave_btn.addEventListener('click' , function(){
    leave_form.style.display='flex';
})

confirm_leave.addEventListener('click', function() {

    if (user_leave.value == member1_inp.value) {

        member1_inp.value = 'none';
        leave_form.style.display = 'none';
        alert('You left the team.');

    }
    else if (user_leave.value == member2_inp.value) {

        member2_inp.value = 'none';
        leave_form.style.display = 'none';
        alert('You left the team.');

    }
    else if (user_leave.value == member3_inp.value) {

        member3_inp.value = 'none';
        leave_form.style.display = 'none';
        alert('You left the team.');

    }
    else if (user_leave.value == member4_inp.value) {

        member4_inp.value = 'none';
        leave_form.style.display = 'none';
        alert('You left the team.');

    }
    else if (user_leave.value == member5_inp.value) {

        member5_inp.value = 'none';
        leave_form.style.display = 'none';
        alert('You left the team.');

    }
    else {

        alert('Check your data again. The name was not found.');

    }
    // i dont know the logic of connect it but it was the logic of how it work if it connected 

    member5_inp.value=='none';
    member2_inp.value=='none';
    member1_inp.value=='none';
    member3_inp.value=='none';
    member4_inp.value=='none';

})
