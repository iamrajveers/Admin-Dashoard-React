import "./index.css";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/product/ProductDetailsPage";
import OverviewPage from "./pages/Overview/OverviewPage";
import ProductPage from "./pages/product/ProductPage";
// import Activity from "./pages/Overview/Activity";
import UsersPage from "./pages/user/UsersPage";
import UserListPage from "./pages/user/UserListPage";
import UserDetailsPage from "./pages/user/UserDetailsPage";


function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <Sidebar />

      {/* Background Blur Layers */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Routes */}
      <div className="flex-1 relative z-10 p-4 overflow-auto w-full">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductPage />} />
           

            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/list" element={<UserListPage />} />
            <Route path="/users/details" element={<UserDetailsPage />} />

          {/* <Route path="/products/:id" element={<ProductDetailsPage />} /> */}
            
          {/* <Route path="/activity" element={<Activity />} /> */}


        </Routes>
      </div>
    </div>
  );
}

export default App;
