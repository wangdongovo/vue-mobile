<template>
  <div class="dynamic-container">

    <div class="dynamic-content">

      <div class="dynamic-tab">
        <div class="tab-item">关注</div>
        <div class="tab-item">发现</div>
      </div>


      <div class="dynamic-item" v-for="item, index in detailSource" :key="index">

        <div class="publisher-content">
          <img class="avatar" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" srcset="">
          <span class="nickname">nickname</span>
          <span class="time">06-01</span>

          <img class="gengduo" src="@/assets/image/gengduo.png" alt="" srcset="">
        </div>
        <img :src="item.dynamicImage" alt="" srcset="">
        <div class="title">{{ item.title }}</div>

        <div class="option-content">
          <div class="option-item">
            <img class="icon" src="@/assets/image/fenxiang.png" alt="" srcset="">
          </div>

          <div class="option-item">
            <img class="icon" src="@/assets/image/dianzan_1.png" alt="" srcset="">
            <span>点赞</span>
          </div>
          <div class="option-item">
            <img class="icon" src="@/assets/image/shoucang_1.png" alt="" srcset="">
            <span>收藏</span>
          </div>
          <div class="option-item">
            <img class="icon" src="@/assets/image/pinglun.png" alt="" srcset="">
            <span>评论</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const detailSource = ref([
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_ultra_detailed_artistic_abstract_photography_of_a_beau_0_cebf4a54-2feb-47dc-a730-d6fc3355a5cc_1.webp',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
  {
    dynamicImage: 'https://s1.imagehub.cc/images/2023/06/01/Default_European_young_woman_night_city_detailed_symmetric_cro_0_55f6808c-f1ab-4d83-b89e-16a8cd2c18b8_1.jpeg',
    title: '新疆的羊肉串好吃新疆的羊肉串好吃新疆的羊肉串好吃新',
    publisher: {
      avatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
      name: '馕坑烤肉'
    }
  },
])


const router = useRouter()

const active = ref(0)

const handleDetail = () => {
  router.push('/detail')
}

</script>

<style lang="less" scoped>
.dynamic-container {
  background-color: #ffffff;

  .dynamic-content {

    .dynamic-tab {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #f8f8f8;

      .tab-item {
        width: 80px;
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
      }
    }
    .dynamic-item {
      background-color: #ffffff;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 18px;

      >img {
        width: 100%;
        height: 400px;
      }

      .title {
        font-size: 12px;
        font-weight: bolder;
        color: #000000;
        padding: 12px;
      }

      .publisher-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;

        .avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        .nickname {
          font-size: 16px;
          color: #000000;
        }

        .time {
          font-size: 12px;
          color: #8d8c8c;
          margin-left: 12px;
        }

        .gengduo {
          width: 24px;
          height: 24px;
        }


      }

      .option-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;


        .option-item {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .icon {
            width: 24px;
            height: 24px;
          }

          span {
            font-size: 14px;
            color: #000000;
          }
        }




      }
    }
  }

}
</style>