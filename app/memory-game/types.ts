import { shapeTypes } from "./Shape"

export type ShapeType = (typeof shapeTypes)[number]

export type TileData = {
  shape: ShapeType
  hasBeenFound: boolean
}
