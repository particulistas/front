<template>
    <div>
      <Layout>
        <div class="px-4 lg:px-0 bg-[#F3F3F3]">
            <HeroSection />
            <SearchSection />
            <WithUsSection />
        </div>
        <div class="px-4 lg:px-0 bg-white">
          <!-- <Services /> -->
          <ReviewsSection />
          <NoticesSection />
        </div>
      </Layout>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Layout from '~/layouts/default.vue'
import HeroSection from './home/heroSection.vue'
import SearchSection from './home/searchSection.vue'
import WithUsSection from './home/withUsSection.vue'
// import Services from './home/servicesSection.vue'
import ReviewsSection from './home/reviewsSection.vue'
import NoticesSection from './home/noticesSection.vue'

</script>
    