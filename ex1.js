function Go(){
    let q = document.getElementById('q').value;
    let price = 1300;
    let item = 'Piroshki';
    let msg = 'Ta ${item}-aas ${q} shirheg avbal, une ${q*price} bolj bna.';
    document.getElementById('respnse').innerHTML = msg;
}