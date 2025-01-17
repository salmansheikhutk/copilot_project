from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def arabic_grammar():
    # Render the HTML template for Arabic grammar basics
    return render_template('arabic_grammar.html')

if __name__ == '__main__':
    # Run the Flask application in debug mode
    app.run(debug=True)
