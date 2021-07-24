const cout = console.log
// localStorage  initializing and loading
if (localStorage.getItem('userData') == null) {
    const dataformat = {
        incompleteArr: [], completeArr: []
    }
    localStorage.setItem('userData', JSON.stringify(dataformat))
}
let pastData = JSON.parse(localStorage.getItem("userData"))


const charCodeCheck = (eve) => {
    if ((eve.which || eve.keyCode) === 13) EnteringInput()
}

function emptyAlert(input) {
    if (input.length == 0 || input.indexOf(' ') == 0) {
        document.getElementById("TaskInput").value = ""
        alert("Cannot add empty task")
        return false
    }
    return true
}

function emptyCheck(inpu){
    if (inpu.length == 0 || inpu.indexOf(' ') == 0) {
        return false
    }
    return true
}

// function 

function returnArrIndex(arr, key) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === key) return i
    }
    return -1
}

const taskbxCons = (TaskCalled) => {
    const taskName = TaskCalled;

    const taskTe = document.createElement('p')
    const taskBx = document.createElement('div')
    const taskActionBar = document.createElement('div')
    const taskDone = document.createElement('button')
    const taskDel = document.createElement('button')

    const DoneAction = () => {
        taskTe.className = "mainFont text-lg text-center p-1 line-through"
        document.getElementById("CompletedBox").append(taskTe)
        pastData.incompleteArr[returnArrIndex(pastData.incompleteArr, taskName)] = ""
        pastData.completeArr.push(taskName)
        localStorage.setItem('userData', JSON.stringify(pastData))
        taskBx.remove()
    }

    const DeleteAction = () => {
        pastData.incompleteArr[returnArrIndex(pastData.incompleteArr, taskName)] = ""
        localStorage.setItem('userData', JSON.stringify(pastData))
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

    taskBx.className = "max-w-md mx-auto p-1 border border-indigo-500 flex flex-row justify-center"
    taskTe.className = "mainFont text-lg text-center p-1 pr-5"
    taskActionBar.className = "flex flex-row justify-center space-x-2"

    taskDel.className = "p-0.5 border bg-pink-400"
    taskDel.style.visibility = "hidden"
    taskDone.className = "p-0.5 border bg-blue-400"
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

    if (emptyAlert(taskIn)) {
        taskbxCons(taskIn)
        //clear old text

        // if (returnArrIndex(pastData.incompleteArr, "") != -1) {
        //     pastData.incompleteArr[returnArrIndex(pastData.incompleteArr, "")] = taskIn
        // } else {
        //     pastData.incompleteArr.push(taskIn)
        // }
        pastData.incompleteArr.push(taskIn)
        localStorage.setItem('userData', JSON.stringify(pastData))

        document.getElementById("TaskInput").value = ""
    }

}

//loading old data
pastData.incompleteArr.map(x => {
    if (emptyCheck(x)) {
        taskbxCons(x)
    }
})
pastData.completeArr.map(x => {
    if (emptyCheck(x)) {
        complTaskadding(x)
    }
})