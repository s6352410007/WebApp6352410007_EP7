//Function การทำงานหนึ่งหนี่ง ************
//Function จะไม่ทำงานถ้าเราไม่ call function (เรียกใช้ ฟังก์ชั้น)
//1 ไม่ส่งค่ากลับ  ไม่มีพารามิเตอร์
function funna(){
    console.log("Na na na ....")
}


//2 ไม่ส่งค่ากลับ  มีพารามิเตอร์
function funnu(x , y){   //x,y เรียก พารามิเตอร์
    let a=x+y
    console.log("a มีค่า " + a)
}


//3 ส่งค่ากลับ  ไม่มีพารามิเตอร์
function funku(){

    return 999 + 1;
}

//4 ส่งค่ากลับ  มีพารามิเตอร์
function funhu( x , y , z){
    let sum = x + y + z
    return 555+sum;
}

funna()
funnu(10,20)  //10,20 เรียก อากิวเมนต์

console.log(funku()) 

let total = funhu( 10 , 20 , 30 )
console.log( total )



////------------------------------------------------------
function funA(x , y = 20){
    console.log( x + y )
}
funA(10,100)
funA(50)

//-----------------------------------------------------------

