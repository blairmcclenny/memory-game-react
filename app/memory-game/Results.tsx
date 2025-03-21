import { Play } from "lucide-react"
import RotatedWord from "../RotatedWord"

export type Winner = "PLAYER ONE" | "PLAYER TWO" | "TIE" | null

function Message({ winner }: { winner: Winner }) {
  switch (winner) {
    case "PLAYER ONE":
      return (
        <>
          <h3 className="text-4xl font-serif">
            <RotatedWord word={"RED"} /> <RotatedWord word={"WINS!"} />
          </h3>
          <div className="text-xl mb-8">Somebody’s been practicing!</div>
        </>
      )
    case "PLAYER TWO":
      return (
        <>
          <h3 className="text-4xl font-serif">
            <RotatedWord word={"BLUE"} /> <RotatedWord word={"WINS!"} />
          </h3>
          <div className="text-xl mb-8">Memory game MVP!</div>
        </>
      )
    case "TIE":
      return (
        <>
          <h3 className="text-4xl font-serif">
            <RotatedWord word={"IT’S"} /> <RotatedWord word={"A"} />{" "}
            <RotatedWord word={"TIE!"} />
          </h3>
          <div className="text-xl mb-8">Both players leveled up!</div>
        </>
      )
    default:
      return null
  }
}

export default function Results({
  visible = false,
  winner,
  onPlayAgainClick,
}: {
  visible: boolean
  winner: Winner
  onPlayAgainClick: () => void
}) {
  return (
    <div
      className={`${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      } bg-stone-100 relative transition duration-300 col-start-1 row-start-1 flex flex-col justify-center items-center`}
    >
      <Message winner={winner} />
      <button
        onClick={onPlayAgainClick}
        className="font-bold text-xs rounded-md border-2 bg-yellow-300 py-2 px-4 tracking-wide inline-flex gap-1 items-center cursor-pointer"
      >
        <Play size={20} />
        PLAY AGAIN
      </button>
    </div>
  )
}
