import { Tile as Door } from "./board"

export default function Tile({
  value,
  isOpen,
  hasBeenFound,
}: {
  value: number
  isOpen: boolean
  hasBeenFound: boolean
}) {
  return <div className="bg-gray-800 text-white p-2 rounded-sm">{value}</div>
}
