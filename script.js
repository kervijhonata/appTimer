const app = document.querySelector(".app")
const entrada = document.querySelector(".entrada")
const button = document.querySelector(".button")
const output = document.querySelector(".clockTimer")
const form = document.querySelector(".form")
const alarm = new Audio("sounds/alarm1.mp3")

button.onclick = (e, timer) => {
    e.preventDefault()
    valor = entrada.value;
    if(valor > 0){
        timer = setInterval(()=>{
            output.textContent = valor--;
            output.style.fontSize = "60pt";
            if(output.innerHTML == 0){
                //stopper
                clearInterval(timer)
                //Beeper
                alarm.play()
                //Mention & Styling
                output.style.fontSize = "20pt";
                output.textContent = "Time is Over!"
                document.title = "TIME OVER!!"
                app.style.backgroundColor = "#5B4825";
                //Reseter
                window.onclick = () => {
                    document.title = "App Timer";
                    app.style.backgroundColor = "#0B0014";
                    alarm.load()
                }
            }
        },1000)
    }else{
        alert("Insira um número Acima de 0")
    }
    //Limpar Entrada e Saída
    entrada.value = "";
    output.textContent = ""
}

alarm.pause()
//Styling
output.style.heigth = output.offsetWidth;