const { Server } = require("boardgame.io/server");
const { TicTacToe: TicTacToe } = require("./game");
import { GAME_SERVER_PORT } from "./config";
const server = Server({
  games: [TicTacToe],
});

server.run(GAME_SERVER_PORT);
