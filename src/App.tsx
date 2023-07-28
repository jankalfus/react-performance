import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { MoveStateDown } from "./move-state-down/MoveStateDown";
import ReactMemoNotWorking from "./react-memo-not-working/ReactMemoNotWorking";

const Paths = {
  MoveStateDown: {
    path: "/move-state-down",
    name: "Move state down",
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
    <>
      <BrowserRouter>
        <nav>
          <ul>
            {Object.values(Paths).map((pathInfo) => (
              <li key={pathInfo.path}>
                <Link to={pathInfo.path}>{pathInfo.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1>
          <PageTitle />
        </h1>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path={Paths.MoveStateDown.path} element={<MoveStateDown />} />
          <Route
            path={Paths.ReactMemoNotWorking.path}
            element={<ReactMemoNotWorking />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
