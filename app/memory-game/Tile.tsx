import Shape from "./Shape"
import { ShapeType } from "./types"

export default function Tile({
  shape,
  isOpen,
  hasBeenFound,
  onClick = () => {},
}: {
  shape: ShapeType
  isOpen: boolean
  hasBeenFound: boolean
  onClick: { (): void }
}) {
  return (
    <div
      onClick={onClick}
      className={`${
        isOpen || hasBeenFound ? "pointer-events-none" : "cursor-pointer"
      } bg-white aspect-square rounded-md grid grid-cols-1 overflow-hidden`}
    >
      <div
        className={`${
          isOpen || hasBeenFound
            ? "opacity-100 scale-100"
            : "opacity-0 scale-80"
        } col-start-1 row-start-1 p-2 sm:p-4 transition duration-300`}
      >
        <Shape type={shape} />
      </div>
      <div
        className={`${
          isOpen || hasBeenFound
            ? "-translate-x-[calc(100%+1px)]"
            : "translate-x-0"
        } min-w-full min-h-full col-start-1 row-start-1 h-full w-full bg-blue-800 transition`}
      />
    </div>
  )
}
