"use client"

// import { useEffect, useState } from "react"
// import { generateBoard, Tile } from "@/app/memory-game/board"
import Door from "./Door"
import Score from "./Score"

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
    <>
      <Score />
      <div className="grid grid-cols-5 p-4 rounded-md gap-4 max-w-2xl bg-stone-200 mt-4 mx-auto">
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

        <div className="invisible" />

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
    </>
  )
}
