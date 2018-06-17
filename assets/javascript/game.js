$(document).ready(function() {
        let count1 = 0;
        let count2 = 0;
        let numRight = 0;
        let numWrong = 0;
        let notAns = 0;
        let totAns = 0
        let totChecked = 0;
        let themeSong = document.getElementById('page-audio');
        
        // audito play buttons
        $('.play-audio').click(function(){
        themeSong.play();
        });

        $('.pause-audio').click(function(){
        themeSong.pause();
        });

        // click start button to...
        $('.start').click(function() {
                event.preventDefault();
                // show trivia questions
                $(".container").removeClass("hide-me1");
                // hide start button
                $(".start").addClass("hide-me1");
                themeSong.play();
        })

        // function to capture when responses are checked on click to only capature checked/clicked response
        let countChecked = function() {
                count1 = $("input:checked").length;
                console.log('total checked responses = ' + count1);
        }
        countChecked();
        $("input[type=radio]").on("click", countChecked);
      
        // function to capture only correct responses as checked
        let correctChecked = function() {
                count2 = $("input:checked[class='correct']").length;
                console.log('total right = ' + count2);
        }
        correctChecked();
        $(".correct").on("click", correctChecked)
       
        // click finish button to...
        $('.done').click(function() {
                event.preventDefault(); 
                // hide trivia questions and show finally tallies
                $(".container").addClass("hide-me2");
                $(".final-tally").removeClass("hide-me2");
                
                // tally number of write questions
                let numRight = count2
                console.log(numRight)
                $("#correct").html(numRight);

                // tally number of wrong questions  
                let numWrong = count1 - count2
                console.log(numWrong) 
                $("#wrong").html(numWrong);

                // tally unanswered questions
                notAns = 10 - numWrong - numRight
                $("#no-answer").html(notAns);
                
                
        });    
});