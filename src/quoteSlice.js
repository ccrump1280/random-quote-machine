import { createSlice } from '@reduxjs/toolkit'

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        message: "",
        author: ""
    },
    reducers: {
        newQuote: (state, action) => {
            state.message = action.payload.quote;
            state.author = action.payload.author;
        }
    }
})

export const { newQuote } = quoteSlice.actions;
export const getNewQuote = () => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch( 'https://api.api-ninjas.com/v1/quotes', {
                method: "GET",
                headers: headers,
            });
            response.json().then((quote) => {
                console.log(quote[0]);
                dispatch(newQuote(quote[0]));
            })
        } catch (err) {
            console.log(err);
        }
        
    }
}
const headers = new Headers({
    "Content-Type": 'application/json',
    'X-Api-Key': 'tj1UmuFUFyXyDkJKbxbjVQ==SU0gFsSKgWcuKdwI',
})

export default quoteSlice.reducer