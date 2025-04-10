import { afterEach, beforeEach, describe, expect, test } from "vitest"
import { shapeTypes } from "./Shape"
import userEvent from "@testing-library/user-event"
import { screen } from "@testing-library/dom"
import { cleanup, render } from "@testing-library/react"
import MemoryGame from "."

beforeEach(() => render(<MemoryGame />))
afterEach(cleanup)

describe("Winner is correctly determined", () => {
  test.skip("Player One (Red) wins", async () => {
    for (const shape of shapeTypes) {
      await userEvent.click(screen.getAllByLabelText(shape)[0])
      await userEvent.click(screen.getAllByLabelText(shape)[1])
    }

    expect(screen.getByRole("h3", { name: /RED WINS!/i }))
  })
})
