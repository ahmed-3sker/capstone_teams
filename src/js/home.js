let create=document.getElementById('create');


let member1_inp= document.getElementById('member1');
let member2_inp= document.getElementById('member2');
let member3_inp= document.getElementById('member3');
let member4_inp= document.getElementById('member4');
let member5_inp= document.getElementById('member5');

let hidden_popout =document.getElementById('hidden-create');

let contact_inp= document.getElementById('contact');

let conferm = document.getElementsByClassName('conf')[0];



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



































