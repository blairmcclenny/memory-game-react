export type Tile = {
  id: string
  index: number
  active: boolean
  found: boolean
}

function getRandomTile(max: number) {
  return Math.floor(Math.random() * max)
}

export function generateBoard(pairs: number): Tile[] {
  if (!Number.isInteger(pairs) || pairs % 2 !== 0) {
    throw new Error(`Invalid input: ${pairs}. Must be an even integer.`)
  }

  const board: Tile[] = []
  const tiles = pairs * 2
  const usedTilesMap = new Map()

  for (let i = 0; i < tiles; i++) {
    let tile = getRandomTile(pairs)

    while (usedTilesMap.get(tile) >= 2) {
      tile = getRandomTile(pairs)
    }

    usedTilesMap.set(
      tile,
      usedTilesMap.get(tile) ? usedTilesMap.get(tile) + 1 : 1
    )

    board.push({
      id: `tile-${i}`,
      index: tile,
      active: false,
      found: false,
    })
  }

  return board
}
