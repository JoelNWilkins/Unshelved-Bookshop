const poirot = {
  color: '#949494',
  '--background-color': '#040404',
  fontFamily: 'Trebuchet MS, Arial, sans-serif',
  '--font-size': '18px',
  textTransform: 'uppercase'
};

const robots = {
  color: 'yellow',
  '--background-color': '#4A2A44',
  '--font-size': '18px'
};

const foundation = {
  color: '#333453',
  '--background-color': 'yellow',
  '--font-size': '18px',
  fontWeight: 'bold'
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
        isbn: '9780008164836',
        title: 'Poirot Investigates',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164836.jpg',
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
        isbn: '9780008164904',
        title: 'The Big Four',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164904.jpg',
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
        style: poirot,
        unavailable: true
      },
      {
        isbn: '9780008196653',
        title: 'Black Coffee',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008196653.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129521',
        title: 'Peril at End House',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129521.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008164850',
        title: 'Lord Edgware Dies',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164850.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008164867',
        title: 'Three Act Tragedy',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164867.jpg',
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
        isbn: '9780008129538',
        title: 'Death in the Clouds',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129538.jpg',
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
        isbn: '9780008164874',
        title: 'Murder in Mesopotamia',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164874.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008164898',
        title: 'Cards on the Table',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164898.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129569',
        title: 'Dumb Witness',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129569.jpg',
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
      },
      {
        isbn: '9780008164928',
        title: 'Murder in the Mews',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164928.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008164959',
        title: 'Appointment with Death',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164959.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527540',
        title: "Hercule Poirot's Christmas",
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527540.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot,
        unavailable: true
      },
      {
        isbn: '9780008129576',
        title: 'Sad Cypress',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129576.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008164966',
        title: 'One, Two, Buckle My Shoe',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164966.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527571',
        title: 'Evil Under the Sun',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527571.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527519',
        title: 'Five Little Pigs',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527519.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129583',
        title: 'The Hollow',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129583.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129545',
        title: 'Taken At The Flood',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129545.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527588',
        title: "Mrs McGinty's Dead",
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527588.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007562695',
        title: 'After the Funeral',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007562695.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129552',
        title: 'Hickory Dickory Dock',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129552.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007556878',
        title: "Dead Man's Folly",
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007556878.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527564',
        title: 'Cat Among the Pigeons',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527564.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007121083',
        title: 'The Adventure of the Christmas Pudding',
        author: 'Agatha Christie',
        front_cover: 'data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAJYAYYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmikooAKXNJRQAuaM0lFAC5opKKAClzSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUALmjNJRQAuaM0lFAC5ozSUUAKKKBRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUtOjQyOqr1JwKErgMorV1y2top99gsy2uAAJiC+cDOSAB1zWVVSi4uzEncKKKKkYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAKKKBRQAlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSgEnABJpKejMjBlJDDoaEBItrO3SJvxGKv6daNFIXlAzjA74qayuluF2tgSDt61bAHPXP0rvpUIaSTuYym9iKaMSwsh7islrCcdFB+hrc6ZGOf5UjOsaMznCgcnFa1aMZ6smMmtjnpLeWMEvGwHrioat3121w+B8sY6CqledNRTtE3V7ahRRRUDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFFFAooASiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAltwTMgXIJIxiulwAx25x2zzXPaft+1RlyAo5JNaF3qvO2H58DAZuw9hXZh5xhFuTMppt6GtBC077UTeVDOwDBTtUZPXjoDWbrSD7JGykk5ywxwOuPr2/Os+LUbhJN7OXz/AHj/ACq5PeQ3djIjHY4GVU+ua0lWjUi0JQcWY9JS0leebBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAoooFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAC0+JDLIqKMsxxTBWto0AXM0mATwua0pQ55WFJ2VyS+sUWzHlL86DJPrWLXW4DD5eeDnFc7qVsbe4OB8jcrXRiaSj70djOEujKlJRRXGahRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAoooFFACUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFKBk4oAkgTfIBjI6muutdfvLYrHaR2NuijAVbePGPdiCT+JrEitxbQoG4lb5j7elTOQF2EsoAzjrk+1d1KnyLUwlUd9Du/D98viu5TTNSt7USzKyw3SQqkkTgEr8ygbhnse1cdqdm0sckbpslQkYP8JHUVueEbK/S4g1SJY4beORXWedhFGSp5AJPI7cAmn+Lxc/8JLfm/MRuHk3lovuuCAQw9iMH8auK9/k6NGkruCk97nnTAqSCMEHpTa19atNp89BwfvfX1rIriqU3TlysqLurhRRRWYwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACi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',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot,
        unavailable: true
      },
      {
        isbn: '9780008129590',
        title: 'The Clocks',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129590.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129606',
        title: 'Third Girl',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129606.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008129613',
        title: "Hallowe'en Party",
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008129613.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780008164973',
        title: 'Elephants Can Remember',
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0081/9780008164973.jpg',
        height: '198',
        width: '129',
        depth: '15',
        style: poirot
      },
      {
        isbn: '9780007527601',
        title: "Curtain: Poirot's Last Case",
        author: 'Agatha Christie',
        front_cover: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527601.jpg',
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
        isbn: '9780008279554',
        title: 'I, Robot',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008279554/x400.jpg',
        height: '198',
        width: '129',
        depth: '16.3',
        style: robots
      },
      {
        isbn: '9780008277802',
        title: 'The Rest of the Robots',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008277802/x400.jpg',
        height: '198',
        width: '129',
        depth: '14.2',
        style: robots,
        unavailable: true
      },
      {
        isbn: '9780008277819',
        title: 'The Complete Robot',
        author: 'Isaac Asimov',
        front_cover: 'https://i.harperapps.com/hcuk/covers/9780008277819/x400.jpg',
        height: '198',
        width: '129',
        depth: '39',
        style: robots
      },
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
        style: foundation,
        unavailable: true
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