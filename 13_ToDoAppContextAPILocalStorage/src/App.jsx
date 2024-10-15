import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {

  //todos -> here it represents all the todos available under given state
  const [todos, setTodos] = useState([])


  //todoTask -> this value will come from Todo form(single todo)
  //below todoTask should be added to the previous array
  const addTodo = (todoTask) => {
    //here we are taking the previous array of todos
    //and there we are adding the newly created todoTask
    //using prev -> accessing the previous todos array
    setTodos((prev) => [...prev, {id: Date.now(), ...todoTask}])
  }

  //this method will update the content inside the todoTask
  const updateTodo = (id, todoTask) => {
    //todos (defined using useState) -> this array will be having n numbers of todoTasks
    //to update the specific todoTask we will need to find that todoTask inside the todos array
    //using the "id" we can find out the specific todoTask

    //todos -> is an array -> so we will iterate on it to get the req todoTask
    //by using prev we can get the previous state values/todoTasks of todos
    setTodos((prev) => prev.map( (eachTodo) => (
      eachTodo.id === id ? todoTask : eachTodo
    ) ))

  }

  //this method will delete the todoTask from todos array
  const deleteTodo = (id) => {
    //in this case we can't use map method -> it can be used just to iterate over array
    //filter can be used to filter and get the required data from given array
    //filter returns a new array after applying the changes

    //in below case, filter will return/show todoTasks whose id is not matching/equal
    setTodos((prev) => prev.filter( (eachTodo) => eachTodo.id !== id))
  }

  const todoCheckedCompleted = (id) => {
    //in this case first we will iterate over the todos array using map method
    //and over-write the value of "completed" with its opposite value
    //this will result in UI, the checkbox will enabled/disabled accordingly
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo, completed: !eachTodo.completed} : eachTodo))
  }


  //whenever the component is loaded useEffect method gets executed first then other methods
  //When we will reload/refresh our application then there is possibility that 
  //our application will already be having some todos there 
  //to show/make them visible on UI we are using here the concept of 
  //useEffect and localStorage
  useEffect(() => {
    //M.IMP -> localStorage takes only string and always returns string
    //so to deal with that we will have to convert the data to JSON
    const todos = JSON.parse(localStorage.getItem("todos"))

    //this will display the already defined/available todos 
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  //all the todos will be stored under the localStorage
  useEffect(() => {
    //we always pass string to localStorage
    //in this case we are converting the string to JSON by below stringify() method
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, todoCheckedCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className='w-full'>
                  <TodoItem todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
