import React from 'react';
import {setStockDetails, useStockDispatch} from "../../context/StockContext";
const TakeStockItem = ({data}) => {
    const dispatch = useStockDispatch();
    const stockItemClickHandler = () =>{
        setStockDetails(dispatch,data);

    };
    return (
            <tr onClick = {()=>stockItemClickHandler()} style={{cursor : "pointer"}}>
                <td>{data.symbol}</td>
                <td>{data.volume}</td>
                <td>
                    {data.lastPrice}   {<span style={
                        {color : data.lastPricePercent<0 ? "red" : "green",marginRight:"5px"}
                    }>{Math.abs(data.lastPricePercent)}%</span>}</td>
                <td>{data.value}</td>
            </tr>
    );
};

export default TakeStockItem;