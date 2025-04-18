import { shapeTypes } from "./Shape"
import { TileData } from "./types"

function getRandomShape(max: number) {
  return shapeTypes[Math.floor(Math.random() * max)]
}

export function generateTiles(): TileData[] {
  const board: TileData[] = []
  const shapes = shapeTypes.length
  const tiles = shapes * 2
  const useShapesMap = new Map()

  for (let i = 0; i < tiles; i++) {
    let shape = getRandomShape(shapes)

    while (useShapesMap.get(shape) >= 2) {
      shape = getRandomShape(shapes)
    }

    useShapesMap.set(
      shape,
      useShapesMap.get(shape) ? useShapesMap.get(shape) + 1 : 1
    )

    board.push({
      shape,
      isOpen: false,
      hasBeenFound: false,
    })
  }

  return board
}
