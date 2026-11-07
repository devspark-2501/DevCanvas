import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Project Dashboard</h1>
          <p className="text-sm text-slate-400">Monitor live data and core operations.</p>
        </div>
        <Button variant="primary">+ Create Task</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Active Modules" description="Currently enabled features">
          <p className="text-3xl font-bold text-indigo-400">4 / 5</p>
        </Card>
        <Card title="System Status" description="API and backend uptime">
          <p className="text-3xl font-bold text-emerald-400">Operational</p>
        </Card>
        <Card title="Pending Queue" description="Items requiring attention">
          <p className="text-3xl font-bold text-amber-400">2 Items</p>
        </Card>
      </div>
    </div>
  );
}