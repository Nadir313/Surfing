
var tbody = document.querySelector("tbody"); 
var btn = document.getElementById("btn"); 

$.getJSON("surf.json" , (result)=>{
    var board = result.surfingBoard
    
for(var i =0 ;i<board.length ; i++ ){
        tbody.innerHTML += `
        <tr>
        <td> ${board[i].ID} </td>
        <td> ${board[i].Designation}  </td>
        <td> ${board[i].Price}</td>
        <td> ${board[i].Categorie} </td>
        <td> ${board[i].Disponibilite}</td>
        <td>
        <span>${board[i].Supplier.Adresse}</span>
        <hr>
        <span> ${board[i].Supplier.raison}</span>
        
        </td>
        </tr>
        `
        }

    
//  KEY UP EVENT  ===> filtering the table

    $(document).ready(function(){
        $("#search").on("keyup", function(){
            searchTable($(this).val()) ;
            function searchTable(ab){
                $("#tbody tr").each(function(){
                    var founded = "false" ;
                    $(this).each(function(){
                        if($(this).text().toLowerCase().indexOf(ab.toLowerCase())>=0){
                            founded = "true"
                        }

                    })
                    if(founded == "true"){
                        $(this).show();
                    }
                    else{
                        $(this).hide() ;
                    }

                })

            }
            
        }
        )
    })
 
});


///// NAVBAR SCROLL
var nav = document.querySelector("nav"),
tbody = document.querySelector("tbody");
// console.log(tbody)

window.addEventListener("scroll" , ()=>{
    if(window.pageYOffset>60){
        nav.classList.add("bg-dark" , "shadow")

    }
    else {
        nav.classList.remove("bg-dark" ,"shadow");
    }
}) 

