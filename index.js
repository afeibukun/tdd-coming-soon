// List of to do items (accepts an array as props)
Vue.component("coming-soon", {
    props: ["fb_link", "twitter_link", "ig_link", "yt_link","image_link","company_name"],
    template: `<div class='font-sans'>
    <section class="main-section px-4 bg-gray-900 text-white">

    <page-header :company_name="company_name" :image_link="image_link"></page-header>

    <div class="container mx-auto ">
    <div class="hero md:flex  md:space-x-4 md:py-32 py-8">
      <div class="hero-side-a  w-full md:w-3/5">
        <p class="md:text-lg text-md font-light md:mb-10 mb-5">Coming Soon</p>
        <h1 class="md:text-7xl text-3xl font-bold md:w-4/5">Wanna <span class="text-gray-500">see</span> something <span class="text-gray-500">amazing</span>?</h1>
        <h3 class="md:text-2xl text-md md:mt-10 mt-5 font-normal">We will love to Notify you when we are ready to serve you</h3>
        <notify-me class="mt-10"></notify-me>
      </div>

      <div class="hero-side-b w-full md:w-2/5 md:mt-0 mt-10">
        <div class="social-container max-w-80 mx-auto bg-white p-2 rounded-lg">
          <div class="image-container h-80 rounded-md bg-no-repeat bg-cover" style="background-image:url(https://picsum.photos/500/300);">
            
          </div>
          <social_links :fb_link="fb_link" :twitter_link="twitter_link"  :ig_link = "ig_link" :yt_link= "yt_link" class="my-5  text-gray-800 text-2xl flex justify-around" ></social_links>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section class="base-section px-4 bg-gray-300 text-gray-900 py-14">
  <div class="container  mx-auto md:flex items-center">
    <div class="base-group-a md:w-1/3">
      <h2 class="md:text-4xl text-xl font-bold" >Connect with the Tech Team</h2>
      <social_links forCompany=true email="hello@desdistrict.com" fb_link="https://facebook.com/thedesdistrict" twitter_link="https://twitter.com/thedesdistrict" ig_link= "https://www.instagram.com/thedesdistrict/" yt_link="https://www.youtube.com/channel/UCunYw7xnbCziAthoLEIzLHw" website="https://desdistrict.com/" class="md:block flex justify-around mt-5" ></social_links>
    </div>
    <div class="base-group-b md:w-1/3 md:mt-0 mt-10">
      <div class="tech-team-brand">
      <a class="" href="https://desdistrict.com" target="_blank">
        <img src="https://desdistrict.com/wp-content/uploads/2020/09/tdd-logo-coloured.png" class="w-40 mx-auto" /></a>
      </div>
    </div>

    <div class="base-group-c md:w-1/3 md:mt-0 mt-10">
    <a href="https://desdistrict.com/work/" target="_blank" >
      <div class="tech-team-projects ttp flex bg-gray-100 rounded-lg overflow-hidden">
        <div class="ttp-image w-5/12 h-auto bg-no-repeat bg-center bg-cover" style="background-image:url(https://desdistrict.com/wp-content/uploads/2020/10/web-page-grouped-transparent-1024x683.png);">
        </div>
        <div class="ttp-text p-2 py-8">
          <h4 class="text-xl font-bold">Amazing Projects from your favorite tech team</h4>
          <a href="https://desdistrict.com/work/" class="inline-block my-1 text-sm font-medium py-1.5 px-6 bg-yellow-400 rounded-xl">See All Here</a>
        </div>
      </div>
      </a>
    </div>
    </div>
  </section></div>`,
});

Vue.component("page-header", {
  props: ["company_name", "image_link"],
  template: ` <header class="container mx-auto py-8 ">
  <div class="brand flex items-center">
    <div class="brand-icon w-20 mr-4">
      <img class="w-20 rounded-2xl" :src="image_link"/>
    </div>
    <div class="brand-text">
      <p class="font-medium text-xl">{{ company_name }}</p>
    </div>
  </div>
  <div class="menu"></div>
</header>`,
});

Vue.component("notify-me", {
    template: `<div class="notify-me-container md:w-4/5">
    <div class="form-container relative">
      <div class="input-container">
        <input type="email" class="leading-loose px-5 py-2 w-full bg-gray-500 rounded-full outline-none" placeholder="Enter Your Email Address" />
      </div>
      <div class="submit-container button-container">
        <button type="submit" class="absolute inset-y-0.5 right-0.5 z-10 bg-gray-800 leading-3 px-10 py-3.5 rounded-full outline-none">Notify Me</button>
      </div>
    </div>
    <div class="notify-me-footer">
        <p class="text-gray-500 md:mt-5 md:text-lg text-sm md:font-medium font-normal md:text-left text-center">*Don't Worry we will not spam you</p>
      </div>
  </div>`,
  });

  Vue.component("social_links", {
    props: ["forCompany", "email", "fb_link", "twitter_link", "ig_link", "yt_link", "website"],
    template: ` <div class="social-links">
    <a v-if='forCompany' :href="'mailto:'+email" target="_blank">
      <i class="far fa-envelope text-blue-700"></i>
    </a>

    <a :href="fb_link" target="_blank">
      <i class="fab fa-facebook-f text-blue-800"></i>
    </a>

    <a :href="twitter_link" target="_blank">
      <i class="fab fa-twitter text-blue-300"></i>
    </a>

    <a :href="ig_link" target="_blank">
      <i class="fab fa-instagram text-pink-700"></i>
    </a>

    <a :href="yt_link" target="_blank">
      <i class="fab fa-youtube text-red-600"></i>
    </a>

    <a v-if='forCompany' :href="website" target="_blank">
      <i class="fas fa-globe text-gray-900"></i>
    </a>
  </div>`,
  });

/*  <script
src="http://q.justfactsdaily.com/embed.js"
type="text/javascript"
></script> */

new Vue({
    el: "#page",
    data: {
      message: "🐵 Hello World 🔮",
      timestamp: `Timestamp ${new Date().toLocaleString()}`,
    },
  });