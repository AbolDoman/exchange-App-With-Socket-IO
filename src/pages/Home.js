import React, {useEffect, useMemo} from 'react';
import Col from "../components/Col";
import Row from "../components/Row";
import Spacer from "../components/Spacer";
import './styles.css'
import TakeStocksList from "./components/TakeStocksList";
import TakeStockDetails from "./components/TakeStockDetails";

import io from "socket.io-client";
import {setBalance, setStockDetails, setStockList, useStockDispatch, useStockState} from "../context/StockContext";

const Home = () => {

    const socket = useMemo(()=>{
        return io.connect("http://localhost:3001");
    },[]);

    const dispatch = useStockDispatch();
    const {stockDetails} = useStockState();

    useEffect(()=>{
        socket.on("balance",(data)=>{
            setBalance(dispatch,data.balance,data.taKha);
        });
        socket.on("takeStockList",(data)=>{
            const List = data.list.sort((a,b)=>b.lastPrice - a.lastPrice);
            setStockList(dispatch,List);
        });
        socket.on("takeStockDetails",(data)=>{
            setStockDetails(dispatch,data)
        });

        return () =>{
           socket.disconnect();
        }
    },[socket]);

    useEffect(()=>{
        socket.emit("join",stockDetails.symbol);
         return () =>{
             socket.emit("left",stockDetails.symbol);
         }


    },[stockDetails]);


    return (
        <Col className={"homeRoot"}>
            <Row center className={"headerText"}>
                React Exchange
            </Row>
            <Row>
                <Col className={"stockListContainer"} flex={1}>
                    <TakeStocksList/>
                </Col>
                <Spacer left size={"small"}/>
                <Col className={"stockListDetails"} flex={1}>
                    <TakeStockDetails/>
                </Col>
            </Row>
        </Col>
    );
};

export default Home;