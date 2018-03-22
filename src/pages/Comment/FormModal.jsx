import React, {Component} from 'react';
import {Modal,Button, Form, Input,Select, Col, notification, Popconfirm, message} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const confirm = Modal.confirm;
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';
import moment from 'moment';

@inject('modalStore')
@observer
class FormModal extends Component {
    render () {
        const { getFieldDecorator } = this.props.form;
        const { times } = this.props.modalStore
        return (
            <Form onSubmit={this.handleSubmit}>>
                <FormItem>
                    <Col span={11}>
                        <FormItem
                        >
                            <Select
                                placeholder="开始时间"
                            >
                                {
                                    times ? (
                                        times.map(item => {
                                            return (
                                                <Option key={moment(item.time).format('YYYY-MM-DD HH:mm:ss')}>{moment(item.time).format('HH:mm')}</Option>
                                            )
                                        })
                                    ) : (null)
                                }
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span={2}>
                        <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                            -
                        </span>
                    </Col>
                    <Col span={11}>
                        <FormItem>
                        <Select
                                placeholder="结束时间"
                            >
                                {
                                    times ? (
                                        times.map(item => {
                                            return (
                                                <Option key={moment(item.time).format('YYYY-MM-DD HH:mm:ss')}>{moment(item.time).format('HH:mm')}</Option>
                                            )
                                        })
                                    ) : (null)
                                }
                            </Select>
                        </FormItem>
                    </Col>
                </FormItem>
                <FormItem>
                    <TextArea style={{resize:'none'}} rows={2} placeholder="请添写使用者和主题"  />
                </FormItem>
                <FormItem span={12}>
                    <div>
                        <Col span={11}>
                            <Button style={{width:'100%'}} type="default" onClick={this.DeleteMessage}>
                                删除
                            </Button>
                        </Col>
                        <Col span={2}></Col>
                        <Col span={11}>
                            <Button style={{width:'100%'}} type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Col>
                    </div>
            </FormItem>
            </Form>
        )
    }
}


export default Form.create()(FormModal);
