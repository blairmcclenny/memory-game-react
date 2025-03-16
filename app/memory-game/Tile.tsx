import Shape from "./Shape"
import { ShapeType } from "./types"

export default function Tile({
  shape,
  hasBeenFound,
  onClick = () => {},
}: {
  shape: ShapeType
  hasBeenFound: boolean
  onClick: { (): void }
}) {
  return (
    <div onClick={onClick} className="p-4 bg-white aspect-square rounded-md">
      <div className={`${hasBeenFound ? "hidden" : "block"}`} />
      <Shape type={shape} />
    </div>
  )
}
