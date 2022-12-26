let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0
 function increment() {
     count += 10
     countEl.textContent = count
 }

 function save(){
     let saveAction = count + " - "
     saveEl.textContent += saveAction
     countEl.textContent = 0
     count = 0 
 }


 let firstName = "Joy"
 let lastName =  "udoh"

 let fullName = firstName +  " " + lastName 

 console.log(fullName)


  let nam = "Linda"
  let greetings = "Hi there"

function welcome() {
    console.log (greetings + ", " + nam + "!")
}

let gamePoints = document.getElementById("game-points")
let myPoints = 3

function add3Points() {
     myPoints += 3 
    gamePoints.innerText = myPoints
}
//console.log(myPoints)

//console.log(myPoints)

//console.log (myPoints)


function remove1Point() {
     myPoints -= 1
    gamePoints.innerText = myPoints
}

//console.log(myPoints)
//console.log(myPoints)

function gameOver() {
      myPoints = 0
    gamePoints.innerText = myPoints
    
}
 

let errorJs = document.getElementById("error")
let alert = "sorry! Something Went Wrong!!! please try Again Later."

function btn() {
    errorJs.innerText = alert
}
 let num1 = 9
 let num2 = 2
 document.getElementById("num1-el").textContent = num1
 document.getElementById("num2-el").textContent = num2
 let sumEl = document.getElementById("sum-el")

 function add() {
     addSumEl = num1 + num2 
     sumEl.textContent = "sum: " + addSumEl
 }


 function subtract() {
     subtractSumEl = num1 - num2
     sumEl.textContent = "sum: " + subtractSumEl
 }
 function divide() {
    divideSumEl = num1 / num2
    sumEl.textContent = "sum: " + divideSumEl 
 }
 function multipy() {
     multiplySumEl = num1 * num2
     sumEl.textContent = "sum: " + multiplySumEl
 }

//  let firstCard = 6
//  let secondCard = 11
 let cards = [6, 11, 4,]
 let sum = cards[0] + cards[1]
//  let sum3 = firstCard + secondCard + thirdCard
 let blackJack = document.getElementById("black-jack");
 let hasBlackJack = false;
 let isAlive = true;
 let suumEl = document.getElementById("suum-el");
 let cardEl = document.querySelector("#card-el");
//  let newCard = document.querySelector("#new-card");
 function startGame() {
     renderGame()
 }

 function renderGame() {
    suumEl.textContent = "Sum:" + sum
    cardEl.textContent = ` Cards are ${cards[0]} And ${cards[1]}`
 if (sum <= 20) {
   blackJack.textContent = "Would You Like To Try Again?"  
}   else if (sum === 21) {
        blackJack.textContent = "LUCKY YOU!!.YOU WON THE JACKPOT!!!"
        hasBlackJack = true
} else {
    blackJack.textContent = "BACK OFF LOSER! you are out of the Game! YOU JUST LOSE YOUR MONEY"
    isAlive = false
}
 }

 function newCard() {
      let sum = cards[0] + cards[1] + cards[2]
      if (sum <= 20) {
        blackJack.textContent = "Would You Like To Try Again?"  
     }   else if (sum === 21) {
             blackJack.textContent = "LUCKY YOU!!.YOU WON THE JACKPOT!!!"
             hasBlackJack = true
     } else {
         blackJack.textContent = "BACK OFF LOSER! you are out of the Game! YOU JUST LOSE YOUR MONEY"
         isAlive = false
     }
     cardEl.textContent = ` Cards are ${cards[0]},${cards[1]},${cards[2]}`
     suumEl.textContent = "Sum:" + sum

 }
 let myLife = [ "Experience",
                "Education",
                "Licences",
                "Skills"
                ]
                myLife.push("Relationship")
 let myStory = document.querySelector("#my-Story")

                function experience() {
                    myStory.textContent = myLife[0] + " :" + "  I have only Been To Nigeria."
                }
                function education() {
                    myStory.textContent = myLife[1] + " :" + " I Study Law In High School."
                } 
                function licences() {
                    myStory.textContent = "A Lawyer , Nutritionist And a Frontend-developer."
                }    
                function skills() {
                    myStory.textContent = myLife[3] + " :" + "I Love To Code , Cook , Eat , Sleep And Watch Movies"
                }       
                function conclude() {
                    myStory.textContent = myLife[4] + " :" + "I Am In Love With JavaScript"
                } 
                
               let countLoop = document.getElementById("count") 

               function surprise() {
            //       for ( let i = 5; i > 0 ;  i-=1 )
            //       countLoop.textContent = i--
            //    }
                
                for ( let grett = 10 ; grett < 21; grett += 1 ) {
                    console.log(grett)
                    
                }
                countLoop.textContent = grett
            }
                            
                
                // let age = 23

//  if  (age <= 21) { 


//      blackJack.textContent = "I'm sorry,you Are Not Allowed Into The Game"
//  } else (age > 21) 
//   { 

//      blackJack.textContent = "Welcome Home. We Have Been Waiting For You!!!"
//  }

     
let cars = [ 7, 3, 9]

for(let i = 0 ;i < cars.length ; i++) {
    console.log (i, [cars])
}

let age = 15 
let discount = {
    free: "YOU GET IT FOR FREE!" ,
    child: "YOU GET A CHILD DISCOUNT OF 20%",
    student: "YOU GET A STUDENT DISCOUNT OF 50%" ,
    fullPrice : "SORRY, NO DISCOUNT FOR YOU" ,
    senior: "YOU GET A DISCOUNT OF 30%. YOU ARE A SENIOR CITIZEN"
}

if (age < 6) {
    console.log(discount.free)
} else if (age > 5 && age < 18) {
    console.log(discount.child)
} else if (age > 17 && age < 27) {
    console.log (discount.student)
} else if (age > 26 && age < 67) {
    console.log(discount.fullPrice)
} else if (age > 66) {
    console.log (discount.senior)
}
// else { console.log (discount.senior)}