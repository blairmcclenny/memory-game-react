"use client"

import { useEffect, useState } from "react"
import { generateBoard, Tile } from "./board"

export default function Home() {
  const [board, setBoard] = useState<Tile[] | []>([])

  useEffect(() => {
    setBoard(generateBoard(12))
  }, [])

  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-4 p-8 bg-gray-100 gap-2">
        {board.map((tile) => (
          <div className="bg-gray-800 text-white p-2" key={tile.id}>
            {tile.index}
          </div>
        ))}
      </div>
    </div>
  )
}
