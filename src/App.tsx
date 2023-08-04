import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MoveStateDown } from "./move-state-down/MoveStateDown";
import { ReactMemoNotWorking } from "./react-memo-not-working/ReactMemoNotWorking";
import { ComponentsAsChildren } from "./components-as-children/ComponentsAsChildren";
import { ComponentsAsProps } from "./components-as-props/ComponentsAsProps";
import { ReactMemo } from "./react-memo/ReactMemo";

const Paths = {
  MoveStateDown: {
    path: "/move-state-down",
    name: "Move state down",
  },
  ComponentsAsChildren: {
    path: "/components-as-children",
    name: "Components as children",
  },
  ComponentsAsProps: {
    path: "/components-as-props",
    name: "Components as props",
  },
  ReactMemoNotWorking: {
    path: "/react-memo-not-working",
    name: "React.memo not working",
  },
  ReactMemo: {
    path: "/react-memo",
    name: "React.memo",
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
    <>
      <BrowserRouter>
        <nav>
          <ol>
            {Object.values(Paths).map((pathInfo) => (
              <li key={pathInfo.path}>
                <Link to={pathInfo.path}>{pathInfo.name}</Link>
              </li>
            ))}
          </ol>
        </nav>
        <h1>
          <PageTitle />
        </h1>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path={Paths.MoveStateDown.path} element={<MoveStateDown />} />
          <Route
            path={Paths.ComponentsAsChildren.path}
            element={<ComponentsAsChildren />}
          />
          <Route
            path={Paths.ComponentsAsProps.path}
            element={<ComponentsAsProps />}
          />
          <Route
            path={Paths.ReactMemoNotWorking.path}
            element={<ReactMemoNotWorking />}
          />
          <Route path={Paths.ReactMemo.path} element={<ReactMemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
