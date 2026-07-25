import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Home from "../pages/home";
import AboutPomodoro from "../pages/about-pomodoro";
import NotFound from "../pages/not-found";
import History from "../pages/history";
import Settings from "../pages/settings";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: () => <History />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <AboutPomodoro />,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: () => <Settings />,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <NotFound />,
});


const routeTree = rootRoute.addChildren([homeRoute, historyRoute, aboutRoute, settingsRoute, notFoundRoute]);
export const routes = createRouter({ routeTree, scrollRestoration: true, scrollRestorationBehavior: "smooth" });
