function Player({
  score = 0,
  color,
}: {
  score: number
  color: "fill-red-500" | "fill-blue-800"
}) {
  const position = (100 / 13) * score

  return (
    <div className="overflow-hidden">
      <div className="flex gap-2 justify-around text-sm p-2">
        {[...Array.from({ length: 13 }, (_, i) => i)].map((num) => (
          <span key={num} className="w-[2ch] text-center">
            {num}
          </span>
        ))}
      </div>
      <div className="rounded-full border-2 p-0.5 relative w-full">
        <div
          className="transition"
          style={{
            transform: `translateX(calc(${position}%))`,
          }}
        >
          <div className="h-6 w-6">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle className={color} cx="50" cy="50" r="50" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Score() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center font-mono mb-6">
      <Player score={8} color="fill-red-500" />
      <Player score={12} color="fill-blue-800" />
    </div>
  )
}
