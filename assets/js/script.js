const nameTask = document.querySelector('#nameTask');
const btnTask = document.querySelector('#buttonTask');
const task = document.querySelector('#body-task')
const countTask = document.querySelector('#count-task')
const countSuccess = document.querySelector('#count-success')
const tasks = [];

btnTask.addEventListener('click', () => {
    const task = nameTask.value;
    tasks.push({id: Date.now(), name: task, state: false })
    nameTask.value = '';
    updateList(tasks)
})

const updateList = (tasks) =>{
    let html = ''
    tasks.forEach(ele => {
        html += `
    <tr>
      <td>${ele.id}</td>
      <td>${ele.name}</td>
      <td><input type="checkbox" ${ele.state ? 'checked' : ''} onclick="updateCheckbox(${ele.id})" > </td>
      <td><button onclick="deleteTask(${ele.id})"> eliminar</button></td>
      </tr>
        `
        
    });
    task.innerHTML = html;
    countTask.textContent = `${tasks.length}`
}

const deleteTask = (id) => {
    const index = tasks.findIndex((e) => e.id == id)
    tasks.splice(index,1)
    updateList(tasks)
    updateCompletedCount()
}


const updateCheckbox = (id) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.state = !task.state;
    }
    updateCompletedCount();

}

const updateCompletedCount = () => {
    const completedTasks = tasks.filter((t) => t.state).length; // count state true
    countSuccess.textContent = `${completedTasks}`;
};

