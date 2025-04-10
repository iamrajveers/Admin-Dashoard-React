const UserListPage = () => {
    const users = [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">User List</h2>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-4 bg-gray-700 rounded-lg">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-300">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default UserListPage;
  