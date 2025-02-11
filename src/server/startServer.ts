import chalk from "chalk";
import app from "./index.js";

const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(chalk.green("Listening on http://localhost:" + port));
  });
};

export default startServer;
