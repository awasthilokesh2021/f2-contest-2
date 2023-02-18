var row =1;
let final =document.getElementById("btn")
final.addEventListener("click", displayDate);

function displayDate(){
    var bookname = document.getElementById("book").value
    var issued = document.getElementById("issue").value
    var table = document.getElementById("table").value
     if(!bookname || !issued){
        alert('please fill the value')
        return;
     }

   
    let display = document.getElementById("display")   
    var newRow = display.insertRow(row) 

    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
             
    cell1.innerHTML = table;
    cell2.innerHTML = bookname;
    cell3.innerHTML = issued;
     
    row++;
}