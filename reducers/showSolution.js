/**
 * Created by Lumpychen on 16/5/21.
 */
const showSolution = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_OUTPUT':
            return !state
        default:
            return !!state
    }
}

export default showSolution
