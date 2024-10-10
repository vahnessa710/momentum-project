function editName (){
    let input = document.querySelector(".userInput");
    let displayName = document.querySelector(".displayName");

input.addEventListener('keypress', function(enter){
    if(enter.key === "Enter") {
        enter.preventDefault(); 
        const name = input.value.trim();
        if(name) {
            displayName.innerText = name;
            input.style.display = 'none';
    }
    }
});

displayName.addEventListener('dblclick', function() {
    input.style.display = 'inline';
    input.value = '';
    displayName.innerText = '';
    
    
})
}

editName();
 