# Installation

## Before you start

 The backend repository for the API is provided [here](https://github.com/Tubaher/git-api-show). Make sure you have it running before you start this project.

## Requirements

- Make sure you have [pnpm](https://pnpm.io/installation) installed
- Install `node` 18.17.1
- You can use `nvm` or `fnm` to manage your node versions. I provide a ',nvmrc' file that you can use to install the required version of node

## Install dependencies

1. Clone the Github repository
2. `pnpm install`
3. Provide a `.env` file with api url as follows:

   ```sh
   VITE_GITHUB_HISTORY_API="http://localhost:3001/" # or whatever port you are using
   ```

4. `pnpm run dev`
5. Open your browser and go to `http://localhost:5173` or the port that is displayed in your terminal

## Usage

### Development

- `pnpm run dev` to start the development server
- `pnpm run build` to build the project
- `pnpm run preview` to serve the build folder
- `pnpm run lint` to lint the project
