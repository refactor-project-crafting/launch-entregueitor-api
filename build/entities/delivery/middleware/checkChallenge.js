const checkChallenge = (req, res, next) => {
    const { challengeNumber } = req.params;
    if (req.user.maxChallenge < Number(challengeNumber)) {
        res.status(403).json({ error: "Forbidden challenge" });
        return;
    }
    next();
};
export default checkChallenge;
//# sourceMappingURL=checkChallenge.js.map