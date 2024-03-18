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
    preview.insertBefore(element.cloneNode(true), flip_book);
    //preview.innerHTML = element.outerHTML;
    preview.style.display = 'flex';
    element.classList.add('hide');
  }
}

export default preview;