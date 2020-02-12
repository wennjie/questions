/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-11 19:58:08
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 12:30:18
 * @Email: wnejie@byteborder.com
 */

// 前置条件:在spa模式下 main.js / App.vue 中调用 fnA(); pageB 调用 fnB(); main.js / App.vue 执行顺序在pageB 之前;
// 改写或完善下列class中的 fnC() 完成 当Vue/react中 刷新PageB时 需满足status = true 再执行fnB
class wait {
    constructor() {
        this.status = false;
    }
    fnA() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                this.status = true;
                console.log(this.status, '执行完成')
                resolve()
            }, 3000)
        })
    }
    async fnB() {
        await this.fnA()
        console.log('等待 status 为true 时 执行');
    }
}

module.exports = new wait();