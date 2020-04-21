
// function buildTaskForm(){
//     return `
    
//     `
// }




// document.querySelector("#my-todo-list")
// .addEventListener ("click", function(){
//     console.log("you clicked on the my to do list button")
//     document.querySelector("#page-content").innerHTML =`
//     <h1>My To Do List</h1>
//     `
// })


// document.querySelector("#fam-todo-list")
// .addEventListener ("click", function(){
//     document.querySelector("#page-content").innerHTML =`
//     <h1>Family To Do List</h1>
//     `
// })


// document.querySelector("#completed-list")
// .addEventListener ("click", function(){
//     document.querySelector("#page-content").innerHTML =`
//     <h1>Completed Tasks</h1>
//     `
// })



// Build two fieldsets and input fields that will allow you to enter the name of a favorite thing of yours, and a location where you might purchase it (Target, Amazon, Best Buy, etc...)

// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following format in the DOM.

// I can purchase {thing} at {location}



//prints html to the dom
// document.querySelector("#container").innerHTML =
// `
// <fieldset>
// <label for="">Item</label>
// <input id="item" type="text">
// </fieldset>
// <fieldset>
// <label  for="">Location</label>
// <input id="location" type="text">
// </fieldset>
// <button id="save">Save To Wishlist</button>

// `
//adds click fucntionality to save button

// document.querySelector("#save").addEventListener("click", function(){
//     console.log("you clicked" )
//   const item =  document.querySelector("#item").value
//     const location = document.querySelector("#location").value
//  const string =  returnItems(item, location)
//  document.querySelector("#container").innerHTML += string
// })

// displays items to dom when you click save button
// function returnItems(item, location){
//     return `
//     <p> I can Purchase ${item} at ${location}</p>
//   `
// }


// When the user clicks on any given link, they should see an h1 element with an appropriate heading and some lorem ipsum text. For example, when the user clicks on the "Home" link, they should see a heading that says "Home" and some dummy text.
// All content should be rendered and removed dynamically with JavaScript
// You should only have one HTML document.
// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".


//THIS IS ALL I HAVE LEFT TO DO 
// When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"



//MY CODE SMELLS BUT IS FUCNTIONAL SO FAR

document.querySelector("#home-link").addEventListener("click", function(){
document.querySelector("#container").innerHTML = `
<h1>Home</h1>
<p>Appropriate heading and some lorem ipsum text.</p>
`
})

document.querySelector("#contact-link").addEventListener("click", function(){
 document.querySelector("#container").innerHTML = `
    <h1>Contact Me</h1>
     <form action="">
       <label for="">Name:</label>
       <input id="nameInput" placeholder="Name" type="text">
       <br>
       <label for="">Message:</label>
       <input id="messageInput" placeholder="Message" type="text">
     </form>
    
     <button id="sendButton">Send</button>
    `
    })


    //need to clear name out of input and make message appear
    document.querySelector("#container").addEventListener("click", function(){
     if (event.target.id === "sendButton")
     document.querySelector("#container").innerHTML += `
     <p>Message Sent</P>
     `
     
     
    })


    document.querySelector("#me-link").addEventListener("click", function(){
        document.querySelector("#container").innerHTML = `
        <h1>About Me</h1>
        <p>You should only have one HTML document</p>
        `
        })

        
    document.querySelector("#projects-link").addEventListener("click", function(){
        document.querySelector("#container").innerHTML = `
        <h1>Projects</h1>
        <p>And some dummy text.</p>
        `
        })
       



//I HAVE THE HTML WRITTEN FOR THE INDIVIDUAL PAGES

//CLICK FUNCTIONALITY WORKS ON THE NAV BAR 

//I CAN CLCIK ON A LINK AND HTML PRINTS THE DOM

//CAN I STORE THE INNER HTML INTO INDIVIDUL VARIABLES??

//ALSO THINK I DID THAT IN THE PREVIOUS EXERCISE I WORKED ON

//TRIED THAT AND IT DOESNT GIVE ME AN ERROR IN THE CONSOLE 

//CONDITIONALS?? WILL THAT HELP ME 

//SO MANY THING TO DO AND NOT SURE WHAT ORDER I SHOULD TACKLE THEM IN IF THAT EVEN MATTERS