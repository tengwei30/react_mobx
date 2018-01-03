import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu, Icon, Select } from 'antd';
const { Header, Sider, Content } = Layout;
import { inject, observer } from 'mobx-react';
import './layoutPage.css';
import { autorun } from 'mobx';

const imgs = {
    logoSmall: require('../../../assets/images/logoSmall.png'),
    avatar: require('../../../assets/images/avatar.png')
}

@inject('layoutStore')
@observer
class LayoutaPage extends React.Component {
    componentWillMount () {
        autorun(() => {
            this.props.layoutStore.fetchData()
        })
    }
    // componentWillReact() {
    //     this.props.layoutStore.fetchData()
    // }
    SelectChange = (value) => {
        console.info(value)
    }
    Click = ({key}) => {
        this.props.history.push({pathname: key})
    }
    render() {
        return (
            <Layout>
                <Sider style={{background:'#fff'}}>
                    <div className="logo" >
                        <img src={imgs.logoSmall} className="logo_small"/>
                        <header>
                            <img src={imgs.avatar} />
                            <div className="avatar">
                                <p className="name">admin</p>
                                <p className="email">zhangsong@guanghe.tv</p>
                            </div>
                        </header>
                    </div>
                    <Select
                        showSearch
                        style={{width: 160,marginLeft: 15,marginBottom: 15}}
                        defaultValue='会议室'
                        onChange={this.SelectChange}
                    >
                        <Option value="meeting">会议室</Option>
                        <Option value="face">面试室</Option>
                        <Option value="voice">录音室</Option>
                    </Select>
                    <Menu mode="inline" defaultSelectedKeys={['1']} onClick={this.Click}>
                        <Menu.Item key="home">
                            <Icon type="user" />
                            Home
                        </Menu.Item>
                        <Menu.Item key="roster">
                            <Icon type="video-camera" />
                            Roster
                        </Menu.Item>
                        <Menu.Item key="schedule">
                            <Icon type="upload" />
                            Schedule
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                     {renderRoutes(this.props.route.routes)}
                </Content>
                </Layout>
            </Layout>
        )
    }
}

const MenuList = (menulists) => {
    return (
        menulists.map(item => {
            console.log(item)
        })
    )
    
}

export default LayoutaPage