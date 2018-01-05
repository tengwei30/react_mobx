import React from 'react';
import { Button } from 'antd';
import moment from 'moment';
import './comment.css';
import Chart from './chart.jsx';

export default class Comment extends React.Component {
    render() {
        return(
            <div style={{width:'100%',height:'100%'}}>
                {this.todayRender()}
                <Chart />
            </div>
        )
    }
    todayRender() {
        return(
            <div className="btnDate">
                <p>今天：{moment().locale('zh-cn').format('dddd')}</p>
                <p><Button type="primary">本周</Button></p>
            </div>
        )
    }
}