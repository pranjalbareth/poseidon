from app.app import app 

def test_index():
    client = app.test_client()
    response = client.get("/")
    assert response.status_code == 200
    assert response.get_json() == {"message": "hello from Poseidon CI/CD demo!"}
