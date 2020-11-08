const img = document.getElementById('img');
const text = document.getElementById('card_name');
const input = document.getElementById('input');
const input_title =document.getElementById('input_title');
const title_name=document.getElementById('title_name');
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



input.addEventListener('input', function (e) {
    console.log("Input changed");
        // Selecting the input element and get its value 
        var inputVal = e.target.value;
    
        const print = text.textContent = inputVal;
        console.log(print);
})

input_title.addEventListener('input', function (e) {
    console.log("Input changed");
    // Selecting the input element and get its value 
    var inputVal = e.target.value;

    const print = title_name.textContent = inputVal;
    console.log(print);
})




