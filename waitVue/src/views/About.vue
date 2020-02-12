<!--
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-12 15:52:30
 * @LastEditors: wenjie
 * @LastEditTime: 2020-02-12 15:57:58
 * @Email: wnejie@byteborder.com
 -->
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import wait from '../utils/wait';
export default {
  created() {
    wait.fnB()
  },
}
</script>