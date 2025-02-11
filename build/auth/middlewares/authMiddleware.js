import chalk from "chalk";
import supabaseClient from "../../supabase/supabase.js";
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        console.log(chalk.red("Missing token"));
        res.status(401).json({ error: "Missing token" });
        return;
    }
    const token = authHeader.replace("Bearer ", "");
    const { data, error } = await supabaseClient.auth.getUser(token);
    if (error || !data.user) {
        res.status(401).json({ error: "Invalid token" });
        return;
    }
    req.user = data.user;
    next();
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map