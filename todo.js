// We'll pre-populate this array with a couple objects just so the array is not undefined 
// if your internet connection isn't working properly.

//  let arrayOfTodos = [
//       {
//       "userId": 14,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//       },
//       {
//       "userId": 20,
//       "id": 2,
//       "title": "delectus aut autem",
//       "completed": false
//   }]
  
  const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => response.json())
      .then( (json) => arrayOfTodos = json)
  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
  
  const populateTodos = () => {
   
    //start you for loop here
    for (i = 0; i < arrayOfTodos.length; i++) {
        
            //Capture the ol item into a variable (getElementById)
            let toDos = document.getElementById("todo-list")                   // get the target ID in HTML
            
            // createElement to make a new LI
            let toDoList = document.createElement("LI")                        // makes a <li>

            // createTextNode inside the li using the title property.
            let toDoTextNode = document.createTextNode(arrayOfTodos[i].title)  // [0] first title  [i] all titles in a loop

            // Now append the text to the new element
            toDoList.appendChild(toDoTextNode)                                 // <li>first title</li>

            // Then append the element to the ol element.
            toDos.appendChild(toDoList)                                        // Now I have  <li>first title</li> inside the <ol> </o> tags

    } //end loop

  }  // end function


// Start with getting just the first item and its title property.
// Then capture the ol item into a variable (getElementById)
// createElement to make a new LI
// createTextNode inside the li using the title property.
// Now append the text to the new element
// Then append the element to the ol element.
// Put all of that inside your populateTodos function.

// Now that you have one element created and showing up on the screen, 
// put the same code inside a for loop and iterate over the length of the array. 
// But now just change out [0] for [i]! 


// for (initialize your counter; how long; increment counter) {

// }

// for (i = 0; i < arrayOfTodos.length; i++) {

//    console.log(i)
// }