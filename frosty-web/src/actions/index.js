export const deleteTodoListItem = (todoListId, itemId) => ({
  type: 'DELETE_TODO_LIST_ITEM',
  todoListId,
  itemId
})
