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

form?.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input?.value == '' || input?.value == null) return

  const newTask: Task = {
    id: uuid4(),
    tittle: input.value,
    completed: true,
    createdAt: new Date(),
  }

  addListItem(newTask)
  input.value = ''
})

function addListItem(task: Task) {
  const item = document.createElement('li')
  const lable = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.completed

  lable.append(checkbox, task.tittle)
  item.append(lable)
  list?.append(item)
}
