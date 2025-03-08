import Error from "@/components/Error";
import TaskList from "@/components/TaskList";
import { getTodods } from "@/lib/todos";

export const revalidate = 0;
async function HomePage() {
  const todos = await getTodods();
  if (!todos) return <Error />;
  return <TaskList todos={todos?.data} />;
}

export default HomePage;
