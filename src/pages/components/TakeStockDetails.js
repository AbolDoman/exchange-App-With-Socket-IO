import React from 'react';
import Header from "./HeaderOfRightSide";
import DeepChart from "./DeepChart";
import {useStockState} from "../../context/StockContext";
import Chart from "./Chart";

const TakeStockDetails = () => {
    const {stockDetails} = useStockState();
    let offers = [];
    if(stockDetails.offers && stockDetails.offers.length>0)
        offers = stockDetails.offers;
    const addPercent = (offers) =>{
        const filterBuy = offers.filter(item=>item.type==='buy');
        const filterSell = offers.filter(item=>item.type==='sell');
        const maxBuy = filterBuy.reduce((acc, item) => acc > item.price ? acc : item.price, 0);
        const maxSell = filterSell.reduce((acc, item) => acc > item.price ? acc : item.price, 0);
        return [
                ...filterSell.map(item=>({...item,percent:Math.floor(item.price/maxSell*100)})),
                ...filterBuy.map(item=>({...item,percent:Math.floor(item.price/maxBuy*100)}))
            ]

    };
    offers = addPercent(offers);
    return (
        <>
            <Header data={stockDetails}/>
            <DeepChart offers={offers}/>
            <Chart/>
        </>
    );
};

export default TakeStockDetails;