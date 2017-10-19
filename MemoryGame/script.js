
        var titleImages = [];
        var tileArray = [];
        var tileFlippedOver = [];
        var cardFlipped = -1;


        var timer = '';
        var playLockout = false;
        var startButton = document.getElementById('start');
        var gameBoard = document.getElementById('gameboard');
        var gamePlay = false;
        var message = document.getElementById('message');
        //event listens
        startButton.addEventListener('click', startGame);




        function isinArray(v, array)
        {
            return array.indexOf(v) > -1;
        }

        function cardFlip(t, ti){
            t.src = "images/"+tileArray[ti];
            tileFlippedOver.push(t.id);
        }

        function hideCard(){
            for(var x = 0; x<2; x++)
            {

                 var vid = tileFlippedOver.pop();
                document.getElementById(vid).src = "images/back.jpg";
                
            }
            clearInterval(timer);
            playLockout = false;
            cardFlipped = -1;
            message.innerHTML = "Click any tile";
        }

        function checkSrc(v){
            var v = document.getElementById(v).src;
             return v;
        }

        function pickCard(tileIndex, t){
            
            // check if its already flipped
            if(!isinArray(t.id, tileFlippedOver) && !playLockout){
                message.innerHTML = "Check for Match";
            //check if its already flipped
                if(cardFlipped >= 0){
                    //second cardFlipped

                    cardFlip(t, tileIndex);
                    var secondCard = tileIndex;
                    playLockout = true;
                        // check for match
                    if (checkSrc(tileFlippedOver[tileFlippedOver.length - 1]) == checkSrc(tileFlippedOver[tileFlippedOver.length - 2])) { 

 
                        //match 
                        message.innerHTML = "Match found. Click more tiles";
                        playLockout = false;
                        cardFlipped = -1;
                        // Check if game is over
                        if(tileFlippedOver.length == tileArray.length){
                            gameOver();
                        }

                    }else{
                        //no match
                        message.innerHTML = "No Match found";
                        timer = setInterval(hideCard, 300);

                    }

                }else{

                    cardFlipped =  tileIndex;
                    //first cardFlipped
                    cardFlip(t, tileIndex);
                   
                }

            } else {
                message.innerHTML = "Already Clicked";
            }        

            

        }



        function buildArray(){

            for(var x = 1; x < 7; x++){
                titleImages.push(x+'.jpg');
            
            }

        }

        //reset everything.
        function gameOver(){
            startButton.style.display = 'block';
            message.innerHTML = "click to start new game";
            gamePlay = false;

            titleImages = [];
            tileFlippedOver = [];

    
        }

        //Functions
        function startGame(){
            playLockout = false;
                    cardFlipped = -1;
            startButton.style.display = 'none';
            if(!gamePlay){
                gamePlay = true;
                buildArray();
                tileArray = titleImages.concat(titleImages);
                shuffleArray(tileArray);
                buildBoard();
                message.innerHTML = "Click any tile";
            }

          
            
        }

        //buliding the board for the game
        function buildBoard(){
            var html = "";
            for (var x = 0; x <= (tileArray.length - 1); x++) {
                   html += '<div class="gameTile"> </div>';
                   html += '<img id = "cardz'+x+'" src="images/back.jpg" onclick="pickCard('+x+',this)" class="flipImage"></div>';
            }
            gameBoard.innerHTML = html;
        }

        //Shuffling image in array
        function shuffleArray(array){
            for (var i = array.length - 1; i > 0; i--) {
                var holder = Math.floor(Math.random() * (i+1));
                var itemValue = array[i];
                array[i] = array[holder];
                array[holder] = itemValue;
                
            }
            return(array); 
        }


