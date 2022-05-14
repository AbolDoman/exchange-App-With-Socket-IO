import Row from "../../components/Row";
import Col from "../../components/Col";
import Spacer from "../../components/Spacer";
import React from "react";
import '../styles.css'
const Header = ({data}) =>{
    return(
        <>
            <Row>
                <Col className={"marginLeftAuto"}>
                    <Row><h1>{data.symbol}</h1></Row>
                    <Row>{data.description}</Row>
                </Col>
                <Col>
                    <Row>
                        <span className={"lastPricePercentHeader"} style={{color : data.lastPricePercent<0 ? "red" : "green"}}>
                            {Math.abs(data.lastPricePercent)}%
                        </span>
                        <span style={{fontSize : "1.3rem"}}>{data.lastPrice}</span>
                    </Row>
                </Col>
            </Row>
            <Spacer size={"medium"} top />
            <Row className={"stockVal"}>
                <p>ارزش سهم: </p>
                <p className={"marginLeftAuto"}>{data.value}</p>
                <p>حجم: </p>
                <p>{data.volume}</p>
            </Row>
        </>
    )
};
export default Header