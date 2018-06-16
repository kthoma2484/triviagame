$(document).ready(function() {

        let numRight = 0;
        let numWrong = 0;
        let notAns = 0;
        let totAns = 0
        let themeSong = document.getElementById('page-audio');
                
        $('.play-audio').click(function(){
        themeSong.play();
        });

        $('.pause-audio').click(function(){
        themeSong.pause();
        });

        $('.start').click(function() {
                $(".container").removeClass("hide-me1");
                $(".start").addClass("hide-me1");
        })

        $("input:radio").click(function() {
                totAns++;
                console.log(totAns);
                numRight++;
                console.log(numRight);     
                        
                
        });

        $('.done').click(function() {
                $(".container").addClass("hide-me1");
                $(".final-tally").removeClass("hide-me2");
        });    
});