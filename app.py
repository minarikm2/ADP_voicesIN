from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Povolení CORS pro všechny requesty

@app.route('/')
def hello():
    return "Hello, Render!"

if __name__ == '__main__':
    app.run(debug=True)