function calculation() {

    var total_ammount = document.getElementById('total_amount').value; 
    var service = document.getElementById('service').value;
    var tips_share = document.getElementById('sharing').value;
   //document.getElementsById("btn").innerHTML = "result"
   var t_pr;
   
   if(service==20){
      t_pr = total_ammount*(20/100);
       console.log(t_pr);
   }else if (service==10) {
      t_pr = total_ammount*(10/100);
    console.log(t_pr);
       
   } else {
    t_pr = total_ammount*(5/100);
    console.log(t_pr);
   }

   var rslt = t_pr/tips_share;
   console.log(rslt);
 
 
   document.getElementById('output').innerHTML=rslt;
}
