import React, {useContext, useReducer} from 'react'

const StockStateContext = React.createContext(undefined);
const StockDispatchContext = React.createContext(undefined);
function stockReducer(state,action) {
    switch (action.type) {
        case "SET_BALANCE" :
            return {...state,balance : action.payload.balance,taKha : action.payload.taKha};
        case "SET_STOCK_LIST":
            return {...state,
                stocksList : action.payload.list,
                stockDetails : state.stockDetails.symbol ? state.stockDetails : action.payload.list[0]};
        case "SET_STOCK_DETAILS":
            return {...state,stockDetails : action.payload.list};

        default :
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

function StockProvider({children}) {
    const [state,dispatch] = useReducer(stockReducer,{
        balance : undefined,
        taKha : undefined,
        stocksList : [],
        stockDetails : {}

    });
    return(
    <StockStateContext.Provider value={state}>
        <StockDispatchContext.Provider value={dispatch}>
            {children}
        </StockDispatchContext.Provider>
    </StockStateContext.Provider>
    )
}
function useStockState() {
    const context = useContext(StockStateContext);
    if (context === undefined) {
        throw new Error("useTweetState must be used within a TweetProvider");
    }
    return context;
}
function useStockDispatch() {
    const context = useContext(StockDispatchContext);
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used within a TweetProvider");
    }
    return context;

}
export {useStockDispatch,useStockState,StockProvider,setBalance,setStockList,setStockDetails}
/////////////////////
function setBalance(dispatch,balance,taKha) {
    dispatch({
        type : "SET_BALANCE",
        payload : {
            balance
            ,taKha
        }
    });
}
function setStockList(dispatch,list) {
    dispatch({
        type : "SET_STOCK_LIST",
        payload : {
            list : list
        }
    });
}
function setStockDetails(dispatch,list) {
    dispatch({
        type : "SET_STOCK_DETAILS",
        payload : {
            list : list
        }
    });
}

