$(document).ready(function(){
$("#random").click(function(){
var starWarsUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+"Star Wars"+"&format=json&callback=?";
var j = Math.floor((Math.random() * 10) + 1);
 $.ajax({
     type:"GET", url:starWarsUrl, async:false, dataType:"json",
     success: function(data){
       window.open(data[3][j]);
     },
   error: function(errorMessage){
             alert("Error");            
     }   
});
  });

$("#search").click(function(){
 var searchTerm = $("#searchTerm").val();
 var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Star_Wars"+searchTerm +"&format=json&callback=?";   
   $.ajax({
     type:"GET", url:wikiUrl, async:false, dataType:"json",
     success: function(data){
        //console.log("hey");
        //console.log(data[1][0]);
        //console.log(data[2][0]);
        //console.log(data[3][0]);
       for(var i = 0; i<data[1].length;i++){
       $("#output").prepend("<li><h3><a href= "+data[3][i]+">"+data[1][i]+"</a></h3><p>"+data[2][i]+"</p></li>");
       }
                         },
     error: function(errorMessage){
             alert("Error");            
         }
    });                      
  });                
});