function onsignup(event){
    event.preventDefault();
    console.log("Name:" + event.target.name.value);
    event.target.name.value='';
    console.log("Email: "+ event.target.email.value);
    event.target.email.value='';
    console.log("Phone Number:" + event.target.phone.value);
    event.target.phone.value='';
    console.log("date:" + event.target.date.value);
    event.target.date.value='';

    console.log("time:" + event.target.time.value);
    event.target.time   .value='';

}