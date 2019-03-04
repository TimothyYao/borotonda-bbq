<template>
  <div>
    <div class="parallax hero">
      <div class="filter"></div>
      <h1>Our Menu</h1>
    </div>
    <div class="menu">
      <section v-for="(section, i) in menu" :key="i">
        <header>
          <h1>{{ section.header.main }}</h1>
          <p>{{ section.header.subheading }}</p>
        </header>
        <article v-for="(article, j) in section.articles" :key="j">
          <header>
            <h1>{{ article.header.main }}</h1>
            <p>{{ article.header.subheading }}</p>
          </header>
          <ul>
            <li v-for="(item, k) in article.items" :key="k">
              <h2>{{ item.main }}</h2>
              <p>{{ item.subheading }}</p>
            </li>
          </ul>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        header: {
          main: '• Protein •',
          subheading: 'Sources of essential amino acids',
        },
        articles: [
          {
            header: {
              main: 'Beef',
              subheading: '牛肉',
            },
            items: [
              { main: 'Wagyu | 꽃등심', subheading: 'dank beef' },
              { main: 'Chadol bakgi | 차돌 박이', subheading: 'fatty brisket' },
              { main: 'Short Rib | 갈비', subheading: 'slow cooked' },
            ],
          },
          {
            header: {
              main: 'Pork',
              subheading: '猪肉',
            },
            items: [
              { main: '3gs | 삼겹살', subheading: '3-layer pork belly' },
              { main: 'han jung sal | 항정살', subheading: 'pork jowl' },
            ],
          },
        ],
      },
      {
        header: {
          main: '• Sides •',
          subheading: "Eat these when you're hungry",
        },
        articles: [
          {
            header: {
              main: 'hot',
              subheading: '热',
            },
            items: [
              { main: 'Zhēng dàn | 蒸蛋', subheading: 'chinese steamed egg' },
              { main: 'fàn | 白饭', subheading: 'rice' },
            ],
          },
          {
            header: {
              main: 'cold',
              subheading: '冷',
            },
            items: [
              { main: 'mulnaeng-i | 물냉이', subheading: 'watercress salad' },
              { main: 'gamja | 으깬 감자', subheading: 'potato salad' },
              { main: 'kimchi | 김치', subheading: 'dank cabbage' },
            ],
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('https://www.maangchi.com/wp-content/uploads/2007/09/spinach-side-dish-1.jpg');
  height: 40vh;
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 60px;
  }
}

.menu {
  padding: 70px 0;
  margin: 0 auto;
  text-align: center;
  color: rgba(9, 21, 10, 0.92);
  section {
    h1 {
      text-transform: uppercase;
      font-size: 36px;
      padding: 20px;
    }
    p {
      font-size: 18px;
    }
    header {
      padding-bottom: 50px;
    }

    article {
      h1 {
        padding-bottom: 5px;
      }
      padding: 20px;
    }
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  list-style-type: none;
}
li {
  width: 33%;
  h2 {
    text-transform: uppercase;
    font-size: 20px;
    padding-bottom: 20px;
  }
  padding: 0 0 40px;
}

@media only screen and (max-width: 800px) {
  li {
    width: 100%;
  }
}
</style>
