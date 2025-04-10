import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, test } from "vitest"
import MemoryGame from "."
import { shapeTypes } from "./Shape"
import userEvent from "@testing-library/user-event"

afterEach(cleanup)

describe("Score", () => {
  test("Two matching Tiles increase score", async () => {
    render(<MemoryGame />)

    const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]

    const tileOne = screen.getAllByLabelText(shape)[0]
    const tileTwo = screen.getAllByLabelText(shape)[1]
    const playerOneScore = screen.getAllByLabelText(/Player score is/i)[0]

    await userEvent.click(tileOne)
    await userEvent.click(tileTwo)

    expect(playerOneScore.ariaLabel).toBe("Player score is 1")
  })

  test("Points awarded to correct Player when Tiles matched", async () => {
    render(<MemoryGame />)

    const playerTwoScore = screen.getAllByLabelText(/Player score is/i)[1]

    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[0])
    await userEvent.click(screen.getAllByLabelText(shapeTypes[1])[1])

    await new Promise((resolve) => setTimeout(resolve, 1250))

    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[0])
    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[1])

    expect(playerTwoScore.ariaLabel).toBe("Player score is 1")
  })

  test("score resets correctly when a new game starts", async () => {
    render(<MemoryGame />)

    const playerOneScore = screen.getAllByLabelText(/Player score is/i)[0]
    const playerTwoScore = screen.getAllByLabelText(/Player score is/i)[1]

    for (const shape of shapeTypes) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    await userEvent.click(screen.getByRole("button", { name: /Play Again/i }))

    expect(playerOneScore.ariaLabel).toBe("Player score is 0")
    expect(playerTwoScore.ariaLabel).toBe("Player score is 0")
  })
})
