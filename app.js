const numberButton = document.querySelectorAll("#calculator .number");
const operatorButton = document.querySelectorAll("#calculator .operator");
const calculateButton = document.querySelector("#calculator .calculate");
const clearButton = document.querySelector("#calculator .clear");
const outputBox = document.querySelector("#outputBox");
const preTerm = document.querySelector("#preTerm_box");


// number 버튼 클릭 시 ouputBox에 출력
numberButton.forEach(function(element){
    element.addEventListener("click", function(){
        outputBox.value += element.value;
    });
})

// operator 버튼 클릭 시 이전 항 저장 후 outputBox 초기화
let constantTerm;
operatorButton.forEach(function(element){
    element.addEventListener("click", function(){
        constantTerm = outputBox.value; // outputBox에 담겨져 있는 값 저장
        preTerm.innerHTML += constantTerm; // outputBox에 담겨져 있는 값 다시 저장
        outputBox.value = "";
        constantTerm += element.value;
    })
})


// = 버튼 클릭 시 계산한 값 출력
calculateButton.addEventListener("click", function(){
    const value = constantTerm + outputBox.value;
    outputBox.value = eval(value);
})

clearButton.addEventListener("click", function(){
    outputBox.value = "";
    preTerm.innerHTML = "방금 입력한 값 : "
})
