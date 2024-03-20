function preview(event) {
  let preview = document.getElementById('preview');
  let flip_book = document.getElementById('flip_book');
  let element = event.target;
  if ((element.parentNode !== undefined)
      && element.parentNode.classList.contains('book')) {
    // For the case when the user has clicked a child element of a book
    // (e.g. the front cover or the spine), then take the parent node
    element = element.parentNode;
  } else if ((element.parentNode.parentNode !== undefined)
      && element.parentNode.parentNode.classList.contains('book')) {
    // For the case when the user has clicked a child element of a book
    // (e.g. the front cover or the spine), then take the parent node
    element = element.parentNode.parentNode;
  }
  if (element.classList.contains('book')) {
    let book = element.cloneNode(true);
    book.removeAttribute('title');
    for (let child of book.children) {
      if (child.classList.contains('front')) {
        child.setAttribute('title', 'Left click to open the book');
      }
    }
    preview.insertBefore(book, flip_book);
    //preview.innerHTML = element.outerHTML;
    preview.style.display = 'flex';
    element.classList.add('hide');
  }
}

export default preview;