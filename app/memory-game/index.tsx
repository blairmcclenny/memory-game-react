"use client"

import { useEffect, useState } from "react"
import { generateBoard, Tile } from "@/app/memory-game/board"

export default function MemoryGame() {
  const [board, setBoard] = useState<Tile[] | []>([])

  useEffect(() => {
    setBoard(generateBoard(12))
  }, [])

  return (
    <div className="grid grid-cols-4 p-8 bg-gray-100 rounded-lg gap-2">
      {board.map((tile) => (
        <div className="bg-gray-800 text-white p-2 rounded-sm" key={tile.id}>
          {tile.index}
        </div>
      ))}
    </div>
  )
}
