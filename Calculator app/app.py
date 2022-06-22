from flask import Flask
from flask import render_template

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route('/', methods=["GET"])
def home():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
