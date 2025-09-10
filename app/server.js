const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = process.env.PORT || 5000;

const register = new client.Registry();
const requestCounter = new client.Counter({
    name: "poseidon_requests_total",
    help: "Total requests",
});
register.registerMetric(requestCounter);

app.get("/", (req, res) => {
    requestCounter.inc();
    res.json({ message: "hello from Poseidon CI/CD demo!" });
});

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Poseidon app running on port ${PORT}`);
    });
}

module.exports = app;