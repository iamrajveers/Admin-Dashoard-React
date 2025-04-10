const UsersPage = () => {
    const stats = [
      { label: "Total Users", value: 340 },
      { label: "Active Users", value: 280 },
      { label: "Pending Approvals", value: 15 },
    ];
  
    return (

      

      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Users Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Recent User Activity</h3>
          <ul className="space-y-2">
            <li className="bg-gray-800 p-3 rounded-md text-sm">
              🟢 Alice logged in 5 mins ago
            </li>
            <li className="bg-gray-800 p-3 rounded-md text-sm">
              🟡 Bob updated profile
            </li>
            <li className="bg-gray-800 p-3 rounded-md text-sm">
              🔴 Charlie account suspended
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default UsersPage;
  