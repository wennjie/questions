/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-11 19:58:08
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 16:07:46
 * @Email: wnejie@byteborder.com
 */
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
        //TODO  
      if(this.status==true){
        console.log('fnA返回status == true,执行以下内容');
      }
       
    }
    async fnC() {
       // TODO 
    }

}

export default new wait();