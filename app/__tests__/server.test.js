const request = require("supertest");
const app = require("../server");

describe("Poseidon App", () => {
    it("should return hello message at /", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "hello from Poseidon CI/CD demo!" });
    });

    it("should expose Prometheus metrics at /metrics", async () => {
        const res = await request(app).get("/metrics");
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("poseidon_requests_total");
    });
});
