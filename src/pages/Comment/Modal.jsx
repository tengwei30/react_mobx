import React from 'react';
import { Modal, Button, WhiteSpace, WingBlank } from 'antd';
import { inject, observer } from 'mobx-react';
import { autorun } from 'mobx';
import FormModal from './FormModal.jsx';


@inject('modalStore')
@observer
export default class Dmodal extends React.Component {
    handleCancel = () => {
        this.props.modalStore.setVisibleModal(false)
    }
    render () {
        return (
            <Modal
                visible={this.props.modalStore.visibleModal}
                onCancel={this.handleCancel}
                title="会议室预定"
                footer={[]}
            >
                <FormModal />
            </Modal>
        )
    }
}
