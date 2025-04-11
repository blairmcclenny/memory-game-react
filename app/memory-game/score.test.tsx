import { cleanup, render, screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import MemoryGame from "."
import { shapeTypes } from "./Shape"
import userEvent from "@testing-library/user-event"

beforeEach(() => {
  render(<MemoryGame />)
})
afterEach(cleanup)

describe("Score", () => {
  test("Two matching Tiles increase score", async () => {
    const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)]

    const tileOne = screen.getAllByLabelText(shape)[0]
    const tileTwo = screen.getAllByLabelText(shape)[1]

    await userEvent.click(tileOne)
    await userEvent.click(tileTwo)

    const playerOneScore = screen.getAllByLabelText(/Player score is/i)[0]

    expect(playerOneScore.ariaLabel).toBe("Player score is 1")
  })

  test("Points awarded to correct Player when Tiles matched", async () => {
    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[0])
    await userEvent.click(screen.getAllByLabelText(shapeTypes[1])[1])

    await waitFor(
      () => {
        expect(
          screen
            .getAllByLabelText(shapeTypes[0])[0]
            .parentElement?.parentElement?.classList.contains(
              "pointer-events-none"
            )
        ).toBe(false)
        expect(
          screen
            .getAllByLabelText(shapeTypes[1])[0]
            .parentElement?.parentElement?.classList.contains(
              "pointer-events-none"
            )
        ).toBe(false)
      },
      { timeout: 2000 }
    )

    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[0])
    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[1])

    const playerTwoScore = screen.getAllByLabelText(/Player score is/i)[1]

    expect(playerTwoScore.ariaLabel).toBe("Player score is 1")
  })

  test("Resets correctly when a new game starts", async () => {
    for (const shape of shapeTypes) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    await userEvent.click(screen.getByRole("button", { name: /Play Again/i }))

    const playerOneScore = screen.getAllByLabelText(/Player score is/i)[0]
    const playerTwoScore = screen.getAllByLabelText(/Player score is/i)[1]

    expect(playerOneScore.ariaLabel).toBe("Player score is 0")
    expect(playerTwoScore.ariaLabel).toBe("Player score is 0")
  })
})
