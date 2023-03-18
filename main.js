//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
const appID = "app";
//const headingText = "To do. To done. ✅";

// Variables

// DOM Elements
let appContainer = document.getElementById(appID);

//array of items and the related things
const items = [];
const itemList = document.querySelector("item-list");
const itemForm = document.querySelector("add-item");
const itemName = document.querySelector("item-name");

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
function addItem(){
  //stop defulat submission
  e.preventDefault();

  //get text
  const itemName = item.value();
  items.push(itemName);

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
    listStuff.textContent = stuff[i];

    //animation thing
    if(i == stuff.length - 1){
      listStuff,classList,add("new-item-annimate");
    }

    //add item to list
    stuffList.appendChild(listStuff);

  }
}

//
// Inits & Event Listeners
//

listForm.addEventListener("submit", addItem);
updateList(items, itemList);

inititialise();
