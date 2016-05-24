/**
 * Created by Lumpychen on 16/5/21.
 */
export const addStock = (data) => ({
        type: 'ADD_STOCK',
        data
})

export const removeStock = (id) => ({
        type: 'REMOVE_STOCK',
        id
})

export const toggleOutput = () => ({
        type: 'TOGGLE_OUTPUT'
})

export const changeRf = (rf) => ({
        type: 'CHANGE_RF',
        rf
})

export const verify = (stk,rf) => ({
        type: 'VERIFY',
        stk,
        rf
})