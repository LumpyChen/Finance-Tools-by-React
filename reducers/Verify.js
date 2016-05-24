/* Created by Lumpychen on 16/5/23.*/
const verify = (state = ['empty','empty'], action) => {
    switch (action.type) {
        case 'VERIFY':
            if (action.stk&&action.rf)
                return [action.stk,action.rf];
            else if (action.stk)
                return [action.stk,state[1]]
            else if (action.rf)
                return [state[0],action.rf]
            else return state;
        default:
            return state
    }
}

export default verify
