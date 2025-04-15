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

    const modal = screen.getByRole("dialog", { name: /INSTRUCTIONS/i })
    expect(modal).toBeInTheDocument()
  })

  test("Closes when button clicked", async () => {
    const openBtn = screen.getByRole("button", { name: /INSTRUCTIONS/i })

    await userEvent.click(openBtn)

    const closeBtn = screen.getByRole("button", { name: /CLOSE/i })

    await userEvent.click(closeBtn)

    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: /INSTRUCTIONS/i })).toBeNull()
    })
  })
})
