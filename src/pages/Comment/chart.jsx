import React from 'react';
import times from '../../common/timeConfig.js';
import './comment.css';
import { autorun } from 'mobx';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import Week from "./week.jsx";

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
                                    commentStore.columnData.slice(0, 7).map((item, key) => {
                                       return (
                                           <div className="weekday" key={key}>
                                               <Week
                                                    {...item}
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
                                                 />
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