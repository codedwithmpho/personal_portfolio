// This file runs on the server, not in your browser
export default defineEventHandler(async (event) => {
  // 'defineEventHandler' creates an API endpoint
  // 'async' means this will take time (waiting for the joke)
  
  try {
    // This is where we ask JokeAPI for a joke
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    
    // Convert the response from JSON to a JavaScript object
    const data = await response.json()
    
    // Send just the joke part back to our website
    return { 
      joke: data.joke || "Why do programmers prefer dark mode? Because light attracts bugs!" 
    }
    
  } catch (error) {
    // If anything goes wrong, return a backup joke
    return { 
      joke: "Why do programmers prefer dark mode? Because light attracts bugs!" 
    }
  }
})