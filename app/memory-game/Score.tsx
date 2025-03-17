function Player({ position }: { position: number }) {
  return (
    <div
      className={`flex gap-3 items-center ${
        position === 1 ? "text-red-500" : "text-blue-500"
      }`}
    >
      <span className="text-3xl">PLAYER {position === 1 ? "1" : "2"}</span>
      <span className="font-mono text-white bg-stone-700 p-2 rounded-md min-w-[4ch] inline-block text-center text-2xl">
        0
      </span>
    </div>
  )
}

export default function Score() {
  return (
    <div className="font-serif flex justify-center gap-12 tracking-wider">
      <Player position={1} />
      <Player position={2} />
    </div>
  )
}
