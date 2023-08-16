import tkinter as tk

def button_click(event):
    text = event.widget.cget("text")
    if text == "=":
        try:
            result = eval(entry.get())
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except Exception as e:
            entry.delete(0, tk.END)
            entry.insert(tk.END, "Error")
    elif text == "C":
        entry.delete(0, tk.END)
    else:
        entry.insert(tk.END, text)

root = tk.Tk()
root.title("Calculator")
root.geometry("300x400")

entry = tk.Entry(root, font=("Arial", 20), justify="right")
entry.pack(fill=tk.BOTH, padx=10, pady=10, expand=True)

buttons_frame = tk.Frame(root)
buttons_frame.pack(fill=tk.BOTH, padx=10, pady=5, expand=True)

buttons = [
    ('7', '8', '9', '/'),
    ('4', '5', '6', '*'),
    ('1', '2', '3', '-'),
    ('C', '0', '=', '+')
]

for row, button_row in enumerate(buttons):
    for col, button_text in enumerate(button_row):
        button = tk.Button(buttons_frame, text=button_text, font=("Arial", 18), padx=10, pady=10)
        button.grid(row=row, column=col, sticky="nsew")
        button.bind("<Button-1>", button_click)

# Making all buttons expandable to fill the frame
for i in range(4):
    buttons_frame.grid_rowconfigure(i, weight=1)
    buttons_frame.grid_columnconfigure(i, weight=1)

root.mainloop()
