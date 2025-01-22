from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__, static_folder='../frontend/public', static_url_path='/')
CORS(app)

@app.route('/')
def serve():
    # Serve the React frontend
    # The static_folder is set to '../frontend/public', which means the Flask app will look for the index.html file in the 'public' folder of the React app
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/get_example', methods=['GET'])
def get_example():
    # Handle GET request
    return jsonify(message="This is a GET request example.")

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)
