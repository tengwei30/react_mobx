import { observable, action, computed, runInAction} from 'mobx';
import axios from 'axios';
import APIs from '../common/api';

class LayoutStore {
    @observable menulists;

    constructor() { // 初始化state
        this.menulists = [];
    }

    @action
    async fetchData() {
        let res = await axios.get(`${APIs.GET_ROOMS}`, {'Content-Type': 'application/json;charset=utf8'});
        res.data ? this.menulists = res.data : this.menulists = []
    }


}

export default LayoutStore;