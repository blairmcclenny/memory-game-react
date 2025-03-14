"use client"

import { useEffect, useState } from "react"
import { generateBoard, Tile } from "@/app/memory-game/board"
import Door from "./Tile"

export default function MemoryGame() {
  const [board, setBoard] = useState<Tile[] | []>([])

  useEffect(() => {
    setBoard(generateBoard(12))
  }, [])

  return (
    <div className="grid grid-cols-4 p-8 bg-gray-100 rounded-lg gap-2">
      {board.map((door) => (
        <Door
          key={door.id}
          value={door.value}
          isOpen={door.isOpen}
          hasBeenFound={door.hasBeenFound}
        />
      ))}
    </div>
  )
}
