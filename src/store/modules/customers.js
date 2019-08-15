const state = {
    customers: [],
};

const getters = {
    customers:state=>state.customers
    
};

const actions = {
    fillCustomers(context,payload) {
        let customer_obj=[
            {
              cid:0,
              sid:0,
              supplier_code: "abc",
              full_name: "John Morrison",
              location: "Niger,Nigeria",
              debit: "200$",
              credit: "200$",
              balance: "200$"


            },
            {
                cid:0,
                sid:0,
                supplier_code: "def Rice",
                full_name: "Robin Hood",
                location: "Niger",
                debit: "200$",
                credit: "200$",
                balance: "200$"
            },
            {
                cid:0,
                sid:0,
                supplier_code: "def Rice",
                full_name: "Dave Batista",
                location: "Niger",
                debit: "200$",
                credit: "200$",
                balance: "200$"
            },
            {
                cid:0,
                sid:0,
                supplier_code: "def Rice",
                full_name: "Rock Hold",
                location: "Niger",
                debit: "200$",
                credit: "200$",
                balance: "200$"
            }
          ]
          context.commit("setCustomers",customer_obj)
    }

};

const mutations = {
    setCustomers(state,payload){state.customers=payload},
    newCustomer(state,payload){state.customers.push(payload)}
};


export default {
    state,
    getters,
    actions,
    mutations
}