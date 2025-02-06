from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

def get_db_connection():
    # Establish a connection to the PostgreSQL database using environment variables
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD')
    )
    return conn

@app.route('/get_example', methods=['GET'])
def get_example():
    # Handle GET request
    return jsonify({"message": "Hello from Flask!"})

@app.route('/get_all_data', methods=['GET'])
def get_all_data():
    # Connect to the database
    conn = get_db_connection()
    cur = conn.cursor()
    
    # Execute a query to fetch all data from the test_table
    cur.execute('SELECT * FROM test_table')
    data = cur.fetchall()
    
    # Close the cursor and connection
    cur.close()
    conn.close()
    
    # Return the data as JSON
    return jsonify(data)

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(host='0.0.0.0', port=5000, debug=True)
