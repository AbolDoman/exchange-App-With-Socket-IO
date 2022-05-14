import React from 'react';
import Col from "../../components/Col";
import Row from "../../components/Row";
import Spacer from "../../components/Spacer";
import '../styles.css'
const DeepChart = ({offers}) => {
    return (
        <Row className={"deepChartRoot"}>
            <Col flex={1}>
                <Row>
                    <Col className={"marginLeft10px"} >تعداد</Col>
                    <Col className={"marginLeftAuto"} >حجم</Col>
                    <Col>قیمت</Col>
                </Row>
                {
                    offers.filter(item => item.type === "buy").map((offers,index)=>{
                        return(
                            <Row key={index} style={{background: `linear-gradient(90deg, ${offers.type === "sell" ? "#E74C3C88" : "#1ABC9C88"} ${offers.percent}%, transparent 0%)`,padding:"5px"}}>
                                <Col className={"marginLeft10px"}>{offers.count}</Col>
                                <Col className={"marginLeftAuto"}>{offers.volume}</Col>
                                <Col>{offers.price}</Col>
                            </Row>
                        )
                    })
                }
            </Col>
            <Spacer left size={"medium"} />
            <Col flex={1}>

                <Row>
                    <Col className={"marginLeftAuto"}>قیمت</Col>
                    <Col>حجم</Col>
                    <Col className={"marginLeft10px"}>تعداد</Col>
                </Row>
                {
                    offers.filter(item => item.type === "sell").map((offers,index)=>{
                        return(
                            <Row key={index} style={{background: `linear-gradient(-90deg, ${offers.type === "sell" ? "#E74C3C88" : "#1ABC9C88"} ${offers.percent}%, transparent 0%)`,padding:"5px"}}>
                                <Col className={"marginLeftAuto"}>{offers.price}</Col>
                                <Col>{offers.volume}</Col>
                                <Col style={{marginRight : "10px"}}>{offers.count}</Col>
                            </Row>

                        )
                    })
                }
            </Col>
        </Row>
    );
};

export default DeepChart;