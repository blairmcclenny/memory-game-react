function getRandomTile(max: number) {
  return Math.floor(Math.random() * max)
}

export function generateBoard() {
  const rows = 5
  const columns = 4
  const board: number[][] = []
  const uniqueTiles = Math.floor((rows * columns) / 2)
  const usedTilesMap = new Map()

  for (let i = 0; i < rows; i++) {
    board.push([])
    for (let j = 0; j < columns; j++) {
      let tile = getRandomTile(uniqueTiles)

      while (usedTilesMap.get(tile) >= 2) {
        tile = getRandomTile(uniqueTiles)
      }

      usedTilesMap.set(
        tile,
        usedTilesMap.get(tile) ? usedTilesMap.get(tile) + 1 : 1
      )

      board[i].push(tile)
    }
  }

  return board
}
