const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something")

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = " \u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

//website ko referesh krenge to jo phle task add kiye the vo as it is vasie he rhne k liye ye function use kr rhe h 

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); 

}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
