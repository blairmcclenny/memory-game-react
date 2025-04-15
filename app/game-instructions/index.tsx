import { X } from "lucide-react"
import RotatedWord from "../RotatedWord"
import { ReactNode } from "react"

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-serif text-2xl sm:text-4xl mt-8 mb-3">{children}</h3>
  )
}

export default function GameInstructions({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-label="Instructions"
      aria-modal="true"
      className="absolute inset-0 min-h-screen min-w-screen bg-stone-100 text-center"
    >
      <button
        onClick={onClose}
        className="font-bold font-sans text-xs border-2 border-t-0 rounded-md rounded-tr-none rounded-tl-none bg-yellow-300 py-2 px-4 tracking-wide inline-flex gap-1 items-center cursor-pointer"
      >
        <X size={20} /> CLOSE
      </button>
      <div className="p-4 pt-0 max-w-2xl mx-auto font-mono">
        <h2 className="font-serif text-4xl sm:text-6xl mt-4">
          <RotatedWord word={"INSTRUCTIONS"} />
        </h2>
        <div className="text-2xl mb-8">A Game for 2 Players</div>
        <H3>
          <RotatedWord word={"OBJECTIVE"} />
        </H3>
        <p>Find more matches than the other player.</p>
        <H3>
          <RotatedWord word={"SET-UP"} />
        </H3>
        <p>
          Begin with all the doors on the board closed. Deicide which player
          will use the red score tracker and which player will use the blue.
        </p>
        <H3>
          <RotatedWord word={"BASIC"} /> <RotatedWord word={"PLAY"} />
        </H3>
        <ul className="list-disc list-inside space-y-3">
          <li>
            The younger player goes first. Players take turns opening two doors,
            one at a time.
          </li>
          <li>
            If the pictures beind the doors match, the two doors remain open and
            the player scores a point on his or her score tracker. The player
            continures playing until failing to make a match.
          </li>
          <li>
            When the picures behind two selected doors do not match, the doors
            are shut and it becomes the next player&apos;s turn.
          </li>
        </ul>
        <H3>
          <RotatedWord word={"WINNING"} /> <RotatedWord word={"THE"} />{" "}
          <RotatedWord word={"GAME"} />
        </H3>
        <p>
          The player with the most points after all of the matches have been
          made is the winner! If the players finish with the same number of
          points, the game is a draw.
        </p>
      </div>
    </div>
  )
}
