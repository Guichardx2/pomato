import Home from "./pages/home";

import "./styles/global.css";
import "./styles/theme.css";
import { TaskContextProvider } from "./providers/task-context-provider/TaskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}

export default App;
