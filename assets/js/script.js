// Sets the current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"))

// Creates variables
var currentTime = moment().format("H")
// var currentTime = 9
var scheduleTime = $(".scheduleInput")
var newArray = []
var cont = $(".saveBtn")
var newData = []

// Gets the stored data from local storage and puts it on the page
function init() {
    var storedinputData = JSON.parse(localStorage.getItem("newData"))
    if (storedinputData !== null) {
        newData = storedinputData
    }
    for (let i = 0; i < newData.length; i++) {
        var indexData = $("#scheduleInput" + [i]);
        indexData.append(newData[i].value)
    }
}

// Runs the function to get the data from local storage
init()


// Checks to see if the time block is in the past, present, or future and sets the class as needed.
for (let x = 0; x < scheduleTime.length; x++) {
    if (scheduleTime[x].dataset.index < currentTime) {
        var newTime = $("#scheduleInput" + [x])
        newTime.addClass("past")
    }
    else if (scheduleTime[x].dataset.index > currentTime) {
        var newTime = $("#scheduleInput" + [x])
        newTime.addClass("future")
    }
    else {
        var newTime = $("#scheduleInput" + [x])
        newTime.addClass("present")
    } 
}

// Click event to save the user input
cont.on("click", function () {
    for (let i = 0; i < scheduleTime.length; i++) {
        var newInput = $("#scheduleInput" + [i]).val()
        var dataInput = $("#scheduleInput" + [i])
        var inputData = {
            index: dataInput[0].dataset.index,
            value: newInput
        }
        newArray.push(inputData)           
    }
    localStorage.setItem("newData", JSON.stringify(newArray))
    newArray = []
})