const cout = console.log
// localStorage loading
let in_n_compeTasks = "{'Incomplete': [], 'Complete': []}"
const inComAcc = JSON.parse(in_n_compeTasks)

const charCodeCheck = (eve) => {
    if ((eve.which || eve.keyCode) === 13) EnteringInput()
}

function emptyCheck(input) {
    if (input.length == 0 || input.indexOf(' ') >= 0) {
        alert("Cannot add empty task")
        return false
    }
    return true
}

const taskbxCons = (TaskCalled) => {
        const taskTe = document.createElement('p')
        const taskBx = document.createElement('div')
        const taskActionBar = document.createElement('div')
        const taskDone = document.createElement('button')
        const taskDel = document.createElement('button')

        const DoneAction = () => {
            document.getElementById("CompletedBox").append(taskTe)
            taskTe.className = "mainFont text-lg text-center p-1 line-through"

            taskBx.remove()
        }

        const DeleteAction = () => {
            taskBx.remove()
        }

        const ButtonAppear = () => {
            taskDone.style.visibility = "visible"
            taskDel.style.visibility = "visible"
        }

        const ButtonGone = () => {
            taskDone.style.visibility = "hidden"
            taskDel.style.visibility = "hidden"
        }

        taskBx.className = "max-w-md mx-auto p-1 border flex flex-col"
        taskTe.className = "mainFont text-lg text-center p-1"
        taskActionBar.className = "flex flex-row justify-center space-x-2"

        taskDel.className = "p-0.5 border"
        taskDel.style.visibility = "hidden"
        taskDone.className = "p-0.5 border"
        taskDone.style.visibility = "hidden"

        taskTe.innerHTML = TaskCalled
        taskDone.innerHTML = "Done"
        taskDel.innerHTML = "Delete"

        //Add eventlistener
        taskBx.addEventListener('mouseenter', ButtonAppear)
        taskBx.addEventListener('mouseleave', ButtonGone)
        taskDone.addEventListener("click", DoneAction)
        taskDel.addEventListener("click", DeleteAction)

        //Put thing in place
        taskBx.append(taskTe)
        taskBx.append(taskActionBar)
        taskActionBar.append(taskDone)
        taskActionBar.append(taskDel)
        document.getElementById("TaskBox").prepend(taskBx)

}

const complTaskadding = (complTask) => {
    const taskTe = document.createElement('p')
    taskTe.innerHTML = complTask
    document.getElementById("CompletedBox").append(taskTe)
    taskTe.className = "mainFont text-lg text-center p-1 line-through"
}


const EnteringInput = () => {
    cout("JS: you just add some thing")
    const taskIn = document.getElementById("TaskInput").value

    if (emptyCheck(taskIn)) {
        taskbxCons(taskIn)
        //clear old text
        document.getElementById("TaskInput").value = ""
    }

}
