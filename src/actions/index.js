const toggleComplete = index =>{
  console.log()
  return {
    type:"TOGGLE_COMPLETE",
    index
  }
}

const removeTask = index=>{
  return {
    type:"REMOVE_TASK",
    index
  }
}

export {
  toggleComplete,
  removeTask
}
