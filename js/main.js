// checkboxes:
// if duelist checkbox is checked, then remove hidden from .initiator,.sentinel, .controller (only show .duelist)

// document.querySelector('#choose').addEventListener('click', showAndHide)

// function showAndHide(){
//     document.querySelector('.agent').classList.remove("hidden")
// }

///////////////////////////////////////////////////////////////////////////////////////

// document.querySelector('#choose').addEventListener('click', showAndHide)



// function showAndHide(){

//     document.querySelector("#brimstone").classList.remove("hidden")
    
//     document.querySelector("#phoenix").classList.remove("hidden")

//     document.querySelector("#sage").classList.remove("hidden")

//     document.querySelector("#sova").classList.remove("hidden")

//     document.querySelector("#viper").classList.remove("hidden")

//     document.querySelector("#cypher").classList.remove("hidden")

//     document.querySelector("#reyna").classList.remove("hidden")

//     document.querySelector("#killjoy").classList.remove("hidden")

//     document.querySelector("#breach").classList.remove("hidden")

//     document.querySelector("#omen").classList.remove("hidden")

//     document.querySelector("#jett").classList.remove("hidden")

//     document.querySelector("#raze").classList.remove("hidden")

//     document.querySelector("#skye").classList.remove("hidden")

//     document.querySelector("#yoru").classList.remove("hidden")

//     document.querySelector("#astra").classList.remove("hidden")

//     document.querySelector("#kayo").classList.remove("hidden")

//     document.querySelector("#chamber").classList.remove("hidden")

//     document.querySelector("#neon").classList.remove("hidden")

// }

/////////////////////////////////////////////////////////////////////////////////////
//above code confirmed works lmao

//check boxes

//button needs function where
//1) if duelist checkbox is = true, then type out doc.que ... raze jett etc remove hidden

/////////////////////////////////////////////////////////////////////////////////////

document.querySelector('#choose').addEventListener('click', duelistFilter)



function duelistFilter() {

    let duelistCb = document.querySelector("#duelist")

    if (duelistCb.checked === true){
        console.log("it works hahaaaaaa")
        document.querySelector("#raze").classList.remove("hidden")
        document.querySelector("#neon").classList.remove("hidden")
        document.querySelector("#yoru").classList.remove("hidden")
        document.querySelector("#jett").classList.remove("hidden")
        document.querySelector("#reyna").classList.remove("hidden")
        document.querySelector("#phoenix").classList.remove("hidden")
    }
    else {
        document.querySelector("#raze").classList.add("hidden")
        document.querySelector("#neon").classList.add("hidden")
        document.querySelector("#yoru").classList.add("hidden")
        document.querySelector("#jett").classList.add("hidden")
        document.querySelector("#reyna").classList.add("hidden")
        document.querySelector("#phoenix").classList.add("hidden")
        console.log("xdddd")
    }
}
    // }
      // Do something
    // }
    // else if (condition 2) {
    //   Do something else
    // }
//     else {
//       Default behaviour
// }
////////////////////////////////////////////////////////////////////////////////////

document.querySelector('#choose').addEventListener('click', sentinelFilter)

  function sentinelFilter() {

    let sentinelCb = document.querySelector("#sentinel")

    if (sentinelCb.checked) {
        document.querySelector("#chamber").classList.remove("hidden")
        document.querySelector("#killjoy").classList.remove("hidden")
        document.querySelector("#cypher").classList.remove("hidden")
        document.querySelector("#sage").classList.remove("hidden")
    }
    else {
        document.querySelector("#chamber").classList.add("hidden")
        document.querySelector("#killjoy").classList.add("hidden")
        document.querySelector("#cypher").classList.add("hidden")
        document.querySelector("#sage").classList.add("hidden")
        console.log("xD2")
      // Default behaviour
  }}

////////////////////////////////////////////////////////////////////////////////////

document.querySelector('#choose').addEventListener('click', controllerFilter)

  function controllerFilter() {
    let controllerCb = document.querySelector("#controller")

    if (controllerCb.checked) {
        document.querySelector("#astra").classList.remove("hidden")
        document.querySelector("#omen").classList.remove("hidden")
        document.querySelector("#viper").classList.remove("hidden")
        document.querySelector("#brimstone").classList.remove("hidden")
      
    }
    else {
        document.querySelector("#astra").classList.add("hidden")
        document.querySelector("#omen").classList.add("hidden")
        document.querySelector("#viper").classList.add("hidden")
        document.querySelector("#brimstone").classList.add("hidden")
        console.log("xDD3")
      // Default behaviour
  }}

  ////////////////////////////////////////////////////////////////////////////////////

  document.querySelector('#choose').addEventListener('click', initiatorFilter)

  function initiatorFilter() {
    
    let initiatorCb = document.querySelector("#initiator")

    if (initiatorCb.checked) {
        document.querySelector("#kayo").classList.remove("hidden")
        document.querySelector("#breach").classList.remove("hidden")
        document.querySelector("#sova").classList.remove("hidden")
        document.querySelector("#skye").classList.remove("hidden")
    }
    else {
        document.querySelector("#kayo").classList.add("hidden")
        document.querySelector("#breach").classList.add("hidden")
        document.querySelector("#sova").classList.add("hidden")
        document.querySelector("#skye").classList.add("hidden")
        console.log("xDDd4")
    }}

    // create duelist,sentinel,initiator and controller arrays
    //have each filter function target random id
    //add/remove hidden from targetted id