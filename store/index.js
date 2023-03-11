export default {
  state: () => ({
    product: {
      title: 'жакет удлинённый',
      price: '8 900 RUB',
      description: {
        title: 'описание',
        text: 'Описание одежды напрямую связано с&nbsp;образом человека. По&nbsp;внешнему виду можно судить о&nbsp;состоятельности человека, о&nbsp;положении в&nbsp;обществе, о&nbsp;роде деятельности, о&nbsp;предпочтениях, об&nbsp;образе жизни и&nbsp;многом другом. Тем более если это описание принадлежит перу классика.'
      },
      compound: {
        title: 'состав и уход',
        text: 'Описание одежды напрямую связано с&nbsp;образом человека. По&nbsp;внешнему виду можно судить о&nbsp;состоятельности человека, о&nbsp;положении в&nbsp;обществе, о&nbsp;роде деятельности, о&nbsp;предпочтениях, об&nbsp;образе жизни и&nbsp;многом другом. Тем более если это описание принадлежит перу классика.'
      },
      details: [
        {
          color: 'белый', 
          colorCode: '#FFFFFF',
          sliderPhotos: [
            {
              id: 1,
              bigImg: '/photos/white-jacket.png',
              smallImg: '/photos/white-jacket-small.png'
            },
            {
              id: 2,
              bigImg: '/photos/white-jacket2.png',
              smallImg: '/photos/white-jacket2.png'
            },
            {
              id: 3,
              bigImg: '/photos/white-jacket3.png',
              smallImg: '/photos/white-jacket3.png'
            }
          ],
          sizes: [
            {
              size: 'xs',
              quantity: 7
            },
            {
              size: 's',
              quantity: 28
            },
            {
              size: 'm',
              quantity: 0
            }
          ]
        },
        {
          color: 'черный',
          colorCode: '#000000',
          sliderPhotos: [
            {
              id: 1,
              bigImg: '/photos/black-jacket.jpg',
              smallImg: '/photos/black-jacket.jpg'
            },
            {
              id: 2,
              bigImg: '/photos/black-jacket2.png',
              smallImg: '/photos/black-jacket2.png'
            },
            {
              id: 3,
              bigImg: '/photos/black-jacket3.png',
              smallImg: '/photos/black-jacket3.png'
            }
          ],
          sizes: [
            {
              size: 'xs',
              quantity: 17
            },
            {
              size: 's',
              quantity: 0
            },
            {
              size: 'm',
              quantity: 4
            }
          ]
        },
        {
          color: 'бежевый', 
          colorCode: '#F9F1DC', 
          sliderPhotos: [
            {
              id: 1,
              bigImg: '/photos/beige-jacket.jpg',
              smallImg: '/photos/beige-jacket.jpg'
            },
            {
              id: 2,
              bigImg: '/photos/beige-jacket2.png',
              smallImg: '/photos/beige-jacket2.png'
            },
            {
              id: 2,
              bigImg: '/photos/beige-jacket3.jpg',
              smallImg: '/photos/beige-jacket3.jpg'
            }
          ],
          sizes: [
            {
              size: 'xs',
              quantity: 7
            },
            {
              size: 's',
              quantity: 0
            },
            {
              size: 'm',
              quantity: 0
            }
          ]
        }
      ]
    },
    similarProducts: [
      {
        title: 'ПЛАТЬЕ С V-ОБРАЗНЫМ ВЫРЕЗОМ, БЕЛЫЙ',
        price: '14 900 RUB',
        oldPrice: '8 000 RUB',
        photo: {
          bigImg: '/photos/cut-out-dress.png',
          smallImg: '/photos/cut-out-dress-small.png'
        }
      },
      {
        title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
        price: '8 900 RUB',
        photo: {
          bigImg: '/photos/jacket.png',
          smallImg: '/photos/jacket-small.png'
        }
      },
      {
        title: 'ПЛАТЬЕ МАКСИ С ЯРУСАМИ, БЕЛЫЙ',
        price: '10 500 RUB',
        photo: {
          bigImg: '/photos/tiered-dress.png',
          smallImg: '/photos/jacket-small.png'
        }
      },
      {
        title: 'КОМБИНЕЗОН СО СТОЙКОЙ, ЧёРНЫЙ',
        price: '9 500 RUB',
        photo: {
          bigImg: '/photos/overalls.png',
          smallImg: '/photos/cut-out-dress-small.png'
        }
      }
    ] 
  }),
  getters: {
    getProduct(state) {
      return state.product
    },
    getSimilarProducts(state) {
      return state.similarProducts
    }
  }
}