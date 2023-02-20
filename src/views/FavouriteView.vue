<template>
  <div class="">
    <div class="content flex_x">
      <div class="item" v-for="(item, index) in mainData" :key="index">
        <div>
          <el-image :src="item.image.url"></el-image>
        </div>
        <div class="name">{{ item.image_id }}</div>
        <div class="btns flex_x">
          <el-button type="primary" @click="unlike(item)">UnLike</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { request } from "../api/request";

export default {
  setup() {
    let mainData = ref(null);

    const getData = () => {
      request({
        url: `/favourites`,
        method: "get",
      }).then((res) => {
        if (res.status == 200) {
          mainData.value = res.data;
        }
      });
    };
    getData();

    const unlike = (item) => {
      request({
        url: `/favourites/${item.id}`,
        method: "delete",
      }).then((data) => {
        console.log(data);
        ElMessage({
          message: "Thanks, bye bye~",
        });
        getData();
      });
    };

    return { getData, mainData, unlike };
  },
};
</script>

<style lang="less">
@import "../styles/main.less";
</style>
