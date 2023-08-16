import tkinter as tk
from math import *

# Define functions for calculator operations
def evaluate():
    try:
        result = eval(entry.get())
        result_label.config(text="Result: " + str(result))
    except Exception as e:
        result_label.config(text="Error")

# Create the main window
root = tk.Tk()
root.title("Scientific Calculator")
root.geometry("400x600")
root.resizable(False, False)

# Create an entry widget for input
entry = tk.Entry(root, font=("Helvetica", 20), borderwidth=5)
entry.grid(row=0, column=0, columnspan=5, padx=10, pady=10, ipadx=20)

# Create buttons for digits and operations
buttons = [
    ('7', 1, 0), ('8', 1, 1), ('9', 1, 2), ('/', 1, 3),
    ('4', 2, 0), ('5', 2, 1), ('6', 2, 2), ('*', 2, 3),
    ('1', 3, 0), ('2', 3, 1), ('3', 3, 2), ('-', 3, 3),
    ('0', 4, 0), ('.', 4, 1), ('=', 4, 2), ('+', 4, 3),
    ('sin', 5, 0), ('cos', 5, 1), ('tan', 5, 2), ('sqrt', 5, 3),
    ('(', 6, 0), (')', 6, 1), ('^', 6, 2), ('exp', 6, 3),
    ('log', 7, 0), ('ln', 7, 1), ('pi', 7, 2), ('e', 7, 3),
    ('clear', 8, 0)
]

for (text, row, col) in buttons:
    btn = tk.Button(root, text=text, font=("Helvetica", 16), padx=20, pady=20, command=lambda t=text: on_button_click(t))
    btn.grid(row=row, column=col, padx=5, pady=5)

# Create a label for displaying results
result_label = tk.Label(root, text="Result: ", font=("Helvetica", 18))
result_label.grid(row=9, column=0, columnspan=5, pady=10)

# Button click handler
def on_button_click(value):
    if value == 'clear':
        entry.delete(0, tk.END)
        result_label.config(text="Result: ")
    elif value == '=':
        evaluate()
    else:
        entry.insert(tk.END, value)

# Run the GUI event loop
root.mainloop()
