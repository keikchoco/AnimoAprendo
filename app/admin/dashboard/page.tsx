import RadialProgress from "@/components/radial-progress";

export default function AdminDashboard() {
  return (
    <div className=" flex flex-col gap-25">
      <div className="flex flex-col items-center gap-4 bg-green-50 p-8 border-2 border-green-900 rounded-2xl">
        <h1 className="font-bold text-4xl uppercase">Statistics</h1>
        <div className="flex flex-row gap-4">
            {/* Progress */}
            {RadialProgress(35, "35/100", "Stats 1")}
            {RadialProgress(100, "100/100", "Stats 2")}
            {RadialProgress(70, "70/100", "Stats 3")}
        </div>
      </div>
    </div>
  );
}
