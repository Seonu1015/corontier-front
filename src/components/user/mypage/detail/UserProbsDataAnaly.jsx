import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Col,Card, CardBody,CardHeader } from 'react-bootstrap'
import { RadialChart } from 'react-vis';
import { ResponsiveCalendar } from '@nivo/calendar'
import Calender from './Calender';

function UserProbsDataAnaly() {
    const [userProbsData, setUserProbsData] = useState([]);
    const user_id = sessionStorage.getItem('user_id')
    const [chartData, setChartData] = useState([]);

    const [fordnData, setfordnData] = useState({});

    const [clearData, setClearData] = useState([]);
    const [dnchartData1, setDnChartData] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const [user1, setUser1] = useState({});
    const [clearcnt1, setClearcnt1] = useState({});
    const [boxchartData, setBoxchartData] = useState([]);






    const [javavideos, setJavavideos] = useState([]);

    const getjavavideos= async () => {
        const url = `/crawler/javalist.json`;
        const res = await axios(url);
        console.log(res.data);
        setJavavideos(res.data.list);

    }
    const [javascriptvideos, setJavascriptvideos] = useState([]);

    const getjavascriptvideos= async () => {
        const url = `/crawler/javascriptlist.json`;
        const res = await axios(url);
        console.log(res.data);
        setJavascriptvideos(res.data.list);

    }

    const [phytonvideos, setphytonvideos] = useState([]);

    const getphytonvideos= async () => {
        const url = `/crawler/phytonyoutubedatalist.json`;
        const res = await axios(url);
        console.log(res.data);
        setphytonvideos(res.data.list);

    }

    const [reactvideos, setreactvideos] = useState([]);

    const getreactvideos= async () => {
        const url = `/crawler/reactyoutubedatalist.json`;
        const res = await axios(url);
        console.log(res.data);
        setreactvideos(res.data.list);

    }

    const getClearData = async () => {
        setLoading(true);
      
        const res = await axios(`/problem/clear/${user_id}`);
      
      
        setfordnData(res.data.clearcnt);


  
        setLoading(false);

      };
 
    const getCompes = async () => {
        setLoading(true);
        const url = `/users/getproblemlanguagecount/${user_id}`;
        const res = await axios(url);
        console.log(res.data);
        setUserProbsData(res.data);
        setLoading(false);        
    }


    
    const getSolveCount = async () => {
        const url = `/users/solvecountlist.json/${user_id}`;
        const res = await axios(url);
    
        // res.data.list의 각 항목을 새로운 형식으로 변환
        const transformedData = res.data.list.map(item => ({
             // 'YYYY-MM-DD' 형식의 문자열
            "value": item.value ,
            "day": item.day     // 숫자 타입
        }));
    
        setBoxchartData(transformedData); // 변환된 데이터로 상태 업데이트
        console.log(boxchartData);
    }
    
    useEffect(() => {
        getClearData();
        getCompes();
       getjavavideos();
        getjavascriptvideos();
       getphytonvideos();
        getreactvideos(); 
        getSolveCount();
      

    }, []);

    useEffect(() => {
        console.log(fordnData)
        console.log(boxchartData)
    }, [fordnData,boxchartData]);

    useEffect(() => {
       
        const formattedData = [
            { angle: fordnData.lv0, label: 'Lv.0' },
            { angle: fordnData.lv1, label: 'Lv.1' },
            { angle: fordnData.lv2, label: 'Lv.2' },
            { angle: fordnData.lv3, label: 'Lv.3' },
            { angle: fordnData.lv4, label: 'Lv.4' },
            { angle: fordnData.lv5, label: 'Lv.5' },
        ];

        setDnChartData(formattedData);
        console.log(dnchartData1)
    }, [fordnData]);





    useEffect(() => {
        if (userProbsData.length > 0) {
          const formattedData = userProbsData.map((data, index) => ({
            angle: index + 1, // 또는 다른 적절한 값
            label: `${data.sel_language} (${data.language_count})`
          }));
      
          setChartData(formattedData);
          console.log("formattedData", formattedData);
        }
      }, [userProbsData]);

      const orderedColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00']; // 빨강, 주황, 노랑, 초록

    
      const sortedUserProbsData = [...userProbsData].sort((a, b) => b.language_count - a.language_count);




      const data2 = [
        {
            "value": 400,
            "day": "2015-12-20"
          },
          {
            "value": 28,
            "day": "2018-08-08"
          },
          {
            "value": 96,
            "day": "2015-10-22"
          },
          {
            "value": 31,
            "day": "2018-04-29"
          },
          {
            "value": 397,
            "day": "2016-09-04"
          },
          {
            "value": 37,
            "day": "2015-06-23"
          },
          {
            "value": 121,
            "day": "2017-08-19"
          },
          {
            "value": 185,
            "day": "2016-02-10"
          },
          {
            "value": 7,
            "day": "2017-12-13"
          },
          {
            "value": 219,
            "day": "2017-03-09"
          },
          {
            "value": 103,
            "day": "2015-10-24"
          },
          {
            "value": 350,
            "day": "2016-02-21"
          }
    ]



console.log(data2)




  return (
    <div>
          
        <div>
        <Row>
                
                <Col> 
                <Card>
                        
                        <CardBody>
                            <Card
                                bg={"dark"}
                                key={"dark"}
                                text={'white'}
                                className="mb-2"
                            >
                                <CardHeader>문제 풀이</CardHeader>
                                <CardBody className='mx-3'>
                                    <Row>
                                        <Col>
                                        <RadialChart
                                                    data={dnchartData1}
                                                    width={170}
                                                    height={170}
                                                    innerRadius={50}
                                                    radius={80}
                                                    colorType="category"
                                                />
                                        </Col>
                                        <Col md={4}>
                                       
                                                <Row className='mb-2'><Col style={{color:"#79c7e3"}}><strong>Lv.0</strong></Col><Col className='text-end'>{fordnData.lv0}개</Col></Row>
                                                <Row className='mb-2'><Col style={{color:"#12939a"}}><strong>Lv.1</strong></Col><Col className='text-end'>{fordnData.lv1}개</Col></Row>
                                                <Row className='mb-2'><Col style={{color:"#ef5d28"}}><strong>Lv.2</strong></Col><Col className='text-end'>{fordnData.lv2}개</Col></Row>
                                                <Row className='mb-2'><Col style={{color:"#ff9833"}}><strong>Lv.3</strong></Col><Col className='text-end'>{fordnData.lv3}개</Col></Row>
                                                <Row className='mb-2'><Col style={{color:"#1a3177"}}><strong>Lv.4</strong></Col><Col className='text-end'>{fordnData.lv4}개</Col></Row>
                                                <Row><Col style={{color:"#12939a"}}><strong>Lv.5</strong></Col><Col className='text-end'>{fordnData.lv5}개</Col></Row>  
                                                                  
                                                             
                                    
                                         
                                           
                                     
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <hr />

                        </CardBody>
                    </Card>
                
                
                
                </Col>
                <Col md={6}> <Card>
                        
                        <CardBody>
                            <Card
                                bg={"dark"}
                                key={"dark"}
                                text={'white'}
                                className="mb-2"
                            >
                                <CardHeader>사용 언어</CardHeader>
                                <CardBody className='mx-3'>
                                    <Row>
                                        <Col>
                                        <RadialChart
                                                    data={chartData}
                                                    width={170}
                                                    height={170}
                                                    innerRadius={50}
                                                    radius={80}
                                                    colorType="category"
                                                />
                                        </Col>
                                        <Col md={4}>
                                        {
                                                    sortedUserProbsData.map((userProbsDat, index) => (
                                                        <tr key={userProbsDat.sel_language}>
                                                            <Row className='mb-2'>
                                                                <Col style={{ color: orderedColors[index % orderedColors.length] }}>
                                                                    <td>{userProbsDat.sel_language}</td>
                                                                </Col>
                                                                <Col className='text-end'>
                                                                    <td>{userProbsDat.language_count}</td>
                                                                </Col> 
                                                            </Row>
                                                        </tr>
                                                    ))
                                                }
                                         
                                           
                                     
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <hr />

                        </CardBody>
                    </Card>
                    </Col>
               

            </Row>
            <Row>
                <Col>      
                <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' // 전체 뷰포트 높이
    }}>
                <div style={{ height: '500px', width: '700px' }}> 
                <ResponsiveCalendar
                            data={boxchartData}
                            from="2023-01-01"
                            to="2023-11-14"
                            emptyColor="#eeeeee"
                            colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                            margin={{ top: 10, right: 10, bottom: 10, left: 10}}
                            yearSpacing={40}
                            monthBorderColor="#ffffff"
                            dayBorderWidth={2}
                            dayBorderColor="#ffffff"
                            legends={[
                                {
                                    anchor: 'bottom-right',
                                    direction: 'row',
                                    translateY: 36,
                                    itemCount: 4,
                                    itemWidth: 42,
                                    itemHeight: 36,
                                    itemsSpacing: 14,
                                    itemDirection: 'right-to-left'
                                }
                            ]}
                        />  
                        </div>
                        </div>
                </Col>
      
            </Row>
           
                                    
                                 
                 </div>
              

            


    </div>

  )
}

export default UserProbsDataAnaly