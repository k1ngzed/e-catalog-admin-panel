const getters = {
  isLoggedIn: state => !!state.token,
  getProductById: state => id => {
    return state.products && id in state.products
      ? state.products[id]
      : undefined
  },
  getCategoryList: state => {
    let result = []
    // eslint-disable-next-line no-unused-vars
    function categoryFilter(data, inner) {
      // eslint-disable-next-line no-unused-vars
      for (let [k, v] of Object.entries(data)) {
        result.push({
          id: v.id,
          name: inner ? inner + v.name : v.name,
          link: v.link
        })
        if (v.categoryArea !== undefined) {
          if (v.categoryArea.length > 0) {
            categoryFilter(v.categoryArea, "- ")
          }
        }
      }
    }

    categoryFilter(state.categories)

    return result
  },
  getLocationList: state => {
    let result = []
    state.locations.map(a => {
      result.push({
        id: a.id,
        label: a.label,
        region: a.region
      })
      if (a.children !== undefined) {
        a.children.map(b => {
          result.push({
            id: b.id,
            label: b.label,
            region: a.region
          })
        })
      }
    })

    return result
  }
}

export default getters
