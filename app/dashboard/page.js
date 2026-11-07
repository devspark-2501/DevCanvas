import Card from "@/app/components/ui/Card";
import Button from "@/app/components/ui/Button";
import { IMAGES } from "@/app/components/assets";

export default function DashboardPage() {
  return (
    <div 
      className="relative space-y-8 p-6 md:p-10 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0.98)), url('${IMAGES.dashboardBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-between items-center relative z-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Project Dashboard</h1>
          <p className="text-sm text-slate-400">Monitor live data and core operations.</p>
        </div>
        <Button variant="primary">+ Create Task</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <Card title="Active Modules" description="Currently enabled features" className="bg-slate-900/80 backdrop-blur-md">
          <p className="text-3xl font-bold text-indigo-400">4 / 5</p>
        </Card>
        <Card title="System Status" description="API and backend uptime" className="bg-slate-900/80 backdrop-blur-md">
          <p className="text-3xl font-bold text-emerald-400">Operational</p>
        </Card>
        <Card title="Pending Queue" description="Items requiring attention" className="bg-slate-900/80 backdrop-blur-md">
          <p className="text-3xl font-bold text-amber-400">2 Items</p>
        </Card>
      </div>
    </div>
  );
}