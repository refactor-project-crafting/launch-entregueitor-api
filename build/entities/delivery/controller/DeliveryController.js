class DeliveryController {
    deliveryRepository;
    constructor(deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
        this.get = this.get.bind(this);
    }
    async get(req, res) {
        const deliveries = await this.deliveryRepository.getByChallenge(req.user.maxChallenge, req.user.id);
        res.status(200).json({ deliveries });
    }
}
export default DeliveryController;
//# sourceMappingURL=DeliveryController.js.map