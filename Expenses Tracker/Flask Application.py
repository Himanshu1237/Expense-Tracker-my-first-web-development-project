from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///expenses.db'
db = SQLAlchemy(app)

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50))
    name = db.Column(db.String(100))
    date = db.Column(db.String(20))
    amount = db.Column(db.Float)

# Create the database tables
db.create_all()

# Sample expenses data received from JavaScript
expenses_data = [
    {'type': 'Food', 'name': 'Restaurant', 'date': '2023-12-01', 'amount': 50.0},
    {'type': 'Shopping', 'name': 'Clothes', 'date': '2023-12-02', 'amount': 100.0},
    # Add more sample data as needed
]

# Insert expenses data into the database
for data in expenses_data:
    new_expense = Expense(type=data['type'], name=data['name'], date=data['date'], amount=data['amount'])
    db.session.add(new_expense)

# Commit the changes
db.session.commit()

@app.route('/')
def index():
    expenses = Expense.query.all()
    total_spending = sum(expense.amount for expense in expenses)
    
    # Provide basic spending habit advice
    if total_spending > 500:
        advice = "You've been spending a lot! Consider creating a budget and saving more."
    elif total_spending > 300:
        advice = "You're spending moderately. Keep an eye on your expenses and consider saving more."
    else:
        advice = "Great job on controlling your expenses! Keep it up and consider saving for future goals."

    return render_template('expense_report.html', expenses=expenses, total_spending=total_spending, advice=advice)

if __name__ == '__main__':
    app.run(debug=True)
