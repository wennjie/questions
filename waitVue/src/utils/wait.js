/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-11 19:58:08
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 16:07:46
 * @Email: wnejie@byteborder.com
 */
import eventBus from "../common/eventBus";
import {Notify} from "../common/Notify";

class wait {
    constructor() {
        this.status = false;
    }
    fnA() {
        console.log('开始模拟请求 status : ',this.status)
        setTimeout(() => {
            this.status = true;
            console.log('模拟请求完成 返回 status :',this.status)
            eventBus.$emit(Notify.UpFinish.Name);
        }, 3000)
    }
    async fnB() {
        if(this.status) {
             // TODO: 干事
            console.error(1111111);
            return;
        }
        eventBus.$on(Notify.UpFinish.Name, () => {
            if (!this.status) return ;
            // TODO: 干事
            console.error(1111111);
        });
    }
    async fnC() {
       // TODO

    }

}

export default new wait();
