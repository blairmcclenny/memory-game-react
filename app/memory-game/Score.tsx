function Player({ position }: { position: number }) {
  return (
    <div className={`${position === 1 ? "text-red-500" : "text-blue-500"}`}>
      PLAYER {position === 1 ? "1" : "2"}{" "}
      <span className="font-mono text-white bg-stone-700 p-2 rounded-md min-w-[4ch] inline-block text-center">
        0
      </span>
    </div>
  )
}

export default function Score() {
  return (
    <div className="font-serif flex justify-center gap-8 text-2xl">
      <Player position={1} />
      <Player position={2} />
    </div>
  )
}
