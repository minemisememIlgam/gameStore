import React from "react";
import "./GameItem.css";
import { GameCover } from "../GameCover";

export const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => genre)}
        </div>
        <div className="game-item__buy"></div>
      </div>
    </div>
  );
};
