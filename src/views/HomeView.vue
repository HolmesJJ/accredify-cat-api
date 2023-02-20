<template>
  <div class="">
    <div class="content flex_x">
      <div class="item" v-for="(item, index) in mainData" :key="index">
        <div>
          <el-image :src="item.url"></el-image>
        </div>
        <div class="name">{{ item.id }}</div>
        <div class="btns flex_x">
          <el-button type="primary" @click="like(item.id)">Favourite</el-button>
          <el-button type="success" @click="vote(item.id)">Vote</el-button>
        </div>
      </div>
    </div>
    <div class="">
      <div class="pagen">
        <el-button type="primary" :disabled="page == 1" @click="prev"
          >Previous</el-button
        ><el-button @click="next" type="primary">Next</el-button>
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
    const page = ref("1");
    let mainData = ref(null);

    const getData = () => {
      request({
        url: `/images/search`,
        method: "get",
        data: {
          limit: 10,
          page: page.value,
        },
      }).then((res) => {
        if (res.status == 200) {
          mainData.value = res.data;
        }
      });
    };
    getData();

    const next = () => {
      page.value = page.value + 1;
      getData();
    };

    const prev = () => {
      if (page.value > 1) {
        page.value = page.value - 1;
        getData();
      }
    };

    const like = (id) => {
      request({
        url: `/favourites`,
        method: "POST",
        data: {
          image_id: id,
        },
      }).then(() => {
        ElMessage({
          message: "Thanks for your like!",
          type: "success",
        });
      });
    };

    const vote = (id) => {
      request({
        url: `/votes`,
        method: "POST",
        data: {
          image_id: id,
          value: 1,
        },
      }).then(() => {
        ElMessage({
          message: "Thanks for your vote!",
          type: "success",
        });
      });
    };

    return { getData, page, mainData, next, prev, like, vote };
  },
};
</script>

<style lang="less">
@import "../styles/main.less";

.pagen {
  display: flex;
  text-align: right;
  justify-content: flex-end;
  margin-top: 30px;
  padding-right: 30px;
}
</style>
