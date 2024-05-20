
const button=document.getElementById("button");
const l_con=document.getElementById("list_container");

button.onclick=function(){
    let input=document.getElementById("input").value;
    if(input=="")
        {
            alert("You must write something!!");
        }

        else{
           let li=document.createElement("li");
           li.innerHTML=input;
           l_con.appendChild(li);
           let span=document.createElement("span");
           span.innerHTML="\u00d7";
           li.appendChild(span);
        }
      
        document.getElementById("input").value="";
        saveData();
}

l_con.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",l_con.innerHTML);
}
function showtask(){
    l_con.innerHTML=localStorage.getItem("data");
}
showtask();