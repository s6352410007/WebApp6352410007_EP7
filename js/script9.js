console.log('Hi js 9 ....')

function showName(name){
    console.log('สวัสดี'+ name);
}
showName('แมว')    //เรียกใช่ฟังก์ชัน call function
showName('มด')    //เรียกใช่ฟังก์ชัน call function


function calSum(a,b){
    console.log('a + b ได้ค่าเป็น ')
    return a + b
}
console.log( calSum(10,20))    //เรียกใช่ฟังก์ชัน call function

//alert(calSum(100,99)

//let test1 = function(){
//    console.log('Hello....')
//}

let test1 = ()=> {
    console.log('Hello....')
}

//function test1(){
//    console.log('Hello....')
//}

let test2 = function(number){
    console.log('Hi....' + number)
}

test1()
test1()
test2(200)