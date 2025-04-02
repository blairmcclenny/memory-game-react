import { ShapeType } from "./types"

export const shapeTypes = [
  "circle",
  "crescent",
  "heart",
  "hexagon",
  "diamond",
  "triangle",
  "oval",
  "square",
  "pentagon",
  "star",
  "rectangle",
  "quadrafoil",
] as const

export default function Shape({ type }: { type: ShapeType }) {
  switch (type) {
    case "circle":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <circle
              cx="240"
              cy="240"
              r="240"
              className="fill-none stroke-orange-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle cx="240" cy="240" r="240" className="fill-orange-400" />
          </g>
        </svg>
      )
    case "crescent":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M240 0c-43.7 0-84.7 11.7-120 32.1a240 240 0 0 1 0 415.8A240 240 0 1 0 240 0Z"
              className="fill-none stroke-sky-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M240 0c-43.7 0-84.7 11.7-120 32.1a240 240 0 0 1 0 415.8A240 240 0 1 0 240 0Z"
              className="fill-sky-400"
            />
          </g>
        </svg>
      )
    case "heart":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 438.82">
          <g className="scale-90 origin-center">
            <path
              d="M438.82 41.18c-54.9-54.9-143.92-54.9-198.82 0-54.9-54.9-143.92-54.9-198.82 0-54.9 54.9-54.9 143.92 0 198.82L240 438.82 438.82 240c54.9-54.9 54.9-143.92 0-198.82Z"
              className="fill-none stroke-red-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M438.82 41.18c-54.9-54.9-143.92-54.9-198.82 0-54.9-54.9-143.92-54.9-198.82 0-54.9 54.9-54.9 143.92 0 198.82L240 438.82 438.82 240c54.9-54.9 54.9-143.92 0-198.82Z"
              className="fill-red-400"
            />
          </g>
        </svg>
      )
    case "hexagon":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M360 32.2H120L0 240l120 207.9h240L480 240 360 32.2z"
              className="fill-none stroke-amber-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M360 32.2H120L0 240l120 207.9h240L480 240 360 32.2z"
              className="fill-amber-400"
            />
          </g>
        </svg>
      )
    case "diamond":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M0 240 240 0l240 240-240 240z"
              className="fill-none stroke-lime-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M0 240 240 0l240 240-240 240z" className="fill-lime-400" />
          </g>
        </svg>
      )
    case "triangle":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M240 60 32.2 420h415.7L240 60z"
              className="fill-none stroke-green-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M240 60 32.2 420h415.7L240 60z"
              className="fill-green-400"
            />
          </g>
        </svg>
      )
    case "oval":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <ellipse
              cx="240"
              cy="240"
              rx="240"
              ry="120"
              className="fill-none stroke-emerald-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <ellipse
              cx="240"
              cy="240"
              rx="240"
              ry="120"
              className="fill-emerald-400"
            />
          </g>
        </svg>
      )
    case "square":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M70.3 70.3h339.4v339.4H70.3z"
              className="fill-none stroke-teal-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M70.3 70.3h339.4v339.4H70.3z" className="fill-teal-400" />
          </g>
        </svg>
      )
    case "pentagon":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M240 11.8 0 186.1l91.7 282.2h296.6L480 186.1 240 11.8z"
              className="fill-none stroke-cyan-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M240 11.8 0 186.1l91.7 282.2h296.6L480 186.1 240 11.8z"
              className="fill-cyan-400"
            />
          </g>
        </svg>
      )
    case "star":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M480 240A240 240 0 0 1 240 0 240 240 0 0 1 0 240a240 240 0 0 1 240 240 240 240 0 0 1 240-240Z"
              className="fill-none stroke-yellow-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M480 240A240 240 0 0 1 240 0 240 240 0 0 1 0 240a240 240 0 0 1 240 240 240 240 0 0 1 240-240Z"
              className="fill-yellow-400"
            />
          </g>
        </svg>
      )
    case "rectangle":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M80 0h320v480H80z"
              className="fill-none stroke-pink-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path d="M80 0h320v480H80z" className="fill-pink-400" />
          </g>
        </svg>
      )
    case "quadrafoil":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="scale-90 origin-center">
            <path
              d="M450.9 169.7a99.4 99.4 0 0 0-140.6 0 99.4 99.4 0 1 0-140.6 0 99.4 99.4 0 1 0 0 140.6 99.4 99.4 0 1 0 140.6 0 99.4 99.4 0 0 0 140.6-140.6ZM169.7 310.3l140.6-140.6"
              className="fill-none stroke-purple-700 stroke-[32]"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M450.9 169.7a99.4 99.4 0 0 0-140.6 0 99.4 99.4 0 1 0-140.6 0 99.4 99.4 0 1 0 0 140.6 99.4 99.4 0 1 0 140.6 0 99.4 99.4 0 0 0 140.6-140.6ZM169.7 310.3l140.6-140.6"
              className="fill-purple-400"
            />
          </g>
        </svg>
      )
    default:
      return null
  }
}
