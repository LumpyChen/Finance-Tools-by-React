/**
 * Created by Lumpychen on 16/5/21.
 */
let initId = 0;

const initialState = [];
const stocks = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_STOCK':
            let newStock = Object.assign({},{
                id: ++initId,
                data:action.data
            });
            return state.concat([newStock]);
        case 'REMOVE_STOCK':
            return state.filter(
                stock => stock.id!== action.id
            );
        default:
            return state||[]
    }
}

export default stocks
