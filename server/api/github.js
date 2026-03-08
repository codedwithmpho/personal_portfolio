export default defineEventHandler(async (event) => {
  try {
    const response = await fetch('https://api.github.com/users/codedwithmpho/repos')
    const repos = await response.json()
    
    // Filter ONLY the repos you want to showcase
    const featuredRepos = repos.filter(repo => 
      repo.name === 'COS216-Projects' || 
      repo.name === 'IMY210-Projects'
    )
    
    return featuredRepos
  } catch (error) {
    return []
  }
})