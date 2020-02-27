function showresult(){
    var ketqua = document.getElementById("ketqua");
    var fromCurrency = document.getElementById("fromCurrency");
    var toCurrency = document.getElementById("toCurrency");
    var input = document.getElementById("input1").value ;
    var total;
    if ((fromCurrency.value === "23000") && (toCurrency.value === "1")){
        total = input/23000;
    }else if ((fromCurrency.value === "1") && (toCurrency.value === "23000")) {
        total = input*23000;
    }else {
        total = input *1;
    }
    ketqua.innerText = "Result: " + total;

}