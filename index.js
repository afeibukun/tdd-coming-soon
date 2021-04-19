// List of to do items (accepts an array as props)
Vue.component("coming_soon", {
    template: `<div class='font-sans'>
    <section class="main-section px-4 bg-gray-900 text-white">
    <header class="container mx-auto ">
      <div class="brand"></div>
      <div class="menu"></div>
    </header>
    <div class="container mx-auto ">
    <div class="hero flex space-x-4 py-32">
      <div class="hero-side-a  w-3/5">
        <p class="text-lg font-light mb-10">Coming Soon</p>
        <h1 class="text-7xl font-bold w-4/5">Wanna <span class="text-gray-500">see</span> something <span class="text-gray-500">amazing</span>?</h1>
        <h3 class="text-2xl mt-10 font-normal">We will love to Notify you when we are ready to serve you</h3>
        <notify_me class="mt-10"></notify_me>
      </div>

      <div class="hero-side-b w-2/5">
        <div class="social-container w-80 mx-auto bg-white p-2 rounded-lg">
          <div class="image-container h-80 rounded-md bg-no-repeat bg-cover" style="background-image:url(https://picsum.photos/500/300);">
            
          </div>
          <social_links class="my-5  text-gray-800 text-2xl flex justify-around" ></social_links>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section class="base-section">
    <div class="base-group-a">
      <h2>Connect with the Tech Team</h2>
      <social_links forCompany=true ></social_links>
    </div>
    <div class="base-group-b">
      <div class="tech-team-brand"></div>
    </div>

    <div class="base-group-c">
      <div class="fun-fact-embed">
      </div>
    </div>
  </section></div>`,
});


Vue.component("notify_me", {
    template: `<div class="notify-me-container w-4/5">
    <div class="form-container relative">
      <div class="input-container">
        <input type="email" class="leading-loose px-5 py-2 w-full bg-gray-500 rounded-full outline-none" placeholder="Enter Your Email Address" />
      </div>
      <div class="submit-container button-container">
        <button type="submit" class="absolute inset-y-0.5 right-0.5 z-10 bg-gray-800 leading-3 px-10 py-3.5 rounded-full">Notify Me</button>
      </div>
    </div>
    <div class="notify-me-footer">
        <p class="text-gray-500 mt-5 text-lg font-medium">*Don't Worry we will not spam you</p>
      </div>
  </div>`,
  });

  Vue.component("social_links", {
    props: ["forCompany"],
    template: ` <div class="social-links">
    <i v-if='forCompany' class="far fa-envelope text-blue-700"></i>
    <i class="fab fa-facebook-f text-blue-800"></i>
    <i class="fab fa-twitter text-blue-300"></i>
    <i class="fab fa-instagram text-pink-700"></i>
    <i class="fab fa-youtube text-red-600"></i>
    <i v-if='forCompany' class="fas fa-globe text-gray-900"></i>
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