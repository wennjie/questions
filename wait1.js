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
        await this.funC() && console.log('等待 status 为true 时 执行');
    }
    funC() {
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