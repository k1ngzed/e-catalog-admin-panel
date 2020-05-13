let state = {
  token: localStorage.getItem("token") || "",
  tokenTimeout: localStorage.getItem("token_timeout") || "",
  user: "",
  user_rights: "",
  main_menu: "",
  categories: [
    {
      id: 0,
      name: "Электроника",
      link: "elektronika",
      categoryArea: [
        {
          id: 3,
          parentId: 0,
          name: "Портативная техника",
          link: "portativnaja-tehnika",
          categoryArea: [
            {
              id: 4,
              parentId: 3,
              name: "Наушники и Bluetooth-гарнитуры",
              link: "naushniki-i-bluetooth-garnitury"
            }
          ]
        }
      ]
    },
    {
      id: 1,
      name: "Продукты",
      link: "produkty",
      categoryArea: [
        {
          id: 5,
          parentId: 1,
          name: "Бакалейные товары",
          link: "bakalejnye-tovary",
          categoryArea: [
            {
              id: 6,
              parentId: 5,
              name: "Крупы, каши",
              link: "krupy-kashi",
              categoryArea: [
                {
                  id: 7,
                  parentId: 6,
                  name: "Гречневая крупа",
                  link: "grechnevaja-krupa",
                  categoryArea: [
                    {
                      id: 8,
                      parentId: 7,
                      name: "Гречневая крупа Мистраль",
                      link: "grechnevaja-krupa-mistral"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Компьютерная техника",
      link: "kompjuternaja-tehnika",
      categoryArea: [
        {
          id: 9,
          parentId: 2,
          name: "Ноутбуки и настольные ПК",
          link: "noutbuki-i-nastolnye-pk",
          categoryArea: [
            {
              id: 10,
              parentId: 9,
              name: "Планшеты",
              link: "planshety"
            }
          ]
        }
      ]
    }
  ],
  locations: [
    {
      id: 0,
      label: "Ташкент",
      region: "Ташкентская область",
      children: [
        {
          id: 1,
          parentId: 0,
          label: "Чирчик"
        },
        {
          id: 2,
          parentId: 0,
          label: "Кибрай"
        }
      ]
    },
    {
      id: 3,
      label: "Самарканд",
      region: "Самаркандская область",
      children: [
        {
          id: 4,
          parentId: 3,
          label: "Байсун"
        },
        {
          id: 5,
          parentId: 3,
          label: "Денау"
        }
      ]
    }
  ],
  brands: [
    {
      id: 0,
      name: "Xiaomi",
      link: "xiaomi",
      logo: ""
    },
    {
      id: 0,
      name: "Samsung",
      link: "samsung",
      logo: ""
    },
    {
      id: 0,
      name: "Logitech",
      link: "logitech",
      logo: ""
    }
  ],
  products: [
    {
      id: 0,
      name: "Беспроводные наушники Havit G1 Pro",
      link: "besprovodnye-naushniki-havit-g1-pro",
      categories: [
        {
          id: 0,
          name: "Электроника",
          link: "elektronika"
        },
        {
          id: 3,
          parentId: 0,
          name: "Портативная техника",
          link: "portativnaja-tehnika"
        },
        {
          id: 4,
          parentId: 3,
          name: "Наушники и Bluetooth-гарнитуры",
          link: "naushniki-i-bluetooth-garnitury"
        }
      ],
      colors: [
        {
          id: 0,
          name: "Черный",
          hex: "#000000",
          images: [
            {
              img: ""
            }
          ]
        },
        {
          id: 1,
          name: "Белый",
          hex: "#FFFFFF",
          images: [
            {
              img: ""
            }
          ]
        }
      ]
    },
    {
      id: 1,
      name: "Беспроводные наушники Xiaomi AirDots Pro 2",
      link: "besprovodnye-naushniki-xiaomi-airdots-pro-2",
      categories: [
        {
          id: 4,
          parentId: 3,
          name: "Наушники и Bluetooth-гарнитуры",
          link: "naushniki-i-bluetooth-garnitury"
        }
      ],
      colors: [
        {
          id: 0,
          name: "Черный",
          hex: "#000000",
          images: [
            {
              img: ""
            }
          ]
        },
        {
          id: 1,
          name: "Белый",
          hex: "#FFFFFF",
          images: [
            {
              img: ""
            }
          ]
        }
      ]
    },
    {
      id: 2,
      categories: [
        {
          id: 8,
          parentId: 7,
          name: "Гречневая крупа Мистраль",
          link: "grechnevaja-krupa-mistral"
        }
      ],
      name: "Гречневая крупа Мистраль Зелёная 450 г",
      link: "grechnevaja-krupa-mistral-zeljonaja-450-g"
    }
  ],
  merchantProducts: [
    {
      id: 0,
      name: "Havit G1 Pro",
      price: "800.000 сум",
      available: true,
      image: "",
      description: "",
      shipment: [
        {
          id: 0,
          city: "Ташкент",
          time: "1 день",
          price: "10.000 сум"
        },
        {
          id: 1,
          city: "Ташкентская область",
          time: "2 дня",
          price: "30.000 сум"
        },
        {
          id: 2,
          city: "Ташкентская область, Чирчик",
          time: "1 день",
          price: "20.000 сум"
        }
      ],
      product: {
        id: 0,
        name: "Беспроводные наушники Havit G1 Pro",
        link: "besprovodnye-naushniki-havit-g1-pro"
      },
      productsColor: {
        id: 0,
        name: "Белый",
        hex: "#ffffff"
      }
    },
    {
      id: 1,
      name: "Xiaomi AirDots Pro 2",
      price: "600.000 сум",
      available: true,
      image: "",
      description: "",
      shipment: [
        {
          id: 0,
          city: "Ташкент",
          time: "1 день",
          price: "10.000 сум"
        },
        {
          id: 1,
          city: "Самарканд",
          time: "7 дней",
          price: "50.000 сум"
        }
      ],
      product: {
        id: 1,
        name: "Беспроводные наушники Xiaomi AirDots Pro 2",
        link: "besprovodnye-naushniki-xiaomi-airdots-pro-2"
      },
      productsColor: {
        id: 0,
        name: "Черный",
        hex: "#000000"
      }
    }
  ]
}

if (localStorage.getItem("user_rights") !== null) {
  state.user_rights = localStorage.getItem("user_rights").split(",")
}

export default state
