

$(document).ready(function(){

    const file = "data.json";
    $.getJSON(file, function(result){
        $.each(result, function(i, field){
       
        //Handling daily click -updating time accordingly
        $("#daily").click(function(){
            
            //setting times for daily routine for each card
            $(`.item${i+2}`).find(".time").html(field.timeframes.daily.current + "hrs");
            $(`.item${i+2}`).find(".previous").html("Last Day - " + field.timeframes.daily.previous + " hrs");
            
            //reseting to default
            $(".frequency").children().css("color","hsl(235, 45%, 61%)");
            //styling active menu
            $(this).css("color","white");
        });
       

        //Handling weekly click -updating time accordingly
        $("#weekly").click(function(){
            //setting times for weekly routine
            $(`.item${i+2}`).find(".time").html(field.timeframes.weekly.current + "hrs");
            $(`.item${i+2}`).find(".previous").html("Last Week - " + field.timeframes.weekly.previous + " hrs");
            
            //styling active menu
            $(".frequency").children().css("color","hsl(235, 45%, 61%)");
            $(this).css("color","white");
        });
   
        //Handling monthly click -updating time accordingly
        $("#monthly").click(function(){
            //setting times for monthly routine
            $(`.item${i+2}`).find(".time").html(field.timeframes.monthly.current + "hrs");
            $(`.item${i+2}`).find(".previous").html("Last Month - " + field.timeframes.monthly.previous + " hrs");
            
            //styling active menu
            $(".frequency").children().css("color","hsl(235, 45%, 61%)");
            $(this).css("color","white");
        });

        //initial values set to weekly routine on page loading

        //setting times for weekly routine
        $(`.item${i+2}`).find(".time").html(field.timeframes.weekly.current + "hrs");
        $(`.item${i+2}`).find(".previous").html("Last Week - " + field.timeframes.weekly.previous + " hrs");
        
        //styling active menu
        $(".frequency").children().css("color","hsl(235, 45%, 61%)");
        $("#weekly").css("color","white");
        });
      });
});


