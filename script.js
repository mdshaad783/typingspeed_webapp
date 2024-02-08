const setOfWords = [
        "Words are good because that is what we use everyday",
        "Ummm.... fast fingers is soo good",
        "Fidgets spinners are so popular anyways a story",
        "Digby The Littlest Duckling,",
        "Digby was the littlest duckling you've ever seen"
    ];
    const msg=document.getElementById('msg');
    const typeWords =document.getElementById('mywords');
    const btn = document.getElementById('btn');
    let startTime, endTime;
    const playGame =()=>{
        let randomNumber = Math.floor(Math.random()*setOfWords.length);
        msg.innerText = setOfWords[randomNumber];
        let date=new Date();
        startTime = date.getTime();
        btn.innerText = "Done";
    }
    const endPlay = () =>{
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime - startTime)/ 1000);
        console.log(totalTime);

        let totalStr = typeWords.value;
        let wordCount = wordCounter(totalStr);

        let speed = Math.round((wordCount / totalTime)*60);
        let finalMsg = " You typed at "+speed + " words per minutes\n";
        finalMsg += compareWords(msg.innerText,totalStr);
        msg.innerText =finalMsg;
    }
    const compareWords=(str1, str2)=>{
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let cnt = 0;

        words1.forEach(function (item, index) {
        if(item==words2[index]){
            cnt++;
        }
            
        })
        let errorWords = (words1.length - cnt);
        return (cnt + ' correct out of '+words1.length + " words :)    Error :-  "+ errorWords)
    }

    const wordCounter = (str)=>{
        let response = str.split(" ").length;
        console.log(response);
        return response;

    }
    btn.addEventListener('click',function(){
        if(this.innerText == "Start"){
            typeWords.disabled = false;
            playGame();
        }
        else if(this.innerText == "Done"){
            typeWords.disabled =true;
            btn.innerText= "Start";
            endPlay();
        }
    })
