<template>
  <div id="main">
    <Header />
    <div id="content">
      <div class="cinema_menu">
        <div class="all_city">
          <span>全城</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="banner">
          <span>品牌</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="features">
          <span>特色</span>
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <Clist />
    </div>
    <TabBar />
  </div>
</template>

<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.cinema_menu .all_city,.banner,.features {
  height: 100%;
  text-align: center;
  line-height: 45px;
  flex: 1;
}
</style>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Clist from '@/components/Clist'
export default {
  name: "cinema",
  components: {
    Header,
    TabBar,
    Clist,
  }
};
</script>
