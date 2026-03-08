<template>
  <div class="projects_page">
    <h1 class="page_title">My Projects</h1>
    <p class="page_subtitle">Here are some of the projects I've worked on</p>

    <div class="projects_grid">
      <!-- ____________________________________________ -->
      <!-- GITHUB PROJECTS (dynamic from API) -->
      <!-- loading state -->
      <div v-if="pending" class="loading_state">
        <p>Loading GitHub projects...</p>
      </div>

      <!-- error state -->
      <div v-else-if="error" class="loading_state">
        <p>Couldn't load GitHub projects</p>
      </div>

      <!-- show actual repos with custom images -->
      <template v-else>
        <div v-for="repo in githubRepos" :key="repo.id" class="project_card">
          <div class="project_image">
            <!-- Use different images for different repos -->
            <img 
              :src="repo.name === 'COS216-Projects' ? '/images/cos216_project.png' : '/images/imy110_project.png'" 
              :alt="repo.name"
              style="width: 100%; height: 100%; object-fit: cover;"
            >
          </div>
          <div class="project_content">
            <h3>{{ repo.name === 'COS216-Projects' ? 'COS216 Website' : 'IMY110 Game Website' }}</h3>
            <p class="project_category">{{ repo.language || 'Web Development' }}</p>
            <p class="project_description">
              {{ repo.description || 'A project from my university coursework' }}
            </p>
            <!-- ____________________________________________ -->
            <!-- tech stack -->
            <div class="project_tech">
              <span class="tech_tag">HTML</span>
              <span class="tech_tag">CSS</span>
            </div>
            <a :href="repo.html_url" target="_blank" class="project_link">View on GitHub →</a>
          </div>
        </div>
      </template>

      <!-- ____________________________________________ -->
      <!-- COMIC PROJECT -->
      <div class="project_card">
        <div class="project_image">
          <img src="/images/comic_cover.jpg" alt="Comic Cover" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="project_content">
          <h3>My Comic Project</h3>
          <p class="project_category">Visual Design 102 - Creative Work</p>
          <p class="project_description">
            A comic I created exploring storytelling through visual media. 
            This project showcases my illustration and narrative skills.
          </p>
          <div class="project_tech">
            <span class="tech_tag">Comic</span>
            <span class="tech_tag">Illustration</span>
            <span class="tech_tag">Storytelling</span>
          </div>
          
          <a href="/comic.pdf" target="_blank" class="project_link">View Comic →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ___________________________________________________________________________ -->
<!-- CSS -->

<style scoped>
/* ____________________________________________ */
/* page title styles */
.page_title {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #1f6451, #58f58a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  text-align: center;
}

.page_subtitle {
  text-align: center;
  color: #cccccc;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

/* ____________________________________________ */
/* projects grid layout */
.projects_grid {
  display: grid;
  gap: 2rem;
}

/* ____________________________________________ */
/* loading state */
.loading_state {
  text-align: center;
  padding: 2rem;
  color: #58f58a;
  background: #111111;
  border-radius: 15px;
  border: 3px solid #58f58a;
  grid-column: 1 / -1;
}

/* ____________________________________________ */
/* individual project card */
.project_card {
  background: #111111;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #333;
  display: grid;
  grid-template-columns: 300px 1fr;
  transition: all 0.3s;
}

.project_card:hover {
  transform: translateY(-5px);
  border-color: #58f58a;
  box-shadow: 0 8px 25px rgba(88, 245, 138, 0.2);
}

/* ____________________________________________ */
/* project image area */
.project_image {
  background: linear-gradient(135deg, #1f6451, #58f58a);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image_placeholder {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

/* ____________________________________________ */
/* project content area */
.project_content {
  padding: 2rem;
}

.project_content h3 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.project_category {
  color: #58f58a;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.project_description {
  color: #cccccc;
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

/* ____________________________________________ */
/* tech tags */
.project_tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech_tag {
  background: #222;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #58f58a;
  border: 1px solid #333;
}

/* ____________________________________________ */
/* project link */
.project_link {
  color: #58f58a;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  transition: color 0.3s;
}

.project_link:hover {
  color: #1f6451;
}

/* ____________________________________________ */
/* mobile responsive styles */
@media (max-width: 768px) {
  .project_card {
    grid-template-columns: 1fr;
  }
  
  .project_image {
    min-height: 150px;
  }
}
</style>

<!-- ___________________________________________________________________________ -->
<!-- JAVASCRIPT -->
<script setup>
// Fetch GitHub repos (only COS216 and IMY210)
const { data: githubRepos, pending, error } = await useFetch('/api/github')
</script>