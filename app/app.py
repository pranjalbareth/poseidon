from flask import Flask, jsonify
from prometheus_client import Counter, generate_latest, CONTENT_TYPE_LATEST
import prometheus_client

app = Flask(__name__)
REQUEST_COUNT = Counter('poseidon_requests_total', 'Total requests')

@app.route("/")
def index():
    REQUEST_COUNT.inc()
    return jsonify({"message": "hello from Poseidon CI/CD demo!"})

@app.route("/metrics")
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}
