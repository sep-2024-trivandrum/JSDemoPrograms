function display(){
    // first grab hold of <p> through its id
    document.getElementById("para1");
    alert(document.getElementById("para1"));
    document.getElementById("para1").innerHTML="new content displayed by click of a button";
}