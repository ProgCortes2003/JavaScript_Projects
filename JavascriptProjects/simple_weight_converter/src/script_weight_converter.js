document.getElementById('numberPounds').addEventListener(
 'input', function(e){
    let lbsInput = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbsInput * 453.6;
    document.getElementById('kilogramsOutput').innerHTML = lbsInput * 0.454;
    document.getElementById('ouncesOutput').innerHTML = lbsInput * 16;
 });