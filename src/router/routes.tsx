import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Home from "../pages/home";
import AboutPomodoro from "../pages/about-pomodoro";
import NotFound from "../pages/not-found";

const rootRoute = createRootRoute();

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <AboutPomodoro />,
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <NotFound />,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, notFoundRoute]);
export const routes = createRouter({ routeTree });
