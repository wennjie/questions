/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-11 19:58:08
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 15:45:15
 * @Email: wnejie@byteborder.com
 */

// 前置条件:在spa模式下 main.js / App.vue 中调用 fnA(); pageB 调用 fnB(); main.js / App.vue 执行顺序在pageB 之前;
// 改写或完善下列class中的 fnC() 完成 当Vue/react中 刷新PageB时 需满足status = true 再执行fnB
// 不限于 promise , callBack , observer , watcher ,  notify  取最优方案
class wait {
    constructor() {
        this.status = false;
    }
    fnA() {
        console.log('开始模拟请求 status : ',this.status)
        setTimeout(() => {
            this.status = true;
            console.log('模拟请求完成 返回 status :',this.status)
        }, 3000)
    }
    async fnB() {
        await this.funC() && console.log('fnA返回status == true,执行以下内容');
    }
    async funC() {
        if (this.status) {
            return this.status
        }
        return new Promise(async (r, j) => {
            setTimeout(async () => {
                r(await this.funC())
            }, 100)
        })

    }

}

module.exports = new wait();