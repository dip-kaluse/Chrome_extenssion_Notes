let arr=[]
const inputDl=document.getElementById("input-dl")
const save =document.getElementById("save-btn")
const ulel =document.getElementById("ulel")
const del =document.getElementById("delete-btn")
const tab =document.getElementById("tabbtn")
const locastor = JSON.parse(localStorage.getItem("note"))
console.log(locastor)
    if(locastor){
        arr=locastor
        notes(arr)
    }
tab.addEventListener("click",function () {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        arr.push(tabs[0].url)
        console.log(tabs) 
        localStorage.setItem("note", JSON.stringify(arr) )
        notes(arr)
    })
    
})
save.addEventListener("click", function () {
    arr.push(inputDl.value)
    inputDl.value=""
    localStorage.setItem("note",JSON.stringify(arr))
    notes(arr)
    
})
del.addEventListener("dblclick",function () {
    localStorage.clear()
    arr=[]
    notes(arr)
    
})



    
    function notes(r){
        let a=""
        for(let i=0;i<r.length;i++){
            a+=
            `
            <li>
                <a target='_blank' href='${r[i]}'>
                ${r[i]}     
                </a>
            </li>
        `
            // ulel.innerHTML+="<li>"+arr[i]+"</li>"
        }
        ulel.innerHTML=a        
    }   


