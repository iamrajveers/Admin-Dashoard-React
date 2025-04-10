

import { Zap,Users,ShoppingBag,BarChart } from "lucide-react";
import { motion  } from "framer-motion";
import Header from "../../components/common/Header";



const UserDetails = () => {
    const user = {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Admin",
      joined: "2023-06-15",
    };
  
    return (

    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Product Details - ID: ${id}`} />
  

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <div className="bg-gray-700 p-6 rounded space-y-2">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
        </div>
      </div>
      </div>
    );
  };
  
  export default UserDetails;
  