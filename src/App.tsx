import Home from "./pages/home";
import { TaskContextProvider } from "./providers/task-context-provider/TaskContextProvider";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App;
