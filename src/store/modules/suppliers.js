const state = {
    suppliers: [],
};

const getters = {
    suppliers:state=>state.suppliers
    
};

const actions = {
    fillSuppliers(context,payload) {
        let supplier_obj=[
            {
              sid:0,
              supplier_code: "Dakota Rice",
              fullname: "$36,738",
              location: "Niger",
              debit: "Oud-Turnhout",
              credit: "Oud-Turnhout",
              balance: "Oud-Turnhout"


            },
            {
                sid:0,
                supplier_code: "Dakota Rice",
                fullname: "$36,738",
                location: "Niger",
                debit: "Oud-Turnhout",
                credit: "Oud-Turnhout",
                balance: "Oud-Turnhout"
            }
          ]
          context.commit("setSuppliers",supplier_obj)
    }

};

const mutations = {
    setSuppliers(state,payload){state.suppliers=payload}

};


export default {
    state,
    getters,
    actions,
    mutations
}