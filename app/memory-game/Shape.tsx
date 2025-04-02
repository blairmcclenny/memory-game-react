import Image from "next/image"

import { ShapeType } from "./types"

import diamond from "@/app/shapes/diamond.png"
import star from "@/app/shapes/star.png"
import hexagon from "@/app/shapes/hexagon.png"
import heart from "@/app/shapes/heart.png"
import oval from "@/app/shapes/oval.png"
import quatrefoil from "@/app/shapes/quatrefoil.png"
import square from "@/app/shapes/square.png"
import crescent from "@/app/shapes/crescent.png"
import triangle from "@/app/shapes/triangle.png"

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
  "quadtrefoil",
] as const

export default function Shape({ type }: { type: ShapeType }) {
  switch (type) {
    case "circle":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <g className="fill-orange-500">
            <circle cx="240" cy="240" r="240" />
          </g>
        </svg>
      )
    case "crescent":
      return <Image src={crescent} alt="crescent" />
    case "heart":
      return <Image src={heart} alt="heart" />
    case "hexagon":
      return <Image src={hexagon} alt="hexagon" />
    case "diamond":
      return <Image src={diamond} alt="diamond" />
    case "triangle":
      return <Image src={triangle} alt="triangle" />
    case "oval":
      return <Image src={oval} alt="oval" />
    case "square":
      return <Image src={square} alt="square" />
    case "pentagon":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <path
            d="M240 11.8 0 186.1l91.7 282.2h296.6L480 186.1 240 11.8z"
            className="fill-cyan-500"
          />
        </svg>
      )
    case "star":
      return <Image src={star} alt="star" />
    case "rectangle":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
          <path d="M80 0h320v480H80z" className="fill-pink-500" />
        </svg>
      )
    case "quadtrefoil":
      return <Image src={quatrefoil} alt="quatrefoil" />
    default:
      return null
  }
}
