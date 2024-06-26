import AuthRouter from './Auth.js';
import V1Router from "./v1.js";

function route(app) {
    app.use("/api/auth", AuthRouter);
    app.use("/api/v1", V1Router);
    app.use("/", (req, res) => {
        res.json({
            message: "Welcome to Coffee API"
        });
    });
}

export default route;
