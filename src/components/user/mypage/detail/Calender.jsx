import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Col,Card, CardBody,CardHeader } from 'react-bootstrap'
import { RadialChart } from 'react-vis';
import { ResponsiveCalendar } from '@nivo/calendar'

function Calender() {








    const data = [
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


  return (
    <div>Calender





<ResponsiveCalendar
                            data={data}
                            from="2015-03-01"
                            to="2016-07-12"
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
  )
}

export default Calender