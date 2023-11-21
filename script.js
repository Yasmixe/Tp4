function calculer(){
   text = document.getElementById("zone").value;
   //var text = "bonjour hello world how are you hello world you are how bonjour bonjour";
   console.l
   // calculer nombre d'occurrence 
   var words = text.split(" ");
   console.log(words);
   
   for(j=0; j<words.length; j++)
   {
    var k=0; 
    var first = words[j];
    for(i=j; i<words.length;i++)
    {
     if(words[i]==first)
     {
         k=k+1;
         words.splice(i,1) ;
     }
    }
    console.log("nombre d'occurrencce de "+words[i]+" est "+k);
    addtable(first, k);
   }
   

}

function addtable(mott, k)
{
    
    const tablee = document.getElementById("table");
    const newRow = table.insertRow(-1); // -1: on insere la ligne f la fin ta3 le tableau 
    // 0 : f debut
    const mot = newRow.insertCell(0);
    mot.innerHTML = mott;
    const occurrence = newRow.insertCell(1);
    occurrence.innerHTML = k;
}