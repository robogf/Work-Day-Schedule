
    console.log(moment());

    console.log(moment().format());

    $("#currentDay").text(moment().format("dddd,MMMM Do YYYY"));

   

    function calendarBackground () {
        var currentHour = moment().hours();

        $(".time-block").each(function(){

            var actualHour = parseInt($(this).attr("id"))



            if (actualHour>currentHour){
                $(this).addClass("future");
            }
                else if(actualHour==currentHour){
                    $(this).addClass("present");
                } 
                else{
                    $(this).addClass("past");
                } 
                    }) 
        } 

    var saveBtn = $(".saveBtn")

        saveBtn.on("click",function(){
            var hour = $(this).siblings(".hour").text();
            var description = $(this).siblings(".description").val();

            localStorage.setItem(hour,description);
        });
        function savePlanner(){
            $(".hour").each(function(){
                var realHour = $(this).text();
                var realPlanner = localStorage.getItem(realHour)
                    if(realPlanner !== null){
                        $(this).siblings(".description").val(realPlanner);
                    }
            })
        }

       
        
calendarBackground();
savePlanner();