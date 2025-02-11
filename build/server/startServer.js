import chalk from "chalk";
import app from "./app.js";
const startServer = (port) => {
    app.listen(port, () => {
        console.log(chalk.green("Listening on http://localhost:" + port));
    });
};
export default startServer;
//# sourceMappingURL=startServer.js.map