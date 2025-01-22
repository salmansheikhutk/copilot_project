from flask import Flask, render_template, request
import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)

def get_db_connection():
    # Establish a connection to the PostgreSQL database using environment variables
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD')
    )
    return conn

@app.route('/')
def arabic_grammar():
    # Render the HTML template for Arabic grammar basics
    return render_template('arabic_grammar.html')

@app.route('/get_example', methods=['GET'])
def get_example():
    # Handle GET request
    return "This is a GET request example."

@app.route('/post_example', methods=['POST'])
def post_example():
    # Handle POST request
    data = request.form['data']
    return f"Received POST request with data: {data}"

@app.route('/get_names', methods=['GET'])
def get_names():
    # Connect to the database
    conn = get_db_connection()
    cur = conn.cursor()
    
    # Execute a query to fetch all values in the 'name' column
    cur.execute('SELECT name FROM test_table')
    names = cur.fetchall()
    
    # Close the cursor and connection
    cur.close()
    conn.close()
    
    # Render the HTML template with the fetched names
    return render_template('arabic_grammar.html', names=names)

@app.route('/post_name', methods=['POST'])
def post_name():
    # Handle POST request to add a new name to the database
    new_name = request.form['newName']
    
    # Connect to the database
    conn = get_db_connection()
    cur = conn.cursor()
    
    # Insert the new name into the 'name' column
    cur.execute('INSERT INTO test_table (name) VALUES (%s)', (new_name,))
    conn.commit()
    
    # Close the cursor and connection
    cur.close()
    conn.close()
    
    return f"Added new name: {new_name}"

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)
