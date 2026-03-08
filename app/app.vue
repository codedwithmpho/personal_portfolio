<template>
  <div class="site_wrapper">
    <header class="header">
      <div class="container">
        <h1 class="logo">codedwithmpho</h1>
        <nav class="nav">
          <NuxtLink to="/" class="nav_link">Home</NuxtLink>
          <NuxtLink to="/projects" class="nav_link">Projects</NuxtLink>
          <NuxtLink to="/contact" class="nav_link">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="main_content">
      <div class="container">
        <NuxtPage />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 codedwithmpho. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background-color: #000000;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  background-color: #000000;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #1f6451, #58f58a) 1;
  padding: 1rem 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #1f6451, #58f58a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav_link {
  color: #ffffff;
  text-decoration: none;
  margin-left: 2rem;
  padding: 0.5rem 0;
  transition: all 0.3s;
  position: relative;
}

.nav_link:hover {
  color: #58f58a;
}

.nav_link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #1f6451, #58f58a);
  transition: width 0.3s;
}

.nav_link:hover::after {
  width: 100%;
}

/* Main content */
.main_content {
  min-height: calc(100vh - 200px);
  padding: 3rem 0;
  background-color: #000000;
}

/* Footer */
.footer {
  background-color: #000000;
  border-top: 2px solid;
  border-image: linear-gradient(to right, #1f6451, #58f58a) 1;
  color: #ffffff;
  text-align: center;
  padding: 1.5rem 0;
  margin-top: auto;
}
</style>