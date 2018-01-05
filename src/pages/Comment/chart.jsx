import React from 'react';
import times from '../../common/timeConfig.js';
import './comment.css';

export default class Chart extends React.Component {
    render() {
        return(
            <div className="Chart">
                <div className="CtContent">
                    <div className="calendar">
                        <div className="content">
                            <div className="timeBlock">
                                <div style={{borderBottom: '3px solid #f3f3f3', height: 21,width:'100%',paddingBottom:'48px'}}>
                                    {
                                        times.map((item,key) => {
                                            return(
                                                <div key={key} className="clock">{item}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}