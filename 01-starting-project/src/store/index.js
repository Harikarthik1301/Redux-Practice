import {createSlice ,configureStore} from '@reduxjs/toolkit'

const initialCounterState = { counter: 0 , showCounter : true}

const initialAuthState = { isAuthenticated : false }; 

const counterSlice = createSlice({
    name:"CounterSlice",
    initialState : initialCounterState,
    reducers : {
        increment(state){
            state.counter++;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        decrease(state,action){
            state.counter = state.counter - action.payload;
        },
        decrement(state){
            state.counter--;
        },
        toggle(state){
            state.showCounter = !state.showCounter
        },
    }
});

const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState : initialAuthState,
    reducers : {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    }
});

// const counterReducer = (state = initialState, action) =>{
//     if(action.type === "increment"){
//         return {
//             counter : state.counter + 1,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === "increase"){
//         return {
//             counter : state.counter + action.value,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === "decrease"){
//         return {
//             counter : state.counter -  action.value,
//             showCounter : state.showCounter
//         }
//     }
//     if(action.type === "decrement"){
//         return {
//             counter : state.counter - 1,
//             showCounter : state.showCounter
//         };
//     }
//     if(action.type === "toggle"){
//         return {
//             counter : state.counter,
//             showCounter : !state.showCounter
//         };
//     }
//     return state;
// };

const store = configureStore({
    reducer :{ 
        counter : counterSlice.reducer,
        Auth : AuthSlice.reducer
    }
});

export const counterActions = counterSlice.actions
export const AuthActions = AuthSlice.actions
export default store;