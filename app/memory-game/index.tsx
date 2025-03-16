"use client"

import { Fragment, useEffect, useState } from "react"

import Tile from "./Tile"
import Score from "./Score"
import { TileData, generateBoard } from "./utils"

export default function MemoryGame() {
  const [board, setBoard] = useState<TileData[] | []>([])

  // player one score
  // player two score
  // current player - default to player one

  // on match increment current player score
  // if combined scores are equal to pairs end game and show winner and replay option
  // if not continue with current player

  // if no match close open doors after one second and toggle player

  useEffect(() => {
    setBoard(generateBoard())
  }, [])

  return (
    <>
      <Score />
      <div className="grid grid-cols-5 p-4 rounded-md gap-4 max-w-2xl bg-stone-200 mt-4 mx-auto">
        {board.map((tile, i, arr) => (
          <Fragment key={`tile-${i}`}>
            <Tile
              onClick={() => console.log("clicked")}
              shape={tile.shape}
              hasBeenFound={tile.hasBeenFound}
            />
            {i === Math.floor(arr.length / 2) - 1 && (
              <div className="invisible" />
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}
