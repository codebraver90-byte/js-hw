function saveit(){
    let title=document.getElementById("title").value;
    let content=document.getElementById("write").value;
    if (title==""||content==""){
        alert("Please fill in both flields");
}
    else {
        localStorage.setItem("title",title);
        localStorage.setItem("content",content);
        alert("note saved!");
    }
}
function displayit(){

    let title=localStorage.getItem("title");
     let content=localStorage.getItem("content");
     document.getElementById("save1").innerHTML=title;
     document.getElementById("save2").innerHTML=content;
    
    
}
function clearit(){
    localStorage.removeItem("title");
    localStorage.removeItem("content");
    document.getElementById("save1").innerHTML="";
     document.getElementById("save2").innerHTML="";
     document.getElementById("title").value="";
     document.getElementById("write").value="";
}