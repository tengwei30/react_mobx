import _ from 'lodash';

const appStore = {};

export default ()=>{
    if(_.isEmpty(appStore)){
        const storeMap = {
        };
        Object.keys(storeMap).forEach(store=>{      //我用来把store的首字母全部转成小写啦，不是必须
            appStore[_.lowerFirst(store)] = new storeMap[store]()
        })
    }
    return appStore
}