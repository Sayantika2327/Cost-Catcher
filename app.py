from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    swiggy = pd.read_csv('hunger_ranch_menu_swiggy.csv')
    zomato = pd.read_csv('hunger_ranch_menu_zomato.csv')

    swiggy.columns = ['Food Name', 'Swiggy Price']
    zomato.columns = ['Food Name', 'Zomato Price']

    merged = pd.merge(swiggy, zomato, on='Food Name')
    merged.sort_values('Food Name', inplace=True)

    return render_template('index1.html', data=merged.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(port=5001, debug=True)
