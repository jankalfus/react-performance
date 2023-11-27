import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MoveState } from "./move-state/MoveState";
import { ReactMemoNotWorking } from "./react-memo-not-working/ReactMemoNotWorking";
import { ComponentsAsChildren } from "./components-as-children/ComponentsAsChildren";
import { ComponentsAsProps } from "./components-as-props/ComponentsAsProps";
import { ReactMemo } from "./react-memo/ReactMemo";

const Paths = {
  MoveState: {
    path: "/move-state",
    name: "Move state",
  },
  ComponentsAsChildren: {
    path: "/components-as-children",
    name: "Components as children",
  },
  ComponentsAsProps: {
    path: "/components-as-props",
    name: "Components as props",
  },
  ReactMemo: {
    path: "/react-memo",
    name: "React.memo",
  },
  ReactMemoNotWorking: {
    path: "/react-memo-not-working",
    name: "React.memo not working",
  },
};

const PageTitle = () => {
  const location = useLocation();

  return (
    Object.values(Paths).find((pathInfo) => pathInfo.path === location.pathname)
      ?.name || ""
  );
};

function App() {
  return (
    <div className="p-4 max-w-7xl m-auto">
      <BrowserRouter>
        <nav>
          <ol className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            {Object.values(Paths).map((pathInfo) => (
              <li key={pathInfo.path}>
                <NavLink to={pathInfo.path}>{pathInfo.name}</NavLink>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-2xl mt-8 mb-6">
          <PageTitle />
        </h1>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path={Paths.MoveState.path} element={<MoveState />} />
          <Route
            path={Paths.ComponentsAsChildren.path}
            element={<ComponentsAsChildren />}
          />
          <Route
            path={Paths.ComponentsAsProps.path}
            element={<ComponentsAsProps />}
          />
          <Route path={Paths.ReactMemo.path} element={<ReactMemo />} />
          <Route
            path={Paths.ReactMemoNotWorking.path}
            element={<ReactMemoNotWorking />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
