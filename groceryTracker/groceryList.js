function calculatesum()
{
     let g1=document.getElementById("grocery1").value;
     let g2=document.getElementById("grocery2").value;
     let g3=document.getElementById("grocery3").value;
     let ans=parseFloat(g1)+parseFloat(g2)+parseFloat(g3);
     document.getElementById("sum").innerHTML=ans;

     
}     