import UserControl from "@/components/UserControl";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center mt-52 flex-col gap-8">
      <h1>Welcome to dashboard</h1>
      <UserControl />
    </div>
  );
}
