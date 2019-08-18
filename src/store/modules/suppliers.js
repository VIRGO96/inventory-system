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
              supplier_code: "abc",
              full_name: "John Morrison",
              email:'john@gmail.com',
              phone_no:'03056584822',
              location: "Niger,Nigeria",
              debit: "200$",
              credit: "200$",
              balance: "200$"


            },
            {
                sid:0,
                supplier_code: "def Rice",
                full_name: "Robin Hood",
                email:'robin@gmail.com',
                phone_no:'03056584822',
                location: "Niger",
                debit: "200$",
                credit: "200$",
                balance: "200$"
            }
          ]
          context.commit("setSuppliers",supplier_obj)
    }

};

const mutations = {
    setSuppliers(state,payload){state.suppliers=payload},
    newSupplier(state,payload){state.suppliers.push(payload)}
};


export default {
    state,
    getters,
    actions,
    mutations
}