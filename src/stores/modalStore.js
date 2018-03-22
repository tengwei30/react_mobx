import { observable,action,computed } from 'mobx';
import * as mobx from 'mobx';
import _ from 'lodash';

class ModalStore {
    @observable times = []
    @observable modalData ={}
    @observable isModalData = {}
    @observable visibleModal = false

    @action
    setTimes(data) {
        this.times = data
    }

    @action
    setmodalData(data) {
        this.modalData = data
    }

    @action
    setisModalData(data) {
        this.isModalData = data
    }

    @action
    setVisibleModal (boolean) {
        this.visibleModal = boolean
    }
}

export default ModalStore