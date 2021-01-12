//Initial states
export const initialState = {
    randomNumbers:[0, 0, 0, 0],
    randomOffsets:[0, 0, 0, 0]
};

//Selector functions
export const selectRandomNumbers = rootState => rootState.templateReducer.randomNumbers;
export const selectRandomOffsets = rootState => rootState.templateReducer.randomOffsets;
