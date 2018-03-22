import React from 'react';
import times from '../../common/timeConfig.js';
import {message} from 'antd';
import './comment.css';
import { autorun } from 'mobx';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import Week from "./week.jsx";
import Dmodal from './Modal.jsx';

@inject('commentStore', 'layoutStore','modalStore')
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
    showModel = (times, val) => {
        const nowTime = new Date(moment().format('YYYY-MM-DD HH:mm:ss')).getTime() - 1800000
        if(val.time < nowTime) {
            message.warning("不可预定过去时间～")
            return false
        }
        this.props.modalStore.setVisibleModal(true)
        this.props.modalStore.setTimes(times)
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
                                    commentStore.columnData.slice(0, 7).map((item, key) => {
                                       return (
                                           <div className="weekday" key={key}>
                                               <Week
                                                    {...item}
                                                    onShow = {this.showModel}
                                                />
                                           </div>
                                       )
                                    })
                                ) : (
                                    commentStore.columnData.slice(7, 14).map((item, key)=> {
                                        return (
                                            <div className="weekday" key={key}>
                                                <Week
                                                     {...item}
                                                     onShow = {this.showModel}
                                                 />
                                            </div>
                                        )
                                     })
                                )
                            }
                        </div>
                    </div>
                </div>
                <Dmodal />
            </div>
        )
    }
}