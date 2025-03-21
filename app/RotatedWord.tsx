export default function RotatedWord({ word }: { word: string }) {
  return word.split("").map((char: string, i) => (
    <span
      key={`word-${i}`}
      className={`${
        i % 2 === 0 ? "rotate-6" : "-rotate-6"
      } inline-block tracking-wider`}
    >
      {char}
    </span>
  ))
}
