/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
const studentsList = document.querySelectorAll(".student-item");
const numOfPages = Math.ceil(studentsList.length / 10);

// Function that loops through and shows the appropriate students per page. 

const showPage = (studentsList, page) => {
  start_index = (page * 10) - 10;
  end_index = page * 10;
  for (let i = 0; i < studentsList.length; i += 1) {
    if (i >= start_index && i < end_index) {
      studentsList[i].style.display = "block";
    } else {
      studentsList[i].style.display = "none";
    }
  }
};
// Calls and shows the first page of the studentlist
showPage(studentsList, 1);

const appendPages = list => {
  // Create div element on page and set class
  const div = document.createElement("div");
  // Assign page class to a variable
  const page = document.querySelector(".page");
  page.appendChild(div);
  div.className = "pagination";
  // Add ul to div
  const ul = document.createElement("ul");
  div.appendChild(ul);
  // For loop to add li, and a tags to every page
  for (let i = 1; i <= numOfPages; i += 1) {
    // Add li tags to the div
    const li = document.createElement("li");
    ul.appendChild(li);
    // Add a tags to the li
    const a = document.createElement("a");
    li.appendChild(a);
    a.setAttribute("href", "#");
    a.textContent = i;
    //click handler for a tags 
    a.addEventListener("click", e => {
      const aLinks = document.querySelectorAll("a");
      let page = e.target;
      page.className = "active";
      // loop through all a tags and highlights current page
      for (let i = 0; i < aLinks.length; i += 1) {
        if (aLinks[i] !== page) {
          aLinks[i].className = "";
        }
      }
      // Calls the show page function
      showPage(studentsList, page.textContent);
    });
  }
};
appendPages(studentsList);
