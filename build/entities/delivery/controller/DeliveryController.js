class DeliveryController {
    deliveryRepository;
    constructor(deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
        this.get = this.get.bind(this);
        this.post = this.post.bind(this);
    }
    async get(req, res) {
        const { challengeNumber } = req.params;
        const deliveries = await this.deliveryRepository.getByChallenge(Number(challengeNumber), req.user.id);
        res.status(200).json({ deliveries });
    }
    async post(req, res) {
        const { challengeNumber } = req.params;
        const { type } = req.query;
        const deliveryData = { ...req.body, type, challengeNumber };
        if (isTextDelivery(deliveryData, type)) {
            deliveryData.text = ",";
            const newTextDelivery = await this.deliveryRepository.addTextDelivery(deliveryData);
            res.status(201).json({ newDelivery: newTextDelivery });
        }
    }
}
const isTextDelivery = (delivery, type) => {
    return type === "text";
};
export default DeliveryController;
//# sourceMappingURL=DeliveryController.js.map