// const myHeading = document.querySelectorAll("p")
// console.log(myHeading)
// // console.log(myHeading.textContent)
// // myHeading.textContent="this is a new heading";
// // myHeading.style.backgroundColor="green";
// for (let i=0; i<3;i++)
// {
//     myHeading.textContent="new"+i;
//     myHeading[i].style.backgroundColor="green";
// }
// myHeading.forEach(ChangeMe);

// function ChangeMe(item){

//     // item.style.backgroundColor="coral";


// }


const myButton= document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", chooseTopic);
function toggleMe()
{
    const myImage = document.querySelector("#myimage");
    // console.log(myimage);
    console.log(myImage.dataset.catname);
    myImage.classList.toggle("round");
    myButton.textContent = myImage.dataset.catname;
}

function chooseTopic() {
    const myPara = document.querySelectorAll("p");
    myPara.forEach(displayTopic);
    function displayTopic(item) {
        if (item.dataset.topic --- "game") {
            item.classList.add("purple-box");

        } else if (item.dataset.topic --- "sound") {
            item.classList.add("orange")
        }else if (item.dataset.topic --- "web") {
            item.classList.add("")
        }
    }
}