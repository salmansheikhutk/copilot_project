from flask import Flask, render_template
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
def index():
    # The route '/' is the root URL of the web application.
    # When a user visits the root URL, this function is called.
    
    # Connect to the database
    conn = get_db_connection()
    cur = conn.cursor()
    
    # Execute a query to fetch all data from the table
    cur.execute('SELECT * FROM test_table')
    rows = cur.fetchall()
    
    # Get the column names from the cursor description
    colnames = [desc[0] for desc in cur.description]
    
    # Close the cursor and connection
    cur.close()
    conn.close()
    
    # Render the HTML template with the fetched data and column names
    return render_template('index.html', rows=rows, colnames=colnames)

@app.route('/hello')
def hello():
    # The route '/hello' renders an HTML template that prints "Hello, World!".
    return render_template('hello.html')

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)
