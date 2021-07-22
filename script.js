const cout = console.log

const charCodeCheck = (eve) => {
    if ((eve.which || eve.keyCode) === 13) EnteringInput()
}

const cursorCheck = () => {
    cout("Taskbox: you here, hi!!")
}

function emptyCheck(input) {
    if (input == "") {
        alert("Cannot add empty task")
        return false
    }
    return true
}

const EnteringInput = () => {
    cout("JS: you just add some thing")
    const taskIn = document.getElementById("TaskInput").value
    if (emptyCheck(taskIn)) {
        //element creation
        const taskTe = document.createElement('p')
        const taskBx = document.createElement('dir')

        //Style innit
        taskTe.style.border = "thin solid black"
        taskTe.style.textAlign = "center"

        //Add eventlistener
        taskTe.addEventListener("mouseover", cursorCheck)

        //Put thing in place
        taskTe.innerHTML = taskIn
        taskBx.append(taskTe)
        document.getElementById("TaskBox").append(taskBx)

        //clear old text
        document.getElementById("TaskInput").value = " "
    }

}
