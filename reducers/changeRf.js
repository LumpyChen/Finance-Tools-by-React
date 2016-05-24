/**
 * Created by Lumpychen on 16/5/23.
 */
const changeRf = (state = 0, action) => {
    switch (action.type) {
        case 'CHANGE_RF':
            return action.rf
        default:
            return state
    }
}

export default changeRf
