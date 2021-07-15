const d=document,
$buttonWinner=d.getElementById("buttonWinner"),
$winner=document.getElementById("winner");


function newWinner(data){
    let participants=data.participantes,
    interval=setInterval(()=>{
        let r=Math.floor(Math.random() * participants.length);
        $winner.textContent=participants[r];
    },100)
    setTimeout(()=>{
        clearInterval(interval);
        $winner.classList.add("winner-yes");
    },5000)
}

function getWinner() { 
    let data=fetch("./concursantes.json").
    then(res => res.ok ? res.json() : Promise.reject(res)).
    then(newWinner)
}

$buttonWinner.addEventListener("click",()=>{
    $winner.classList.remove("winner-yes");
    getWinner();
});
