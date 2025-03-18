"use client"

import { Fragment, useEffect, useState } from "react"
import Tile from "./Tile"
import { generateTiles } from "./utils"
import { TileData } from "./types"
import Score from "./Score"
import { Play } from "lucide-react"

export default function MemoryGame() {
  const [tiles, setTiles] = useState<TileData[] | []>([])
  const [isPaused, setIsPaused] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const reset = () => {
    setTiles(generateTiles())
    setGameOver(false)
  }

  const handleTileClick = (tileIdx: number) => {
    setTiles((prevTiles) =>
      prevTiles.map((tile, i) =>
        i === tileIdx ? { ...tile, isOpen: true } : tile
      )
    )

    const prevTile = tiles.find((tile) => tile.isOpen) as TileData

    if (!prevTile) return

    if (prevTile.shape === tiles[tileIdx].shape) {
      setTiles((prevTiles) =>
        prevTiles.map((tile) =>
          tile.shape === prevTile.shape
            ? { ...tile, isOpen: false, hasBeenFound: true }
            : { ...tile, isOpen: false }
        )
      )
    } else {
      setIsPaused(true)
      setTimeout(() => {
        setTiles((prevTiles) =>
          prevTiles.map((tile) => ({ ...tile, isOpen: false }))
        )
        setIsPaused(false)
      }, 1000)
    }
  }

  const handlePlayAgainClick = () => {
    reset()
  }

  useEffect(() => {
    reset()
  }, [])

  useEffect(() => {
    if (tiles.length && tiles.every((tile) => tile.hasBeenFound)) {
      setGameOver(true)
    }
  }, [tiles])

  return (
    <div className="max-w-2xl mx-auto">
      <Score />
      <div
        className={`${
          isPaused && "pointer-events-none"
        } grid grid-cols-1 p-2 sm:p-4 rounded-md bg-stone-200 aspect-square overflow-hidden`}
      >
        <div
          className={`${
            isPaused && "pointer-events-none"
          } col-start-1 row-start-1 grid grid-cols-5 gap-2 sm:gap-4`}
        >
          {tiles.map((tile, i, arr) => (
            <Fragment key={`tile-${i}`}>
              <Tile
                onClick={() => handleTileClick(i)}
                shape={tile.shape}
                isOpen={tile.isOpen}
                hasBeenFound={tile.hasBeenFound}
              />
              {i === Math.floor(arr.length / 2) - 1 && (
                <div className="invisible" />
              )}
            </Fragment>
          ))}
        </div>
        <div
          className={`${
            gameOver
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } bg-stone-200 relative transition duration-300 col-start-1 row-start-1 font-bold flex flex-col justify-center items-center`}
        >
          <h3 className="text-2xl">You Did It!</h3>
          <div className="text-xl mb-8">Memory Mastery Unlocked!</div>
          <button
            onClick={handlePlayAgainClick}
            className="font-bold text-xs rounded-md bg-yellow-300 py-2 px-4 tracking-wide inline-flex gap-1 items-center cursor-pointer"
          >
            <Play size={20} />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}
