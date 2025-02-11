class DeliveryController {
    constructor() {
        this.get = this.get.bind(this);
    }
    async get(_req, res) {
        const deliveries = [
            {
                id: 1,
                challenge: 2,
                name: "switch",
                studentId: 1,
            },
            {
                id: 2,
                challenge: 2,
                name: "bucles",
                studentId: 1,
            },
        ];
        res.status(200).json({ deliveries });
    }
}
export default DeliveryController;
//# sourceMappingURL=DeliveryController.js.map