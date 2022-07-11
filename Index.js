// To all users who stumble across this, you can add your own sayings here!
var reasons = [
    "You've survived every bad day that you've ever had.", 
    "Your friends will miss you.", 
    "You still have so much potential."];



//document.getElementById("test").innerHTML = "Tell me more..."
document.getElementById("reasons").innerHTML = reasons[Math.floor(Math.random()*reasons.length)];
