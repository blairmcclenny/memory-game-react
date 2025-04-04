import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { shapeTypes } from "./Shape"
import Shape from "@/app/memory-game/Shape"

describe("Shape", () => {
  for (const shape of shapeTypes) {
    test(`${shape} renders with correct shape`, async () => {
      render(<Shape type={shape} />)
      expect(screen.getByLabelText(shape).ariaLabel).toBe(shape)
    })
  }
})
