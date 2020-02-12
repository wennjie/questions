<!--
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-12 15:52:30
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 16:08:38
 * @Email: wnejie@byteborder.com
 -->
<template>
  <div class="home">
  前置条件:在spa模式下 main.js  中调用 fnA(); About 调用 fnB(); main.js 执行顺序在 About 之前;只能调用一次fnA();
  <br/>
  改写或完善下列class(目录/src/utils/wait)中的 fnC() 完成 当Vue/react中 刷新 About 时 需满足status = true 再执行fnB
  <br/>
  不限于 promise , callBack , observer , watcher ,  notify  取最优方案
  <br/>

  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home'  
}
</script>
