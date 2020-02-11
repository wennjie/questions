/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-11 19:58:08
 * @LastEditors: wenjie
 * @LastEditTime: 2020-02-11 19:58:35
 * @Email: wnejie@byteborder.com
 */
class wait {
    constructor() {
        this.status = false;
    }
    fnA() {
        setTimeout(() => {
            this.status = true;
            console.log(this.status, '执行完成')
        }, 3000)
    }
    async fnB() {
        console.log('等待 status 为true 时 执行');
    }
    funC() {
     

    }

}

module.exports = new wait();