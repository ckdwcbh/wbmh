<template>
  <div class="page">
    <div class="search_header">
      <form method="get" action="javascript:void(0);">
        <div class="search_ferame">
          <span class="search_ferame_icon" @click="handleClick(searchVal)">
            <img src="../../assets/img/img_03.png" alt />
          </span>
          <input :placeholder="keyword" v-model="searchVal"/>
          <span class="search_clear_cion" style="display: none;"></span>
        </div>
      </form>
      <router-link to="/search">
        <div class="search_fix_btn">
          <span>取消</span>
        </div>
      </router-link>
    </div>

    <div class="searchMain" v-if="showCard">
      <div class="searchBox" v-for="item in list" :key="item.comic_id">
        <dl>
          <dt>
            <img :src="item.cover" alt />
          </dt>
          <dd>
            <p class="pTop">{{item.name}}</p>
            <p class="pCenter">{{item.sina_nickname}}</p>
            <p class="pBottom"><span v-for="p in item.cates" :key="p.cate_id" class="nspan">{{p.cate_name}}</span></p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { getSerachResult } from '@/api/cartoon'
export default {
  name: 'SearchResult',
  data () {
    return {
      keyword: this.$route.query.keyword,
      showCard: false,
      list: [],
      searchVal: ''
    }
  },
  methods: {
    handleClick (keyword) {
      this.saveSearch(keyword)
      this.$router.push({
        path: '/search-result',
        query: {
          keyword
        }
      })
    },
    saveSearch (keyword) {
      let tmp = window.localStorage.getItem('search')
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      if (tmp.includes(keyword)) {
        return
      }
      tmp.push(keyword)
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },
    getSerachResult (word) {
      getSerachResult(word).then(res => {
        this.showCard = true
        this.list = res.data.data.data
      })
    }
  },

  created () {
    this.getSerachResult(this.keyword)
  }

}
</script>

<style lang="scss" sscoped>
.searchMain {
  flex: 1;
  overflow: auto;
}
.searchBox {
  padding: 8px 8px 8px 16px;
  dl {
    display: flex;
    dt {
      float: left;
      width: 72px;
      height: 96px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      float: right;
      width: 216px;
      height: 72px;
      .pTop {
        height: 28px;
        color: #Ff0000;
        line-height: 28px;
        font-size: 14px;
      }
      .pCenter {
        height: 16px;
        color: #999;
        line-height: 16px;
        font-size: 12px;
      }
      .pBottom {
        height: 16px;
        color: #999;
        margin-top: 10px;
        line-height: 16px;
        font-size: 12px;
      }
      .nspan{
        margin-right: 4px;
      }
    }
  }
}
</style>
