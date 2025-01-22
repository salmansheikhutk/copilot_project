from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/get_example', methods=['GET'])
def get_example():
    # Handle GET request
    return jsonify({"message": "Hello from Flask!"}) 

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)
