function showresult(){
    var ketqua;
    var fromCurrency = document.getElementById("fromCurrency");
    var toCurrency = document.getElementById("toCurrency");
    var input = document.getElementById("input1").value ;

    if ((fromCurrency[fromCurrency.selectedIndex].text == "VietNam") && (toCurrency[toCurrency.selectedIndex].text == "USD")){
        var a = input/23000;
        ketqua = "result: " + a;
    }else if ((fromCurrency[fromCurrency.selectedIndex].text == "USD") && (toCurrency[toCurrency.selectedIndex].text == "VietNam")) {
        var b = input*23000;
        ketqua = "result: " + b;
    }else {
        var c = input *1;
        ketqua = "result: " +c;
    }
    document.getElementById("ketqua").innerText = ketqua;
}