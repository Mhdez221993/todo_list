import { v4 as uuid4 } from 'uuid'

type Task = {
  id: string
  tittle: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#task-title')
const tasks: Task[] = loadTasks()

tasks.forEach(addListItem)

form?.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input?.value == '' || input?.value == null) return

  const newTask: Task = {
    id: uuid4(),
    tittle: input.value,
    completed: false,
    createdAt: new Date(),
  }

  tasks.push(newTask)

  addListItem(newTask)
  input.value = ''
})

function addListItem(task: Task) {
  const item = document.createElement('li')
  const lable = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.completed

  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked
    saveTasks()
  })

  lable.append(checkbox, task.tittle)
  item.append(lable)
  list?.append(item)
}

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem('TASKS')
  if (taskJSON == null) return []

  return JSON.parse(taskJSON)
}
