const incrementbtn = document.getElementById("inc")
const decrementbtn = document.getElementById("dec")
const resetbtn = document.getElementById("res")
const value = document.getElementById("value")

incrementbtn.addEventListener("click",()=>{
    const val=Number(value.innerText)
if (val >= 10)
    alert("Value greater than 10 not allowed")
else
value.innerText=val+1
});

decrementbtn.addEventListener("click",()=>{
    const val=Number(value.innerText)
if (val > 0)
value.innerText=val-1
else
alert("Value cannot be negative")
});

resetbtn.addEventListener("click",()=>{
    value.innerText=0
})