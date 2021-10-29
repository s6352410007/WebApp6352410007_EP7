
function multiplyTable(){
    
    let num = document.getElementById('num').value
    let showResult= ''
    for(let i=1;i<=12; i++){
        //console.log(i*num)
        showResult += num + ' x ' + i + '=' + (num*i) + '<br>'
    }
    document.getElementById('show').innerHTML=showResult
}