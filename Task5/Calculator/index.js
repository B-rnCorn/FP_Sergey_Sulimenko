let isOperatorClicked = false;
let isDigitClicked = false;
let historyOfOperations;
let operation;

const divider = "-----------------------";

function enter(item) {
  document.form.inputText.value = document.form.inputText.value + item;
}

function enterDigit(item) {
  enter(item);
  isDigitClicked = true;
}

function enterOperator(item) {
  if (
    !isDigitClicked ||
    (isDigitClicked && isOperatorClicked && item === "-")
  ) {
    enter(item);
  } else {
    if (!isOperatorClicked) {
      enter(" " + item + " ");
      isOperatorClicked = true;
    }
  }
}

function clearInput() {
  document.form.inputText.value = "";
  isOperatorClicked = false;
  isDigitClicked = false;
}

function back() {
  let input = document.form.inputText.value;
  document.form.inputText.value = input.substring(0, input.length - 1);
}

function equal() {
  const splitedValues = document.form.inputText.value.split(" ");

  const result = !isNaN(Number.parseFloat(splitedValues[0]))
    ? operation.calculate(
        Number.parseFloat(splitedValues[0]),
        Number.parseFloat(splitedValues[2])
      )
    : operation.calculate(Number.parseFloat(splitedValues[1]), undefined);

  console.log("LOG", result);

  historyOfOperations =
    document.formHistory.inputHistory.value + document.form.inputText.value;

  clearInput();

  if (result !== undefined && Number.isFinite(result)) {
    enterDigit(result);
    historyOfOperations += ` = ${result} \n ${divider} \n`;
  } else {
    historyOfOperations += ` - некорректное выражение (${result}) \n ${divider} \n`;
  }
  document.formHistory.inputHistory.value = historyOfOperations;
}

function sqrt() {
  operation = new OperationSqrt();
  document.form.inputText.value = "√ " + document.form.inputText.value;
  equal();
}

function plus() {
  operation = new OperationPlus();
  enterOperator("+");
}

function minus() {
  operation = new OperationMinus();
  enterOperator("-");
}

function multi() {
  operation = new OperationMulti();
  enterOperator("*");
}

function division() {
  operation = new OperationDivision();
  enterOperator("/");
}

function degree() {
  operation = new OperationDegree();
  enterOperator("^");
}

class Operation {
  calculate(operandOne, operandTwo) {}
}

class OperationSqrt extends Operation {
  calculate(operandOne, operandTwo) {
    console.log(operandOne, operandTwo);
    return operandOne >= 0 ? Math.sqrt(operandOne) : "комплексный результат";
  }
}

class OperationPlus extends Operation {
  calculate(operandOne, operandTwo) {
    return operandOne + operandTwo;
  }
}

class OperationMinus extends Operation {
  calculate(operandOne, operandTwo) {
    return operandOne - operandTwo;
  }
}

class OperationMulti extends Operation {
  calculate(operandOne, operandTwo) {
    let result;
    return operandOne * operandTwo;
  }
}

class OperationDivision extends Operation {
  calculate(operandOne, operandTwo) {
    let result = operandOne / operandTwo;
    return isNaN(result) ? "деление на 0" : result;
  }
}

class OperationDegree extends Operation {
  calculate(operandOne, operandTwo) {
    let result;
    return operandOne ** operandTwo;
  }
}
