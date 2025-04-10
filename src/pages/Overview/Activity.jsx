import { motion } from "framer-motion";
import Header from "../../components/common/Header";

const activityData = [
  { id: 1, user: "John Doe", action: "added a new product", time: "2 hours ago" },
  { id: 2, user: "Jane Smith", action: "updated pricing", time: "3 hours ago" },
  { id: 3, user: "Alice Johnson", action: "deleted an order", time: "5 hours ago" },
  { id: 4, user: "Bob Brown", action: "added a review", time: "1 day ago" },
];

const Activity = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Activity" />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activityData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow"
            >
              <p className="text-gray-100">
                <span className="font-semibold text-indigo-400">{item.user}</span>{" "}
                {item.action}
              </p>
              <p className="text-sm text-gray-400">{item.time}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Activity;
