import {combineReducers} from 'redux'

var initialTasks = [
  {
    task: "Wash the dishes",
    completed: false,
    key:'t1'
  },
  {
    task: "Do your laundry",
    completed: true,
        key:'t2'
  },
  {
    task: "Walk the dog",
    completed: false,
        key:'t3'
  },
  {
    task: "Clean your room",
    completed: true,
        key:'t4'
    },
    {
        task: "Play some damn Path of Exile",
        completed: true,
            key:'t5'
    },
    {
        task: "Learn react-redux",
        completed: false,
            key:'t6'
    },
    {
        task: "Learn mongodb and other nosql databases",
        completed: true,
            key:'t7'
    },
    {
        task: "Make a smash hit app",
        completed:false,
            key:'t8'
    },
    {
        task: "Get $$$ rich and live happily ever after ",
        completed: false,
            key:'t9'
    }
];

const allReducers = combineReducers({
    tasks :(state=initialTasks, action) =>{
      switch(action.type){
        case "TOGGLE_COMPLETE":
          return state.map((task,index)=>{
            if(index === action.index){
                var obj = Object.assign({},task,{
                  completed:!task.completed
                });
                return obj;
            }
            return task
          });
        case "REMOVE_TASK":
          state.splice(action.index, 1);
          return state.slice(0);
          break;
      }
      return state
    }
});

export default allReducers
