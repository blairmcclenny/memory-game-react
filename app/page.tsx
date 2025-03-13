import { generateBoard } from "./board"

export default function Home() {
  const board = generateBoard()
  console.table(board)

  return <div>Hello</div>
}
