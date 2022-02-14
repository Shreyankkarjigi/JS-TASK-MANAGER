// get all elements
let button=document.getElementById('addbtn')
let input=document.getElementById('inputfield')
let content=document.getElementById('content')
let todolist=document.getElementById('todolist')
let clear=document.getElementById('clearbtn')
let date=document.getElementById('date')
const tasks=[]
let error=document.getElementById('error')
let listt=document.getElementById('listt')
let br=document.createElement('br')
let save=document.getElementById('savebtn')
let rstbtn=document.getElementById('rstbtn')
let text=document.createElement("p")
let deletbck=document.getElementById('removebck')
let due=document.getElementById('due')
//Set total tasks counter to 0 as default
Total=0
count.innerText="Total Tasks:"+' '+ Total
//when input is taken and button is clicked display the text in content feild
//add eventlistener on btn
//DRY: Gonna make a function to append data to view

function addData(){
    //Create Buttons and list elements
    let li=document.createElement('li')
    let clrbtn=document.createElement("button")
    let delbtn=document.createElement('button')
    let unbtn=document.createElement('button')
 
//Add style to new buttons
delbtn.classList.add("btn-danger")
delbtn.appendChild( document.createTextNode( '&nbsp;' ) );
clrbtn.classList.add("btn-success")
unbtn.classList.add("btn-warning")

//append it to the view and task list
//log list to console for refrence
//problem is right now the list isnt being showed from my task array
//I have to show the list according to whats in the array
//Stop blank input
if(input.value!=""){
    error.innerText=''
    li.innerText=input.value
    li.style.fontSize="20px"
    clrbtn.innerText="Completed"
    delbtn.innerText='Delete Task'
    unbtn.innerText="Uncheck"
    text.innerText=date.value
    text.style.color='white'
    listt.appendChild(li)
    listt.appendChild(text)
    listt.appendChild(clrbtn)
    listt.appendChild(unbtn)
    listt.appendChild(delbtn)
    tasks.push(input.value)
    console.log(tasks)
    
}
else{
    console.log("its blank");
    let message="Invalid Input"
    error.innerText=message
    error.style.color="red"
    error.style.paddingTop="10px"  
}


// This will get current date and compare it with list date
//Aim is to show total tasks due on that particular day app is being used
//C=0, will increment this to get total events on that particular day
c=0
var today = new Date();
today=today.toDateString()
//This worked
//How do i compare form date to today ?






//once added,clear the input field
input.value=''

//Show the total tasks 
//This will reset to 0 when delete all is clicked

let count=document.getElementById('count')

count.innerText="Total Tasks:"+' '+ tasks.length

//test to see if i can get all the values from array into the view on click of restore button

rstbtn.addEventListener('click',function(){
    tasks.forEach(element=>listt.appendChild(li))
})

//clicking delete backup button will pop everything inside array
deletbck.addEventListener('click',function(){

    console.log("clicked")
    listt.innerText=''  
})







deletbck.addEventListener('click',function(){



    // A bug where when clear history button was pressed did not clear the view 
   


        tasks.length=0
        listt.innerText=''  
        console.log("its blank");
        console.log(tasks)
        let message1="History Cleared"
        error.innerText=message1
        error.style.color="red"
        error.style.paddingTop="10px"

          

})

//Scratch the task if completed
clrbtn.addEventListener('click',function(){
    li.style.textDecoration="line-through"
    li.style.textDecorationColor="red"
    

})

//similar i ll create uncheck button

unbtn.addEventListener('click',function(){
    console.log("yup")
    li.style.textDecoration='None'
})

function del(){

    // Removes both from list and view
    if(tasks.length>0){
        tasks.pop(li)
        console.log(tasks)
        listt.removeChild(li)
        listt.removeChild(delbtn)
        listt.removeChild(clrbtn)
        listt.removeChild(unbtn)
        listt.removeChild(text)
    }
    else{
        console.log('list is empty')
    }
}

delbtn.addEventListener('click',function(){
    del()
})
   
}

//Similar function to clear all data
function clearAll(){
    //Note: since clear all, all notes will be deleted and view will be cleared too
    //Array reamins unaffected
    listt.innerText=''  
    //Reset total counter to 0 
    Total=0
    count.innerText="Total Tasks:"+' '+ Total
    
}

//click add button
button.addEventListener('click',function(){
//call function addData
addData()
})
//Enter button 
document.addEventListener('keydown',function(e){
    if(e.key=="Enter"){
        addData()
    }
})

//click clear btn to clear the entire list
clear.addEventListener('click',function(){
    clearAll()
    listt.innerText=''  
})


