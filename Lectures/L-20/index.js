function validation(event){
    console.log("Test", event);
    var val = event.target.value;
    console.log(val);

    if(val){
        event.target.style.border = '';
    }else{
        event.target.style.border = '2px solid red';
    }
}


function abc(){
    alert("TTT")
}
var main = document.getElementById("main");
main.innerHTML = '<button onclick= "abc()">Click Now<button>';