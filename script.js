const cout = console.log

const charCodeCheck = (eve) => {
    if ((eve.which || eve.keyCode) === 13) EnteringInput()
}

const ButtonAppear = () => {
    cout("Taskbox: you here, hi!!")
}

function emptyCheck(input) {
    if (input == "" || input == " ") {
        alert("Cannot add empty task")
        return false
    }
    return true
}

function clickAction() {
    cout("Taskbox: you just click")
}

const EnteringInput = () => {
    cout("JS: you just add some thing")
    //element creation
    const taskIn = document.getElementById("TaskInput").value
    const taskTe = document.createElement('p')
    const taskBx = document.createElement('dir')
    const taskDone = document.createElement('button')
    const taskDel = document.createElement('button')

    const ButtonAppear = () => {
        cout("Taskbox: Button Appear")
        taskBx.append(taskDone)
        taskBx.append(taskDel)
    }

    const ButtonGone = () => {
        cout("Taskbox: Button Disappear")
        taskBx.removeChild(taskBx.childNodes[2])
        taskBx.removeChild(taskBx.childNodes[1])
    }

    if (emptyCheck(taskIn)) {
        //Style and text innit
        taskBx.style.border = "thin solid black"
        taskTe.style.textAlign = "center"
        taskTe.innerHTML = taskIn
        taskDone.innerHTML = "Done"
        taskDone.style.alignItems = "center"
        taskDel.innerHTML = "Delete"
        taskDel.style.alignItems = "space-between"

        //Add eventlistener
        taskBx.addEventListener('mouseenter', ButtonAppear)
        taskBx.addEventListener('mouseleave', ButtonGone)
        taskDone.addEventListener("click", clickAction)
        taskDel.addEventListener("click", clickAction)

        //Put thing in place
        taskBx.append(taskTe)
        document.getElementById("TaskBox").append(taskBx)

        //clear old text
        document.getElementById("TaskInput").value = ""
    }

}
