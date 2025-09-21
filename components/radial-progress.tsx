type RadialProps = {
  value: number
  text: string | number
  label: string
  size?: string
  thickness?: string
  color?: string
}

export default function RadialProgress({
  value,
  text,
  label,
  size = "8rem",
  thickness = "8px",
  color = "blue",
}: RadialProps) {
  const colorClass =
    color === "green"
      ? "bg-green-500 border-green-500"
      : color === "blue"
      ? "bg-blue-500 border-blue-500"
      : "bg-neutral-500 border-neutral-500"

  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div
        className={`radial-progress text-white text-2xl font-bold ${colorClass}`}
        style={
          {
            "--value": value,
            "--size": size,
            "--thickness": thickness,
          } as React.CSSProperties
        }
        aria-valuenow={value}
        role="progressbar"
      >
        {text}
      </div>
      <span className="font-semibold text-lg">{label}</span>
    </div>
  )
}
