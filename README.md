# Game Player Rotation API

This project is a simple Express.js application that manages a list of players in a game, allowing to get the current player's turn, add new players, and remove existing players from the list. The application uses middleware to handle some request preprocessing and organizes its logic into controller and middleware modules for clarity and maintainability.

# Getting Started

To get the project up and running on your local machine, follow these steps:

# Prerequisites

Node.js installed on your machine.
Basic knowledge of JavaScript and Node.js.

# Installation

Clone the repository to your local machine.
Navigate to the project directory in your terminal.
Install the project dependencies by running:
Copy code
npm install
Start the server by running:
Copy code
node index.js
The server will start running on port 8000.

# Usage

The application provides the following endpoints:

# Get Current Player's Turn

GET /: Returns the name of the player whose turn is next.

# Add a Player

GET /adicionar?nome={playerName}&indice={index}: Adds a new player to the list. The nome query parameter is required, and the indice parameter is optional. If indice is provided, the player is added at the specified position; otherwise, the player is added to the end of the list.

# Remove a Player

GET /remover?indice={index}: Removes the player at the specified index from the list. The indice query parameter is required.

# Middleware

capturarIndice: This middleware captures the indice query parameter, converts it to an integer, and attaches it to the request object for further processing in the routes that require it.

# Controller

The controller.js module contains the logic for managing the players' list, including getting the current player's turn, adding a new player, and removing an existing player.

# Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

# License

This project is open source and available under the MIT License.# GamePlayerRotationAPI
