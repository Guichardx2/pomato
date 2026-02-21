import Toast from "./components/toast/Toast";
import Home from "./pages/home";
import { TaskContextProvider } from "./providers/task-context-provider/TaskContextProvider";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <TaskContextProvider>
      <Toast />
      <Home />
    </TaskContextProvider>
  )
}

export default App;
