import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Card, CardBody, Col, Row } from 'react-bootstrap';
import { FaArrowAltCircleRight } from "react-icons/fa";

const StarterDetail = ({ selectedKey }) => {
    const [loading, setLoading] = useState(false);
    const [plans, setPlans] = useState([]);
    const [clearData, setClearData] = useState([]);

    const getPlan = async () => {
        setLoading(true);
        const res = await axios(`/problem/plan/list.json?plan_id=${selectedKey}`);
        // console.log(res.data);
        setPlans(res.data);
        setLoading(false);
    }

    const getClearData = async () => {
        const user_id = sessionStorage.getItem("user_id");
        setLoading(true);
        const res = await axios(`/problem/clear/${user_id}`);
        // console.log(res.data);
        setClearData(res.data.list);
        setLoading(false);
      }

    useEffect(() => {
        getPlan();
        getClearData();
    }, [selectedKey]);

    return (
        <Row>
            {plans.map(p =>
                <Col md={4} className='mb-3' key={p.problem_id}>
                    <Card bg={'dark'} key={'dark'} text={'light'} className='p-3'>
                        <CardBody>
                            <Row>
                                <Col>
                                    <h1>{p.title}</h1>
                                </Col>
                                <Col md={3} className='text-end'>
                                    <FaArrowAltCircleRight style={{fontSize:'3rem'}} />
                                </Col>
                            </Row>
                            <hr style={{ borderStyle: "dashed" }} />
                            <div className='text-end mt-4'>
                                {clearData.map((cd, index) => {
                                    if ((cd.complete === 0) && (p.problem_id === cd.problem_id)) {
                                        return <h3><Badge key={index} bg="secondary">미해결</Badge></h3>;
                                      } else if ((cd.complete === 1) && (p.problem_id === cd.problem_id)) {
                                        return <h3><Badge key={index} bg="success">해결</Badge></h3>;
                                      }
                                      return null;
                                })}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default StarterDetail