const poirot = {
  color: '#949494',
  backgroundColor: '#040404',
  fontFamily: 'Tahoma, Arial',
  fontSize: '18px',
  textTransform: 'uppercase'
};

const robots = {
  color: 'yellow',
  backgroundColor: '#4A2A44',
  fontSize: '18px'
};

const foundation = {
  color: '#333453',
  backgroundColor: 'yellow',
  fontSize: '18px'
};

const genres = {
  'crime': {
    'name': 'Crime',
    'books': [
      {
        isbn: '9780007527496',
        title: 'The Mysterious Affair at Styles',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527496.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129460',
        title: 'The Murder on the Links',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129460.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527526',
        title: 'The Murder of Roger Ackroyd',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527526.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129484',
        title: 'The Mystery of the Blue Train',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129484.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527502',
        title: 'Murder on the Orient Express',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527502.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527533',
        title: 'The ABC Murders',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527533.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527557',
        title: 'Death on the Nile',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527557.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      }
    ]
  },
  'scifi': {
    'name': 'Science Fiction',
    'books': [
      {
        isbn: '9780008277765',
        title: 'The Caves of Steel',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008277765/x400.jpg',
        height: '198',
        width: '129',
        depth: '17',
        style: robots
      },
      {
        isbn: '9780008277772',
        title: 'The Naked Sun',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008277772/x400.jpg',
        height: '198',
        width: '129',
        depth: '16.3',
        style: robots
      },
      {
        isbn: '9780008277789',
        title: 'The Robots of Dawn',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008277789/x400.jpg',
        height: '198',
        width: '129',
        depth: '27',
        style: robots
      },
      {
        isbn: '9780008277796',
        title: 'Robots and Empire',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008277796/x400.jpg',
        height: '198',
        width: '129',
        depth: '28',
        style: robots
      },
      {
        isbn: '9780008117481',
        title: 'Prelude to Foundation',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008117481/x400.jpg',
        height: '198',
        width: '129',
        depth: '26',
        style: foundation
      },
      {
        isbn: '9780008516208',
        title: 'Forward the Foundation',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008516208/x400.jpg',
        height: '198',
        width: '129',
        depth: '26',
        style: foundation
      },
      {
        isbn: '9780008117498',
        title: 'Foundation',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008117498/x400.jpg',
        height: '198',
        width: '129',
        depth: '15.2',
        style: foundation
      },
      {
        isbn: '9780008117511',
        title: 'Second Foundation',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008117511/x400.jpg',
        height: '198',
        width: '129',
        depth: '15.2',
        style: foundation
      },
      {
        isbn: '9780008117504',
        title: 'Foundation and Empire',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008117504/x400.jpg',
        height: '198',
        width: '129',
        depth: '26',
        style: foundation
      },
      {
        isbn: '9780008117528',
        title: "Foundation's Edge",
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008117528/x400.jpg',
        height: '198',
        width: '129',
        depth: '27',
        style: foundation
      },
      {
        isbn: '9780008117535',
        title: 'Foundation and Earth',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008117535/x400.jpg',
        height: '198',
        width: '129',
        depth: '29.5',
        style: foundation
      }
    ]
  },
  'fantasy': {
    'name': 'Fantasy',
    'books': [

    ]
  },
  'romance': {
    'name': 'Romance',
    'books': [

    ]
  },
  'classic': {
    'name': 'Classics',
    'books': [

    ]
  }
}

export default genres;