function guessNumber() {
  let randomNumber = Math.round(Math.random() * 1000);
  console.log(randomNumber);
  let userNumber = prompt("Введите число от 1 до 1000: ");
  console.log(userNumber);
  let counter = 1;
  while (userNumber != randomNumber) {
    if (userNumber > randomNumber && userNumber != 0) {
      userNumber = prompt("Загаданное число меньше. Попробуйте еще раз: ");
    } else if (userNumber < randomNumber && userNumber != 0) {
      userNumber = prompt("Загаданное число больше. Попробуйте еще раз: ");
    } else {
      userNumber = prompt("Введите число: ");
    }
    counter++;
    console.log(counter);
  }
  restart = confirm(
    `Вы угадали, количество попыток - ${counter}. Начать заново?`
  );
  if (restart == true) {
    guessNumber();
  } else close();
}
