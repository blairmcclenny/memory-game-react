import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"
import MemoryGame from "./memory-game"
import { shapeTypes } from "./memory-game/Shape"

test("Two matching Tiles increase score", async () => {
  render(<MemoryGame />)

  const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]

  const tileOne = screen.getAllByLabelText(shape)[0]
  const tileTwo = screen.getAllByLabelText(shape)[1]
  const playerOneScore = screen.getAllByLabelText(/Player score is/i)[0]

  await userEvent.click(tileOne)
  await userEvent.click(tileTwo)

  expect(playerOneScore.ariaLabel).toContain("1")
})
