var begin = confirm("Сыграем?")
if (begin == true){
    const form = document.getElementById("values");
    document.getElementById("values").style.display = 'flex';
    
    form.addEventListener("submit", getFormValue);
    function getFormValue(event) {
        event.preventDefault();
        min = form.querySelector('[name="min"]')
        max = form.querySelector('[name="max"]')
        retries = form.querySelector('[name="retries"]')
        Game(min.value, max.value, retries.value)
    }
    function Game(min, max, retries){
        tryAgain = true
        while (tryAgain){ 
            min = Math.ceil(min)
            max = Math.floor(max)        
            var number = Math.floor(Math.random() * (max - min + 1) + min);
            var hasGuessed = false;
            guess = prompt("Введи число")
            if (guess != false)
            {
                for (i = 0; i< retries -1; i++){
                if (guess == null){
                    hasGuessed = true;
                    tryAgain = false;
                    break
                }  
                if (hasGuessed) {
                    continue
                }
                if (guess < number){
                    guess = prompt("Число больше твоего числа")
                }
                else if (guess > number){
                    guess = prompt("Число меньше твоего числа")
                }
                else if (guess == number){
                    var tryAgain = confirm("Верно! Сыграем ещё?")
                    hasGuessed = true
                    continue
                }
            }
            if (hasGuessed == false){
                var tryAgain = confirm("Не угадал :( Сыграем ещё?")
            }
        }
        }
    }
    
}