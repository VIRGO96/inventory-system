const state = {
    products: [],
};

const getters = {
    products:state=>state.products
};

const actions = {
    fillProducts(context,payload) {
        let product_obj=[
            {
              sid:0,
              product_code:"001",
              supplier_code:"003",
              product_name: "Arabian Plant Agent",
              date: "2019-09-09",
              quantity: "62 Pcs",
              cost_price: "200$",
              selling_price: "200$",
              brand: "200$"

            },
            {
                sid:0,
                product_code: "002",
                supplier_code:"004",
                product_name: "Urea Fertilizer",
                date: "2009-08-08",
                quantity: "92 Pcs",
                cost_price: "200$",
                selling_price: "200$",
                brand: "United Fertilizers"

            }
          ]
          context.commit("setProducts",product_obj)
    }

};

const mutations = {
    setProducts(state,payload){state.products=payload},
    newProduct(state,payload){state.products.push(payload)}
};


export default {
    state,
    getters,
    actions,
    mutations
}