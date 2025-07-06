let count = 0;

function increaseCount() {
    count++;
    displayCount();//display the count
    checkCountValue(); //check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; //display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your instagram post gained 10 followers! Congratulations");
    } else if (count === 20) {
         alert("Your instagram post gained 20 followers! Keep it up!");
    }
}