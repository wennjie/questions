<!--
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-11 19:56:59
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 12:29:27
 * @Email: wnejie@byteborder.com
 -->
## 完成后 pr

node js 或 html中实现 

运行 node ./index.js


前置条件:在spa模式下 main.js / App.vue 中调用 fnA(); pageB 调用 fnB(); main.js / App.vue 执行顺序在pageB 之前;
改写或完善下列class中的 fnC() 完成 当Vue/react中 刷新PageB时 需满足status = true 再执行fnB

<script type="text/javascript">
	class wait {
       constructor() {
            this.status = false;
        }
		fnA() => {
			setTimeout(() => {
				this.status = true;
			}, 3000)
		}
		fnB() => {
			console.log('等待 status 为true 时 执行');
		}
		fuC() => {
			TOOD

		}
	}
	
	wait.fnA()
	wait.fnB()
</script>




