const img = document.getElementById('img');
const text = document.getElementById('text');
const input = document.getElementById('input');
const add = document.getElementById('add');
const download = document.getElementById('download');

img.addEventListener('click', function (e) {
    console.log("img");
    }
)
text.addEventListener('click', function (e) {
    console.log("text");
    }
)



add.addEventListener('click', function (e) {
        // Selecting the input element and get its value 
        var inputVal = input.value;
    
        const print = text.textContent = inputVal;
        console.log(print);
})
download.addEventListener('click', function (e) {
        
    }
)