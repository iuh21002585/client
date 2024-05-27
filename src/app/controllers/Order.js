import Order from "../models/order.js";

class OrderController {
    async getAll(req, res) {
        try {
            const data = await Order.find({});
            res.json(data);
        } catch (error) {
            res.status(500).json({ err: error });
        }
    }

    async post(req, res) {
        try {
            const {
                orderName,
                orderEmail,
                orderPhone,
                orderAddress,
                orderNote,
                orderCart,
            } = req.body;

            const data = await Order.create({
                name: orderName,
                email: orderEmail,
                phone: orderPhone,
                address: orderAddress,
                note: orderNote,
                cart: orderCart,
            });

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({ err: err });
        }
    }
}

export default new OrderController();
