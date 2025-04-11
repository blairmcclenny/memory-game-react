import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { shapeTypes } from "./Shape"
import userEvent from "@testing-library/user-event"
import { screen, waitFor } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"
import MemoryGame from "."

beforeEach(() => render(<MemoryGame />))
afterEach(cleanup)

describe("Winner is correctly determined", () => {
  test("Player One (Red) wins", async () => {
    for (const shape of shapeTypes) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    const headings = screen.getAllByRole("heading", { level: 3 })
    const resultsHeading = headings.find((h) => h.textContent === "RED WINS!")

    expect(resultsHeading).toBeTruthy()
  })

  test("Player Two (Blue) wins", async () => {
    await userEvent.click(screen.getAllByLabelText(shapeTypes[0])[0])
    await userEvent.click(screen.getAllByLabelText(shapeTypes[1])[0])

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

    for (const shape of shapeTypes) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    const headings = screen.getAllByRole("heading", { level: 3 })
    const resultsHeading = headings.find((h) => h.textContent === "BLUE WINS!")

    expect(resultsHeading).toBeTruthy()
  })

  test("Players tie", async () => {
    const shapesLength = shapeTypes.length
    const shapesSplitIndex = Math.floor(shapesLength / 2)

    const shapesFirstHalf = shapeTypes.slice(0, shapesSplitIndex)
    const shapesSecondHalf = shapeTypes.slice(shapesSplitIndex, shapesLength)

    for (const shape of shapesFirstHalf) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    await userEvent.click(screen.getAllByLabelText(shapesSecondHalf[0])[0])
    await userEvent.click(screen.getAllByLabelText(shapesSecondHalf[1])[0])

    await waitFor(
      () => {
        expect(
          screen
            .getAllByLabelText(shapesSecondHalf[0])[0]
            .parentElement?.parentElement?.classList.contains(
              "pointer-events-none"
            )
        ).toBe(false)
        expect(
          screen
            .getAllByLabelText(shapesSecondHalf[1])[0]
            .parentElement?.parentElement?.classList.contains(
              "pointer-events-none"
            )
        ).toBe(false)
      },
      { timeout: 2000 }
    )

    for (const shape of shapesSecondHalf) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    const headings = screen.getAllByRole("heading", { level: 3 })
    const resultsHeading = headings.find((h) => h.textContent === "IT’S A TIE!")

    expect(resultsHeading).toBeTruthy()
  })
})
