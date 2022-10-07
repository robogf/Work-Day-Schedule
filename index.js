
    console.log(moment());

    console.log(moment().format());

    $("#currentDay").text(moment().format("dddd,MMMM Do YYYY"));

    var saveBtn = $(".saveBtn")

    function calendarBackground () {
        var currentHour = moment().format('H')
        $(".time-block").each(function(){
            var hour = parseInt($(this).attr("id"));
            if (hour>currentHour){
                $(this).addClass("future");
            }
                else if(hour===currentHour){
                    $(this).addClass("present")
                } 
                else{
                    $(this).addClass("past")
                }
                    })
        }
calendarBackground();
