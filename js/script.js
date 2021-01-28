// Question 1
console.log("Question 1");

const firstHeading = document.querySelector("h3");
firstHeading.innerHTML = "Hello";
console.log(firstHeading);

// Question 2
console.log("Question 2");

const headings = document.querySelectorAll("h4");

for (let i = 0; i < headings.length; i++) {
    headings[i].style.marginBottom = "-20px";
}

console.dir(headings);

// Question 3
console.log("Question 3");

headings[1].style.backgroundColor = "red";
console.log(headings[1]);

// Question 4
console.log("Question 4");

const firstParagraph = document.querySelector("p.one");
firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";
console.log(firstParagraph);

// Question 5
console.log("Question 5");

const thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = `<span>${thirdParagraph.innerHTML}</span`;
console.log(thirdParagraph.innerHTML);

// Question 6
console.log("Question 6");

const content = document.querySelector(".content");
content.innerHTML += "<p>Another paragraph</p>";
console.log(content.innerHTML);

// Question 7
console.log("Question 7");

const contentParagraphs = document.querySelectorAll(".content p")

for (let i = 0; i < contentParagraphs.length; i++) {
    contentParagraphs[i].classList.add("content-item");
}

console.log(contentParagraphs);

// Question 8
console.log("Question 8");

const list = document.querySelector("#services");
list.innerHTML = "<li>New Item</li>" + list.innerHTML;
console.dir(list);

// Question 9
console.log("Question 9");

list.classList.remove("service-list");
console.log("Class removed from ul");

// Question 10
console.log("Question 10");

const hideMe = document.querySelector("#hide");
hideMe.style.display = "none";
console.log(hideMe);