export default {
  state: () => ({
    activeColor: null,
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
              bigImg: '/white-jacket.png',
              smallImg: '/white-jacket-small.png'
            },
            {
              id: 2,
              bigImg: '/white-jacket2.png',
              smallImg: '/white-jacket2.png'
            },
            {
              id: 3,
              bigImg: '/white-jacket3.png',
              smallImg: '/white-jacket3.png'
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
              bigImg: '/black-jacket.jpg',
              smallImg: '/black-jacket.jpg'
            },
            {
              id: 2,
              bigImg: '/black-jacket2.png',
              smallImg: '/black-jacket2.png'
            },
            {
              id: 3,
              bigImg: '/black-jacket3.png',
              smallImg: '/black-jacket3.png'
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
              bigImg: '/beige-jacket.jpg',
              smallImg: '/beige-jacket.jpg'
            },
            {
              id: 2,
              bigImg: '/beige-jacket2.png',
              smallImg: '/beige-jacket2.png'
            },
            {
              id: 2,
              bigImg: '/beige-jacket3.jpg',
              smallImg: '/beige-jacket3.jpg'
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
          bigImg: '/cut-out-dress.png',
          smallImg: '/cut-out-dress-small.png'
        }
      },
      {
        title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
        price: '8 900 RUB',
        photo: {
          bigImg: '/jacket.png',
          smallImg: '/jacket-small.png'
        }
      },
      {
        title: 'ПЛАТЬЕ МАКСИ С ЯРУСАМИ, БЕЛЫЙ',
        price: '10 500 RUB',
        photo: {
          bigImg: '/tiered-dress.png',
          smallImg: '/jacket-small.png'
        }
      },
      {
        title: 'КОМБИНЕЗОН СО СТОЙКОЙ, ЧёРНЫЙ',
        price: '9 500 RUB',
        photo: {
          bigImg: '/overalls.png',
          smallImg: '/cut-out-dress-small.png'
        }
      }
    ] 
  }),
  getters: {
    getProduct(state) {
      return state.product
    },
    getActiveColor(state) {
      return state.activeColor
    },
    getSimilarProducts(state) {
      return state.similarProducts
    }
  },
  mutations: {
    setActiveColor (state, value) {
      state.activeColor = value
    }
  } 
}