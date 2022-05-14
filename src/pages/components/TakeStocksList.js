import React from 'react';
import '../styles.css'
import Col from "../../components/Col";
import Row from "../../components/Row";
import TakeStockItem from "./TakeStockItem";
import {useStockState} from "../../context/StockContext";
import '../styles.css'

const TakeStocksList = () => {
    const {stocksList,taKha,balance} = useStockState();
    return (

        <Col className={"takeStocksListContainer"} style={{height: '100%', position: 'relative'}} >
            <div style={{flex : 1}}>
                <table style={{width : "100%"}} cellSpacing={0}>
                    <thead>
                    <tr>
                        <th>نماد</th>
                        <th>دارایی</th>
                        <th>کل سهم</th>
                        <th>ارزش سهم</th>
                    </tr>
                    </thead>


                    <tbody>
                    {
                        stocksList.map((item,index)=>{
                            return <TakeStockItem
                                key={index}
                                data={item}
                            />
                        })
                    }
                    </tbody>
                </table>
            </div>
            <Row className={"footerStockList"} style={{backgroundColor : "#BDC3C7"}}>
                <p>دارایی شما:  </p>
                <p style={{marginLeft:"auto"}}>{balance}</p>
                <p>توان خرید:  </p>
                <p>{taKha}</p>
            </Row>
        </Col>
    );
};

export default TakeStocksList;