class DeliveryController {
    deliveryRepository;
    constructor(deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
        this.get = this.get.bind(this);
    }
    async get(req, res) {
        const { challengeNumber } = req.params;
        const deliveries = await this.deliveryRepository.getByChallenge(Number(challengeNumber), req.user.id);
        res.status(200).json({ deliveries });
    }
}
export default DeliveryController;
//# sourceMappingURL=DeliveryController.js.map