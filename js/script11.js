let money = document.getElementById("money");
let person = document.getElementById("person")
let btnCal = document.getElementById("btnCal")
let btnCancle = document.getElementById("btnCancle")
let result = document.getElementById("result")

console.log(money)

btnCal.addEventListener("click", () => {
    // alert(money.value)
    // result.innerHTML = "Wow"
    if (money.value.length == 0) {
        alert("โปรดป้อนจำนวนเงิน")
    } else if (person.value.length == 0) {
        alert("โปรดป้อนจำนวนคน")
    }else{
        let moneyshare = money.value / person.value
        result.innerHTML="แชร์เงินคนละ " + moneyshare.toFixed(2) + " บาท"
    }
})

btnCancle.addEventListener("click", () => {
    // alert(person.value)
    money.value = ''
    person.value = ''
    result.innerHTML = ''
})