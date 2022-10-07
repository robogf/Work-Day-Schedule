# Work-Day-Schedule

## Site Picture 
![site](/Screen%20Shot%202022-10-06%20at%2011.07.14%20PM.png)

## Technologies Used 
- HTML - used to create elements on the DOM
- CSS - styled the html elements on the webpage
- Git - version control system to track changes of soure code
- Github - Host our repository that is deployed to github pages
- JavaScript- Added functionality to our site 

## Summary 
Through this application the user should be able to use a schedule with appropriate
times color coded to signify the past present or future times.
The user should also be able to save their plans by clicking on the functional button.
The schedule should also update the current date.

## Code Snippet 
``` HTML 
<div class="row time-block" id="5">
        <div class="col text-bg-info p-3 hour ">
          1PM
        </div>      
          <textarea class="col-9 description">  </textarea>       
          <button class="saveBtn col-1"> Reserve</button>        
      </div>
```
``` JavaScript 
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
```
## Author Links 
[LinkedIn](https://www.linkedin.com/in/angel-matias-01120b251/)
[GitHub] (https://github.com/robogf)
