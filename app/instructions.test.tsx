import { cleanup, render, screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, test } from "vitest"
import Instructions from "./Instructions"
import userEvent from "@testing-library/user-event"

beforeEach(() => render(<Instructions />))
afterEach(cleanup)

describe("Instructions Modal", () => {
  test("Opens when button clicked", async () => {
    const openBtn = screen.getByRole("button", { name: /INSTRUCTIONS/i })

    await userEvent.click(openBtn)

    const headings = screen.getAllByRole("heading", { level: 2 })
    const instructionsHeading = headings.find(
      (h) => h.textContent === "INSTRUCTIONS"
    )

    await waitFor(() => {
      expect(instructionsHeading).toBeTruthy()
    })
  })

  test.skip("Closes when button clicked", async () => {
    const openBtn = screen.getByRole("button", { name: /INSTRUCTIONS/i })
    const closeBtn = screen.getByRole("button", { name: /CLOSE/i })

    await userEvent.click(openBtn)
    await userEvent.click(closeBtn)

    const headings = screen.getAllByRole("heading", { level: 2 })
    const instructionsHeading = headings.find(
      (h) => h.textContent === "INSTRUCTIONS"
    )

    await waitFor(() => {
      expect(instructionsHeading).toBeFalsy()
    })
  })
})
