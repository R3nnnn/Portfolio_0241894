function Fill(){


    var F = document.getElementById("TheForm");
    console.log(form);
    var monday=form.getElementsByClassName("Mform");
    console.log(monday);
    var sch1=document.getElementsByClassName("sch1");

    var tuesday=document.getElementsByClassName("Tform");
    var sch2=document.getElementsByClassName("sch2");

    var wednesday=document.getElementsByClassName("Wform");
    var sch3=document.getElementsByClassName("sch3");

    var thursday=document.getElementsByClassName("THform");
    var sch4=document.getElementsByClassName("sch4");

    var friday=document.getElementsByClassName("Fform");
    var sch5=document.getElementsByClassName("sch5");

    var saturday=document.getElementsByClassName("SAform");
    var sch6=document.getElementsByClassName("sch6");

    var sunday=document.getElementsByClassName("SUNform");
    var sch7=document.getElementsByClassName("sch7");


   
    for(i=0;i<6;i++){

        sch1[i].innerHTML=monday[i].getElementsByTagName("input").value;
        sch2[i].innerHTML=tuesday[i].innerHTML;
        sch3[i].innerHTML=wednesday[i].innerHTML;
        sch4[i].innerHTML=thursday[i].innerHTML;
        sch5[i].innerHTML=friday[i].innerHTML;
        sch6[i].innerHTML=saturday[i].innerHTML;
        sch7[i].innerHTML=sunday[i].innerHTML;
    }
    
    console.log(sch1[0]);
}