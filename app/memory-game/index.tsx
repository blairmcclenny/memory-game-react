"use client"

// import { useEffect, useState } from "react"
// import { generateBoard, Tile } from "@/app/memory-game/board"
import Door from "./Door"

export default function MemoryGame() {
  // const [board, setBoard] = useState<Tile[] | []>([])

  // player one score
  // player two score
  // current player - default to player one

  // on match increment current player score
  // if combined scores are equal to pairs end game and show winner and replay option
  // if not continue with current player

  // if no match close open doors after one second and toggle player

  // useEffect(() => {
  //   setBoard(generateBoard(12))
  // }, [])

  return (
    <div className="grid grid-cols-4 p-4 bg-yellow-600 rounded-2xl gap-4 max-w-lg">
      <Door type="circle" />
      <Door type="crescent" />
      <Door type="diamond" />

      <Door type="heart" />
      <Door type="hexagon" />
      <Door type="oval" />

      <Door type="pentagon" />
      <Door type="quadrafoil" />
      <Door type="rectangle" />

      <Door type="square" />
      <Door type="star" />
      <Door type="triangle" />
    </div>
  )
}
