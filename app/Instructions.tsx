"use client"

import { Book } from "lucide-react"
import GameInstructions from "./game-instructions"
import { createPortal } from "react-dom"
import { useState } from "react"

export default function Instructions() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="font-bold text-xs border-2 border-t-0 rounded-md rounded-tr-none rounded-tl-none bg-yellow-300 py-2 px-4 tracking-wide inline-flex gap-1 items-center cursor-pointer"
      >
        <Book size={20} /> INSTRUCTIONS
      </button>
      {showModal && createPortal(<GameInstructions />, document.body)}
    </>
  )
}
