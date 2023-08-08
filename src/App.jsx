import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
const Home = lazy(() => import("./pages/Home"));
const Tareas = lazy(() => import("./pages/Tareas"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"Cargando. . ."}>
                <Home />{" "}
              </Suspense>
            }
          />
          <Route
            path="/task"
            element={
              <Suspense fallback={"Cargando. . ."}>
                {" "}
                <Tareas />
              </Suspense>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <Suspense fallback={"Cargando. . ."}>
                {" "}
                <SobreNosotros />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
