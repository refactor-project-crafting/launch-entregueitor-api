import chalk from "chalk";
import supabaseClient from "../../supabase/supabase.js";
import flagsmith from "./flagsmith.js";
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
    const username = data.user.user_metadata.user_name;
    const flags = await flagsmith.getIdentityFlags(username);
    const maxChallengeNumber = flags.getFeatureValue("challenge-number");
    req.user = { ...data.user, maxChallenge: maxChallengeNumber };
    next();
};
export default authMiddleware;
//# sourceMappingURL=authMiddleware.js.map