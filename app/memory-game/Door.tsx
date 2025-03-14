import Shape, { ShapeType } from "./Shape"

export default function Door({ type }: { type: ShapeType }) {
  return (
    <div className="p-4 bg-white aspect-square">
      <Shape type={type} />
    </div>
  )
}
