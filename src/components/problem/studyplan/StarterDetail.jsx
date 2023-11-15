import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const StarterDetail = ({ selectedKey }) => {
    const [loading, setLoading] = useState(false);
    const [plans, setPlans] = useState([]);

    const getPlan = async () => {
        setLoading(true);
        const res = await axios(`/problem/plan/list.json?plan_id=${selectedKey}`);
        console.log(res.data);
        setPlans(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getPlan();
    }, [selectedKey]);

    return (
        <Row>
            {plans.map(p =>
                <Col md={4} className='mb-3' key={p.problem_id}>
                    <Card bg={'secondary'} key={'secondary'} text={'white'} className='p-3'>
                        <CardBody>
                            <h1>{p.title}</h1>
                            <hr style={{borderStyle:"dashed"}}/>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default StarterDetail