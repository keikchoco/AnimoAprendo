export default function RadialProgress(
  value: number,
  text: String | number,
  label: String,
) {
  return (
    <div className="flex flex-col items-center text-2xl">
      <div
        className="radial-progress text-white text-2xl font-bold text-center bg-green-500 border-4 border-green-500"
        style={
          {
            "--value": value,
            "--size": "8rem",
            "--thickness": "8px",
          } as React.CSSProperties
        }
        aria-valuenow={70}
        role="progressbar"
      >
        {text}
      </div>
      <span className="font-semibold text-xl">{label}</span>
    </div>
  )
}
