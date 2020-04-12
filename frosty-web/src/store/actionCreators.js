export function removeTodoList (listId) {
  return {
    type: 'REMOVE_TODO_LIST',
    listId
  }
}
