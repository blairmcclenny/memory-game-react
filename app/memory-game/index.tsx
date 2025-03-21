"use client"

import { Fragment, useEffect, useState } from "react"
import Tile from "./Tile"
import { generateTiles } from "./utils"
import { TileData } from "./types"
import Score from "./Score"
import Results, { Winner } from "./Results"

export default function MemoryGame() {
  const [tiles, setTiles] = useState<TileData[] | []>([])
  const [isPaused, setIsPaused] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState([0, 0])
  const [activePlayer, setActivePlayer] = useState(0)
  const [winner, setWinner] = useState<Winner>(null)

  const reset = () => {
    setTiles(generateTiles())
    setGameOver(false)
    setScore([0, 0])
    setActivePlayer(0)
    setWinner(null)
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
      setScore((prevScore) => {
        const updatedScore = [...prevScore]
        updatedScore[activePlayer] += 1
        return updatedScore
      })
    } else {
      setIsPaused(true)
      setTimeout(() => {
        setTiles((prevTiles) =>
          prevTiles.map((tile) => ({ ...tile, isOpen: false }))
        )
        setActivePlayer((prevActivePlayer) => (prevActivePlayer === 0 ? 1 : 0))
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
      if (score[0] > score[1]) {
        setWinner("PLAYER ONE")
      } else if (score[0] < score[1]) {
        setWinner("PLAYER TWO")
      } else {
        setWinner("TIE")
      }
    }
  }, [tiles, score])

  return (
    <div className="max-w-2xl mx-auto">
      <Score playerOneScore={score[0]} playerTwoScore={score[1]} />
      <div
        className={`${
          isPaused && "pointer-events-none"
        } grid grid-cols-1 p-2 sm:p-4 rounded-md border-2 aspect-square overflow-hidden`}
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
        <Results
          winner={winner}
          visible={gameOver}
          onPlayAgainClick={handlePlayAgainClick}
        />
      </div>
    </div>
  )
}
