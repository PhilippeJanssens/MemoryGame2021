document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'MGpic1',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic1',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic2',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic2',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic3',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic3',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic4',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic4',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic5',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic5',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic6',
      img: 'images/MGpic3.jpg'
    },
    {
      name: 'MGpic6',
      img: 'images/MGpic3.jpg'
    }
  ]
})
  const grid : document.querySelector('.grid')

  //create your board
  function creatBoard() {
    for (let i=0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/MGblank.jpg')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  //check for matches



  createBoard()
