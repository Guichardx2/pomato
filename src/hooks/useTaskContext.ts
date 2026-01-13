import { useContext } from "react"
import { TaskContext } from "../contexts/task-context/TaskContext"

const useTaskContext = () => {
  return useContext(TaskContext)
}

export default useTaskContext