# 7097CEM - Modern Web Technologies

## Running

### Start the frontend

`npm start`

### Start the backend

`node backend/server.js` or `nodemon backend/server.js` to enable hot updates.

## Functionality

### Plaques

Clicking on the gold plaque at the bottom of each shelf will take you to a page \
with more books in that catagory (e.g. same genre, same author).

### Hover

Hover your mouse over a book and it should slide forwards out of the shelf.

### Preview

Double left clicking on a book will bring up a larger preview of the front cover of the book. \
Press escape or click off of the book to close the preview.

### Drag and drop

Using the left mouse button, click and hold on a book. \
This will allow you to grab a book and drag it to elsewhere on the page. \
When you release left click the book will be dropped. \
Drag and dropping a book from the shelves on the left to the aside on the right \
will remove the book from the shelf and add it to your stack \
(click the 'My Stack' button on the navbar to toggle the aside). \
Drag and dropping a book from the stack to the shelves will \
remove the book from the stack and put it back on the shelf.

### Ghost books

If a book is unavailable/out of stock, it will appear ghostly (greyscale and translucent).