import { v4 as uuid4 } from 'uuid'

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#task-input')

form?.addEventListener('submit', (e) => {
  if (input?.value == '' || input?.value == null) return

  const task = {
    id: uuid4(),
    tittle: input.value,
    completed: false,
    createdAt: new Date(),
  }
})
