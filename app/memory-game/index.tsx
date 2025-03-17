"use client"

import { Fragment, useEffect, useState } from "react"
import Tile from "./Tile"
import { generateTiles } from "./utils"
import { TileData } from "./types"

export default function MemoryGame() {
  const [tiles, setTiles] = useState<TileData[] | []>([])
  const [isPaused, setIsPaused] = useState(false)

  const reset = () => {
    setTiles(generateTiles())
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
      // increment current player score
    } else {
      setIsPaused(true)
      setTimeout(() => {
        setTiles((prevTiles) =>
          prevTiles.map((tile) => ({ ...tile, isOpen: false }))
        )
        setIsPaused(false)
        // toggle current player
      }, 1000)
    }
  }

  useEffect(() => {
    reset()
  }, [])

  useEffect(() => {
    if (tiles.some((tile) => !tile.hasBeenFound)) {
      console.log("still playing")
    } else {
      console.log("YOU WIN!!!")
      reset()
    }
  }, [tiles])

  return (
    <>
      <div
        className={`${
          isPaused && "pointer-events-none"
        } grid grid-cols-5 p-4 rounded-md gap-4 max-w-2xl bg-stone-200 mt-4 mx-auto aspect-square`}
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
    </>
  )
}
