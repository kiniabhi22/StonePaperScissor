var p,q=0,r=0,s=0,a,b,c,d,e;
function load()
{
    p=prompt("Enter Your Name");
    document.getElementById("id1").innerHTML="Hii "+p+"!!";
    document.getElementById("id1").style.textAlign="center";
    document.getElementById("id1").style.fontSize= "30px";
    document.getElementById("id1").style.textDecoration="bold";
    document.getElementById("id1").style.marginTop="50px";

}
function opt(a)
{
if(a==1)
{
    b=1;
    document.getElementById("empty").innerHTML="Stone";
    //     b=1;
    // if(b=="Stone")
    // {
    //     document.getElementById("empty").innerHTML=b;
    //     b=1;
    // }
    // else if(c=="Paper")
    // {
    //     document.getElementById("empty").innerHTML=c;
    //     c=1
    // }
    // else if(d=="Scissor")
    // {
    //     document.getElementById("empty").innerHTML=d;

    // }

   
}
else if(a==2)
{   
    b=2;
    document.getElementById("empty").innerHTML="Paper";

}
else 
{   
    b=3;
    document.getElementById("empty").innerHTML="Scissior";

}


}
function play()
{
    c=Math.ceil(Math.random()*3)
 if(b==c)
 {
     alert("It's a tie!");
 }
 else if(b==1 && c==3 || b==2 && c==1 || b==3 && c==2 )
 {
    alert("you won!!");
 }
 else
 {
    alert("You lost");

 }
}
