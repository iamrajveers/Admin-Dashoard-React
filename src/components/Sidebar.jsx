
import {
  BarChart,
  DollarSign,
  ShoppingBag,
  User,
  Menu,
  ShoppingCart,
  Settings,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          <Link to="/">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <BarChart size={20} style={{ color: "#6366f1", minWidth: "20px" }} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span className="ml-4 whitespace-nowrap" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.2, delay: 0.3 }}>
                    Overview
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>

          <Link to="/products">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <ShoppingBag size={20} style={{ color: "#8B5CF6", minWidth: "20px" }} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span className="ml-4 whitespace-nowrap">Products</motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>

          <div className="mb-2">
            <motion.div
              className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={toggleUserDropdown}
            >
              <User size={20} style={{ color: "#EC4899", minWidth: "20px" }} />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span className="ml-4 whitespace-nowrap flex items-center gap-2">
                    Users <ChevronDown size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {userDropdownOpen && isSidebarOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-8 flex flex-col space-y-2 text-sm text-gray-300"
                >
                  <NavLink to="/users/list" className={({ isActive }) => `block p-2 mt-2 mb rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}>
                    User List
                  </NavLink>
                  <NavLink to="/users/details" className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}>
                    User Details
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/sales">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <DollarSign size={20} style={{ color: "#10B981", minWidth: "20px" }} />
              <AnimatePresence>{isSidebarOpen && <motion.span className="ml-4 whitespace-nowrap">Sales</motion.span>}</AnimatePresence>
            </motion.div>
          </Link>

          <Link to="/orders">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <ShoppingCart size={20} style={{ color: "#F59E0B", minWidth: "20px" }} />
              <AnimatePresence>{isSidebarOpen && <motion.span className="ml-4 whitespace-nowrap">Orders</motion.span>}</AnimatePresence>
            </motion.div>
          </Link>

          <Link to="/analytics">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <TrendingUp size={20} style={{ color: "#3B82F6", minWidth: "20px" }} />
              <AnimatePresence>{isSidebarOpen && <motion.span className="ml-4 whitespace-nowrap">Analytics</motion.span>}</AnimatePresence>
            </motion.div>
          </Link>

          <Link to="/setting">
            <motion.div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
              <Settings size={20} style={{ color: "#6EE7B7", minWidth: "20px" }} />
              <AnimatePresence>{isSidebarOpen && <motion.span className="ml-4 whitespace-nowrap">Setting</motion.span>}</AnimatePresence>
            </motion.div>
          </Link>
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;


