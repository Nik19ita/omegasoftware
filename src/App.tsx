import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MenuAccounting from "./pages/Menu/MenuAccounting/MenuAccounting";
import MenuMain from "./pages/Menu/MenuMain/MenuMain";
import MenuSettings from "./pages/Menu/MenuSettings/MenuSettings";
import MenuTasks from "./pages/Menu/MenuTasks/MenuTasks";
import ScanPage from "./pages/ScanPage/ScanPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="menu/main" replace={true} />} />

        <Route path="menu">
          <Route path="main" element={<MenuMain />} />
          <Route path="settings" element={<MenuSettings />} />
          <Route path="tasks" element={<MenuTasks />} />
          <Route path="accounting" element={<MenuAccounting />} />
        </Route>

        <Route path="scan" element={<ScanPage />} />

        <Route path="scan" element={<ScanPage />} />
      </Route>
    </Routes>
  );
};

export default App;
