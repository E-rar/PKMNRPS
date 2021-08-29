let counterMax=0;
let counter=0;
let round=0;
let guess=0;
let round1=0
function getRandomInt(max) { // eine kleine Funktion die eine Zufallszahl von 0-max auswirft;
    return Math.floor(Math.random() * max);
  }
const randomNum=getRandomInt(100)+1;//Konstante da sie sich nach dem aufruf der seite nicht mehr ändern soll 
//die +1, um zum einen die null auszuschließen und die 100 einzuschließen in das Spektrum ansosntewn wäre es 0-99 und nicht 1-100
function getCounterMax(){ //Hier wird das countermaximum je nachdem was der user gecheckt hat gesetzt
    if(document.getElementById("5").checked){
        document.getElementById("guessround").style.display="none";//sorgt dafür dass das custom textfeld wieder verschwindet wenn custom nicht gecheckt ist
        counterMax=5;
    }
    else if(document.getElementById("10").checked){
        document.getElementById("guessround").style.display="none";
        counterMax=10;
    }
    else if(document.getElementById("15").checked){
        document.getElementById("guessround").style.display="none";
        counterMax=15;
    }
    else if(document.getElementById("20").checked){
        document.getElementById("guessround").style.display="none";
        counterMax=20;
    }
    console.log(counterMax) ;
}

// function check(){
//     if(counterMax!=0){ //Bedingung damit der user vorher etwas ausgewählt hat danach verschwindet das Feld und der counter erscheint
//     document.getElementById("roundSelect").style.display="none";
//     document.getElementById("counter").style.display="block";
//     guess=document.getElementById("guessfield").value;
//     }

//     if(round1==counterMax||round1>counterMax){
//         document.getElementById("print").innerHTML+='Oh you just ran out of turns ! <a href="#" onclick="window.location.reload(true);">Play Again!</a><br>'
//         getMeme();
//         return 0;
//     }
//     if(guess<randomNum){
//         round1++;
//         document.getElementById("print").innerHTML+="<p>"+round1+"-You need to guess higher than "+guess+ " try again ...</p><br>"
//         getMeme();
        
//     }
//     else if(guess>randomNum){
//         round1++;
//         document.getElementById("print").innerHTML+="<p>"+round1+"-You need to guess lower than "+guess+ " try again ...</p><br>"
//         getMeme();
        
//     }
//     else if(guess=randomNum){
//         round1++;
//         document.getElementById("print").innerHTML+='Yes you won ! <a href="#" onclick="window.location.reload(true);">Play Again!</a>'
//         getMeme();
        
//     }
//     document.getElementById("counter").innerHTML=round1+"/"+counterMax;
   
//     console.log(randomNum);
// }
let urchoose="";
let enemie="";

function getElement(){
    function getRandomInt() {
        return Math.floor(Math.random() * 3);//generiert random numbers (0,1,2)
      }
    
    let num=getRandomInt() //ordnet enemie nach den random numbers ein element zu 
    if(num==0){
        enemie='water'
    }
    else if(num==1){
        enemie='fire'
    }
    else if(num==2){
        enemie='leaf'
    }
}
// checkBall(num){
    
// }

function play(elt){
    urchoose=elt;//den wert deiner wahl wird auf das geklickte element gesetzt
    getElement();//hier wird das Element vom Gegner erzeugt und das onclick auch jedes mal neu
    if(urchoose==enemie){
        document.getElementById("balls").innerHTML+='<img src="assets/img/yellow.png" alt="">'
        console.log("draw");//Fallunterscheidung
    }
    else{
        switch (urchoose) {
            case 'water':
                if(enemie=='fire')
                {
                    console.log("You win");
                    document.getElementById("balls").innerHTML+='<img src="assets/img/green.png" alt="">'
                }
                else if(enemie=='leaf'){
                    document.getElementById("balls").innerHTML+='<img src="assets/img/red.png" alt="">'
                    console.log("You lose");
                }
                break;
            case 'fire':
                if(enemie=='leaf')
                {
                    document.getElementById("balls").innerHTML+='<img src="assets/img/green.png" alt="">'
                    console.log("You win");
                }
                else if(enemie=='water'){
                    document.getElementById("balls").innerHTML+='<img src="assets/img/red.png" alt="">'
                    console.log("You lose");
                }
                break;
            case 'leaf':
                if(enemie=='water')
                {
                    document.getElementById("balls").innerHTML+='<img src="assets/img/green.png" alt="">'
                    console.log("You win");
                }
                else if(enemie=='fire'){
                    document.getElementById("balls").innerHTML+='<img src="assets/img/red.png" alt="">'
                    console.log("You lose");
                }
                break;
            default:
                break;
        }
    }
    
}