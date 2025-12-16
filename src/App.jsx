import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ReduxPage from "./pages/redux/ReduxPage";
import ReduxSync from "./pages/redux/ReduxSync";
import  ReduxAsync  from "./pages/redux/ReduxAsync";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="redux">
          <Route index element={<ReduxPage />} />
          <Route path="sync" element={<ReduxSync />} />
          <Route path="async" element={<ReduxAsync />} />
        </Route>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
