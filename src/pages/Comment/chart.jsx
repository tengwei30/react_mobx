import React from 'react';
import times from '../../common/timeConfig.js';
import './comment.css';
import { autorun } from 'mobx';
import { inject, observer } from 'mobx-react';
import moment from 'moment';

@inject('commentStore', 'layoutStore')
@observer
export default class Chart extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount () {
        autorun(() => {
            const RoomId = this.props.layoutStore.RoomId
            this.props.commentStore.fetchData(RoomId)
        })
    }
    render() {
        const {commentStore} = this.props
        return(
            <div className="Chart">
                <div className="CtContent">
                    <div className="calendar">
                        <div className="content">
                            <div className="timeBlock">
                                <div style={{borderBottom: '3px solid #f3f3f3', height: 21,width:'100%',paddingBottom:'48px'}}></div>
                                {
                                    times.map((item,key) => {
                                        return(
                                            <div key={key} className="clock">{item}</div>
                                        )
                                    })
                                }
                            </div>
                            {
                                commentStore.switchWeek ? (
                                    commentStore.columnData.slice(0, 7).map(item => {
                                       return (
                                           <div className="weekday" key={item.day}>
                                                {
                                                    (moment().format('YYYY-MM-DD') === item.day) ? (
                                                        <div className="weekdayHeader">
                                                            <span style={{color:'rgb(112,157,228)'}}>{ item.day }</span>
                                                            <span style={{color:'rgb(112,157,228)'}}>{ item.week }</span>
                                                        </div>
                                                    ) : (
                                                        <div className="weekdayHeader">
                                                            <span>{ item.day }</span>
                                                            <span>{ item.week }</span>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    item['times'].map((val, key) => {
                                                        if(val.used) {
                                                            return (
                                                                <div key={val.time} className="timeSingleBlock">
                                                                    <div className="create"
                                                                    // onClick={() => {this.showCreateRoom(item,val)}}
                                                                    >
                                                                        {
                                                                            (val.time == val.beginTime) ? (
                                                                                <div className="active" style={{borderTop:'2px solid #fff'}}>
                                                                                <span className="description">{val.description}</span>
                                                                                </div>
                                                                            ) : (
                                                                                <div className="active">
                                                                                    <span>.</span>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div key={val.time} className="timeSingleBlock">
                                                                    <div className="create"
                                                                    // onClick={() => {this.showCreateRoom(item,val)}}
                                                                    >
                                                                        <div className="makeMeet">
                                                                            预定
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                           </div>
                                       )
                                    })
                                ) : (
                                    commentStore.columnData.slice(7, 14).map(item => {
                                        return (
                                            <div className="weekday" key={item.day}>
                                                 {
                                                     (moment().format('YYYY-MM-DD') === item.day) ? (
                                                         <div className="weekdayHeader">
                                                             <span style={{color:'rgb(112,157,228)'}}>{ item.day }</span>
                                                             <span style={{color:'rgb(112,157,228)'}}>{ item.week }</span>
                                                         </div>
                                                     ) : (
                                                         <div className="weekdayHeader">
                                                             <span>{ item.day }</span>
                                                             <span>{ item.week }</span>
                                                         </div>
                                                     )
                                                 }
                                                 {
                                                     item['times'].map((val, key) => {
                                                         if(val.used) {
                                                             return (
                                                                 <div key={val.time} className="timeSingleBlock">
                                                                     <div className="create"
                                                                     // onClick={() => {this.showCreateRoom(item,val)}}
                                                                     >
                                                                         {
                                                                             (val.time == val.beginTime) ? (
                                                                                 <div className="active" style={{borderTop:'2px solid #fff'}}>
                                                                                 <span className="description">{val.description}</span>
                                                                                 </div>
                                                                             ) : (
                                                                                 <div className="active">
                                                                                     <span>.</span>
                                                                                 </div>
                                                                             )
                                                                         }
                                                                     </div>
                                                                 </div>
                                                             )
                                                         } else {
                                                             return (
                                                                 <div key={val.time} className="timeSingleBlock">
                                                                     <div className="create"
                                                                     // onClick={() => {this.showCreateRoom(item,val)}}
                                                                     >
                                                                         <div className="makeMeet">
                                                                             预定
                                                                         </div>
                                                                     </div>
                                                                 </div>
                                                             )
                                                         }
                                                     })
                                                 }
                                            </div>
                                        )
                                     })
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}