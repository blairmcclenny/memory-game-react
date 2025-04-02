# Memory Game

This is a two-player memory game built with [Next.js](https://nextjs.org) and React. Players take turns uncovering tiles to find matching pairs. The player with the most matches wins!

## Features

- **Interactive Gameplay**: A fun and engaging memory game for two players.
- **Dynamic Scoring**: Tracks scores for both players in real-time.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Custom Shapes**: Unique tile shapes rendered using SVGs.
- **Instructions Modal**: Clear game instructions accessible at any time.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/memory-game-react.git
   cd memory-game-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to play the game.

## Project Structure

- **`app/`**: Contains all the components and pages for the app.
  - **`memory-game/`**: Core game logic and components (e.g., tiles, scoring, results).
  - **`Instructions.tsx`**: Displays the game instructions in a modal.
  - **`RotatedWord.tsx`**: Adds a playful rotation effect to text.
- **`globals.css`**: Global styles using Tailwind CSS.

## Technologies Used

- [Next.js](https://nextjs.org) for server-side rendering and routing.
- [React](https://reactjs.org) for building the UI.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [TypeScript](https://www.typescriptlang.org) for type safety.

## How to Play

1. Each player takes turns flipping two tiles.
2. If the tiles match, the player scores a point and continues their turn.
3. If the tiles don’t match, they are flipped back, and the next player takes their turn.
4. The game ends when all matches are found. The player with the most points wins!

## Learn More

To learn more about the tools and frameworks used in this project, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploying the App

The app can be deployed using [Vercel](https://vercel.com). For deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
