import React from 'react';
import {Switch,Route} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


class LayoutaPage extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    Click = ({key}) => {
        this.props.history.push({pathname: key})
    }
    render() {
        return (
            <Layout>
                <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.Click}>
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

export default LayoutaPage