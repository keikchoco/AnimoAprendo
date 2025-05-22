export default function AdminDashboard() {
  return (
    <div className=" flex flex-col gap-25">
      <div className="flex flex-col items-center gap-4 bg-green-50 p-8 border-2 border-green-900 rounded-2xl">
        <h1 className="font-bold text-4xl uppercase">Statistics</h1>
        <div className="flex flex-row gap-4">
            {/* Progress */}
          <div className="flex flex-col items-center text-2xl">
            <div
              className="radial-progress text-green-700 text-2xl font-bold text-center bg-green-200 border-4 border-green-200"
              style={
                {
                  "--value": "35",
                  "--size": "8rem",
                  "--thickness": "8px",
                } as React.CSSProperties
              }
              aria-valuenow={70}
              role="progressbar"
            >
              35/100
            </div>
            Stats 1
          </div>

          <div className="flex flex-col items-center text-2xl">
            <div
              className="radial-progress text-green-700 text-2xl font-bold text-center bg-green-200 border-4 border-green-200"
              style={
                {
                  "--value": "100",
                  "--size": "8rem",
                  "--thickness": "8px",
                } as React.CSSProperties
              }
              aria-valuenow={70}
              role="progressbar"
            >
              100/100
            </div>
            Stats 2
          </div>

          <div className="flex flex-col items-center text-2xl">
            <div
              className="radial-progress text-green-700 text-2xl font-bold text-center bg-green-200 border-4 border-green-200"
              style={
                {
                  "--value": "70",
                  "--size": "8rem",
                  "--thickness": "8px",
                } as React.CSSProperties
              }
              aria-valuenow={70}
              role="progressbar"
            >
              70/100
            </div>
            Stats 3
          </div>
        </div>
      </div>
    </div>
  );
}
