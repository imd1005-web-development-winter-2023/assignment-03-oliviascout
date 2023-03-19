//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
//const appID = "app";
//const headingText = "To do. To done. ✅";

// Variables

// DOM Elements
//let appContainer = document.getElementById(appID);

//array of items and the related things
const items = [];
const itemList = document.querySelector(".item-list");
const itemForm = document.querySelector(".add-item");
const itemName = document.querySelector("#item-name");

//thing for selecting
//const toDos = document.querySelectorAll("li");
//const toDoRemoveButton = document.createElement("button");

//
// Functions
//

// Add a heading to the app container\
/*function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }
  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);
  // Init complete
  console.log("App successfully initialised");
}*/


//for when the form is submitted
function addListItem(e){
  //stop default submission
  e.preventDefault();

  //get text
  const itemKind = itemName.value;
  items.push(itemKind);

  //add and draw new list
  updateList(items, itemList);

  //reset form
  itemForm.reset();
}

//actually adding the item
function updateList(stuff, stuffList){
  //clean the list
  while(stuffList.firstChild){
    stuffList.removeChild(stuffList.firstChild);
  }

  //add list
  for(let i = 0; i < stuff.length; i++){
    const listStuff = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = stuff[i];
    button.dataset.index = i;

    //console.log(button.dataset.index);
    
    //listStuff.textContent = stuff[i];
    //listStuff.addEventListener("click", makeDone);
    listStuff.appendChild(button);

    //add item to list
    stuffList.appendChild(listStuff);
  }
}

/*function makeDone(e){
  if(e.target.nodeName !== "BUTTON"){
    return;
  }

  //get the index
  const idx = e.target.dataset.index;

  console.log(idx);
  console.log(items[idx]);

  items.

  //items.style.transform;
  
  //redraw list
  updateList(items, itemList);
}*/



function removeDone(e){
  if(e.target.nodeName !== "BUTTON"){
    return;
  }

  //get the index
  const idx = e.target.dataset.index;

  //remove it
  console.log(idx);
  items.splice(idx, 1);

  //redraw list
  updateList(items, itemList);
} 


//
// Inits & Event Listeners
//

itemForm.addEventListener("submit", addListItem);
//
updateList(items, itemList);
//itemList.addEventListener('click', makeDone);
itemList.addEventListener('click', removeDone);

//inititialise();