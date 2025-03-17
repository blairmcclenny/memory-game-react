import { shapeTypes } from "./Shape"

export type ShapeType = (typeof shapeTypes)[number]

export type TileData = {
  shape: ShapeType
  isOpen: boolean
  hasBeenFound: boolean
}
