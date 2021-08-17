let addNote = document.getElementById('addNote')
let container = document.querySelector('.container')
let count=0;
console.log(addNote);

saveDataLs=()=>{
 const value = document.querySelectorAll("textarea")
 notes = []
 value.forEach((val)=>{
         notes.push(val.value)
 })
 localStorage.setItem("notes",JSON.stringify(notes))
 //add(notes)
}
msgsaver=(event,id)=>{
   debugger
   event.stopPropagation();
   console.log(event.target.value);
   console.log(document.getElementById(id).parentNode.childNodes);
  document.getElementById(id).parentNode.childNodes[3].innerHTML =  document.getElementById(id).value
  document.getElementById(id).classList.toggle("hidden")
  saveDataLs()
 }
editing=(id)=>{
  console.log(document.getElementById(id).parentNode.parentNode.childNodes);
  document.getElementById(id).parentNode.parentNode.childNodes[5].classList.toggle('hidden')
  
  }  
deleting=(event,id)=>{
 event.stopPropagation();
  document.getElementById(id).parentNode.parentNode.remove()
  saveDataLs()
  alert("delete")
 }


add=(text="")=>{

  var html = `<div class="notes-${count+=1} notess">
    <div class="operation">
    <button id="edit-${count}" onclick="editing(this.id)" class="fa fa-edit" value="edit"> Edit </button>
    <button id="delete-${count}" onclick=" deleting(event,this.id)" value="delete" class="fa fa-trash-alt"> Delete </button></div>
  
    <div class="notes " id="noteNo-${count}"  onclick="showTextArea(event,this.id)"></div>
 <textarea id="msg-${count}" class="${text?"hidden":""}" onchange=" msgsaver(event,this.id)" cols="30" rows="10" ></textarea></div>
 `

   container.insertAdjacentHTML('beforeend',html); 
   document.body.appendChild(container)
   document.getElementById(`noteNo-${count}`).innerHTML=text
   document.getElementById(`msg-${count}`).innerHTML=text

}

function showTextArea(event,num){
  debugger
  alert("div1")
 const arr=num.split("-")
  console.log(`msg-${arr[1]}`)
  event.stopPropagation();
  document.getElementById(`msg-${arr[1]}`).classList.remove("hidden");
}

const lsval=JSON.parse(localStorage.getItem("notes"));
console.log(lsval);
if(lsval!=null){
  lsval.forEach((val)=>{
     if(val!=""){add(val)}
  }) 
  }
addNote.addEventListener('click', ()=>add())
