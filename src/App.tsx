import { RouterProvider } from "@tanstack/react-router";
import { TaskContextProvider } from "./providers/task-context-provider/TaskContextProvider";

import "./styles/global.css";
import "./styles/theme.css";
import { routes } from "./router/routes";
import ToasterContainer from "./components/toast/ToasterContainer";

function App() {
  return (
    <TaskContextProvider>
      <ToasterContainer>
        <RouterProvider router={routes} />
      </ToasterContainer>
    </TaskContextProvider>
  );
}

export default App;
