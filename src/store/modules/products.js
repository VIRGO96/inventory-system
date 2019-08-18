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
              supplier_code:"100",
              product_name: "Arabian Plant Agent",
              date: "2019-09-09",
              quantity: "62 Pcs",
              cost_price: "200$",
              selling_price: "200$",
              brand: "Ramada",
              onhand:100,
              available:150,
              comitted:100,
              sold:100,
              incoming:100,
              inbound:0,
              outbound:0,
              status:'active'

            },
            {
                sid:0,
                product_code: "002",
                supplier_code:"102",
                product_name: "Urea Fertilizer",
                date: "2009-08-08",
                quantity: "92 Pcs",
                cost_price: "200$",
                selling_price: "200$",
                brand: "United Fertilizers",
                onhand:100,
                available:150,
                comitted:100,
                sold:100,
                incoming:100,
                inbound:0,
                outbound:0,
                status:'active'

            },
            {
                sid:0,
                product_code: "003",
                supplier_code:"103",
                product_name: "European Magnate Fertilizer",
                date: "2009-08-08",
                quantity: "92 Pcs",
                cost_price: "200$",
                selling_price: "200$",
                brand: "United Fertilizers",
                onhand:100,
                available:150,
                comitted:100,
                sold:100,
                incoming:100,
                inbound:0,
                outbound:0,
                status:'active'

            },
            {
                sid:0,
                product_code: "004",
                supplier_code:"104",
                product_name: "Ozone Fertilizer",
                date: "2009-08-08",
                quantity: "92 Pcs",
                cost_price: "200$",
                selling_price: "200$",
                brand: "United Fertilizers",
                onhand:100,
                available:150,
                comitted:100,
                sold:100,
                incoming:100,
                inbound:0,
                outbound:0,
                status:'active'

            },
            {
                sid:0,
                product_code: "005",
                supplier_code:"104",
                product_name: "Copper Crown",
                date: "2009-08-08",
                quantity: "92 Pcs",
                cost_price: "200$",
                selling_price: "200$",
                brand: "United Fertilizers",
                onhand:100,
                available:150,
                comitted:100,
                sold:100,
                incoming:100,
                inbound:0,
                outbound:0,
                status:'active'

            },
            {
                sid:0,
                product_code: "006",
                supplier_code:"101",
                product_name: "Wheats Fertilizer",
                date: "2009-08-08",
                quantity: "92 Pcs",
                cost_price: "200$",
                selling_price: "200$",
                brand: "United Fertilizers",
                onhand:100,
                available:150,
                comitted:100,
                sold:100,
                incoming:100,
                inbound:0,
                outbound:0,
                status:'active'

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