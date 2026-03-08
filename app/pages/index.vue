<!-- HTML -->
<template>
  <div class="home_page">
    <div class="hero_section">
      <div class="hero_text">
        <h1>codedwithmpho</h1>
        <p class="subtitle">BIS Multimedia Student at University of Pretoria</p>
        <p class="bio">
            <u>Hi, I am Mpho!</u> I'm a BIS Multimedia student majoring in Computer Science who enjoys building
            clean, user-friendly websites and digital experiences. I like combining design
            and code to create interfaces that are both functional and visually engaging.
            Currently exploring modern web development and UI/UX design.
        </p>
        
        <!-- ____________________________________________ -->
        <!-- call to action buttons -->
        <div class="cta_buttons">
          <NuxtLink to="/projects" class="gradient_btn">View My Work</NuxtLink>
          <NuxtLink to="/contact" class="outline_btn">Contact Me</NuxtLink>
        </div>
      </div>
      
      <div class="hero_image">
        <!-- ____________________________________________ -->
        <!-- profile photo -->
        <div class="photo_frame">
          <img src="/images/portfolio_image.jpg" alt="Mpho" class="profile_photo">
        </div>
      </div>
    </div>

    <!-- ____________________________________________ -->
    <!-- decorative background elements -->
    <div class="gradient_circle circle_1"></div>
    <div class="gradient_circle circle_2"></div>
  </div>

    <!-- ____________________________________________ -->
    <!-- jokes API -->
  <div class="joke_section">
    <div v-if="pending" class="joke_container">
      <p>Loading a joke for you...</p>
    </div>

    <div v-else-if="error" class="joke_container">
      <p>Couldn't load a joke. Here's a classic:</p>
      <p class="joke_text">"Why do programmers prefer dark mode? Because light attracts bugs!"</p>
    </div>

    <div v-else class="joke_container">
      <h3 class="gradient_text">💻 Developer Joke</h3>
      <p class="joke_text">{{ joke.joke }}</p>
    </div>
  </div>
</template>

<!-- ___________________________________________________________________________ -->
<!-- CSS -->

<style scoped>
/* ____________________________________________ */
/* homepage container */
.home_page {
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

/* ____________________________________________ */
/* gradient text utility */
.gradient_text {
  background: linear-gradient(135deg, #1f6451, #58f58a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ____________________________________________ */
/* hero section layout */
.hero_section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
  width: 100%;
}

/* ____________________________________________ */
/* hero text styles */
.hero_text h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #58f58a;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.bio {
  font-size: 1.1rem;
  color: #cccccc;
  line-height: 1.8;
  margin-bottom: 2rem;
}

/* ____________________________________________ */
/* call to action buttons */
.cta_buttons {
  display: flex;
  gap: 1rem;
}

.gradient_btn {
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #1f6451, #58f58a);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: transform 0.3s;
}

.gradient_btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(31, 100, 81, 0.4);
}

.outline_btn {
  padding: 0.8rem 2rem;
  background: transparent;
  color: #58f58a;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  border: 2px solid #58f58a;
  transition: all 0.3s;
}

.outline_btn:hover {
  background: #58f58a;
  color: black;
}

/* ____________________________________________ */
/* hero image container */
.hero_image {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ____________________________________________ */
/* photo frame styles */
.photo_frame {
  width: 350px;
  height: 450px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #58f58a;
  box-shadow: 0 10px 30px rgba(88, 245, 138, 0.2);
  transition: transform 0.3s;
}

.photo_frame:hover {
  transform: scale(1.02);
  box-shadow: 0 15px 40px rgba(88, 245, 138, 0.3);
}

.profile_photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

/* ____________________________________________ */
/* decorative gradient circles */
.gradient_circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1f6451, #58f58a);
  filter: blur(100px);
  opacity: 0.1;
  z-index: 1;
}

.circle_1 {
  top: -100px;
  right: -100px;
}

.circle_2 {
  bottom: -100px;
  left: -100px;
}

/* ____________________________________________ */
/* mobile responsive styles */
@media (max-width: 768px) {
  .hero_section {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero_text h1 {
    font-size: 2.5rem;
  }
  
  .cta_buttons {
    justify-content: center;
  }
  
  .photo_frame {
    width: 280px;
    height: 360px;
    margin: 0 auto;
  }
}

/* ____________________________________________ */
/* joke api section */
.joke_section {
  margin-top: 2rem;
  width: 100%;
}

.joke_container {
  padding: 1.5rem;
  background: #000000; 
  border-radius: 10px;
  border: 3px solid #58f58a; 
  box-shadow: 0 10px 30px rgba(88, 245, 138, 0.2); 
  transition: transform 0.3s;
}

.joke_container:hover {
  transform: scale(1.02); 
  box-shadow: 0 15px 40px rgba(88, 245, 138, 0.3);
}

.joke_container h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: white;
}

.joke_text {
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  font-style: italic;
}
</style>

<!-- ___________________________________________________________________________ -->
<!-- JAVASCRIPT -->
<script setup>
//fetches from api
const { data: joke, pending, error } = await useFetch('/api/joke')
</script>