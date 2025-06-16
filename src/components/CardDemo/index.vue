<template>
  <h1>Card</h1>

  <Demo :component="Card1" />
  <Demo :component="Card2" />
  <Demo :component="Card3" />
  <Demo :component="Card4" />
  <Demo :component="Card5" />
</template>

<script>
import Demo from '../Demo.vue'
import Card1 from './Card.default.demo.vue'
import Card2 from './Card.hover.demo.vue'
import Card3 from './Card.shadow.demo.vue'
import Card4 from './Card.slot.demo.vue'
import Card5 from './Card.type.demo.vue'

export default {
  components: {
    Demo,
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
  },
  setup() {
    return {
      Card1,
      Card2,
      Card3,
      Card4,
      Card5,
    }
  },
}
</script>
