<template>
  <div class="contact_page">
    <h1 class="page_title">Get In Touch</h1>
    <p class="page_subtitle">I'd love to hear from you. Send me a message!</p>

    <div class="contact_container">
      <div class="contact_info">
        <h3>Let's Connect</h3>
        <p>Feel free to reach out for collaborations or just a friendly hello.</p>
        <!-- ____________________________________________ -->
        <!-- contact details -->
        <div class="info_item">
          <span class="info_label">Email:</span>
          <span>mpho.m.official@gmail.com</span>
        </div>
        
        <div class="info_item">
          <span class="info_label">Location:</span>
          <span>Pretoria, South Africa</span>
        </div>
        
        <!-- ____________________________________________ -->
        <!-- social media links -->
        <div class="social_links">
          <a href="https://github.com/codedwithmpho" target="_blank" class="social_link">GitHub</a>
          <a href="https://www.linkedin.com/in/mpho-m-codes/" target="_blank" class="social_link">LinkedIn</a>
        </div>
      </div>
    <!-- ____________________________________________ -->
    <!-- contact form with Netlify Forms -->
      <form name="contact" method="POST" data-netlify="true" netlify class="contact_form">
        <!-- Required hidden input for Netlify -->
        <input type="hidden" name="form-name" value="contact" />
        
        <!-- ____________________________________________ -->
        <!-- name input field -->
        <div class="form_group">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="John Doe">
        </div>

        <!-- ____________________________________________ -->
        <!-- email input field -->
        <div class="form_group">
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" required placeholder="john@example.com">
        </div>

        <!-- ____________________________________________ -->
        <!-- message textarea -->
        <div class="form_group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
        </div>

        <!-- ____________________________________________ -->
        <!-- submit button -->
        <button type="submit" class="submit_btn">Send Message</button>
      </form>
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
/* main contact container */
.contact_container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  background: #111111;
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #333;
}

/* ____________________________________________ */
/* left column - contact info */
.contact_info h3 {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact_info p {
  color: #cccccc;
  margin-bottom: 2rem;
  line-height: 1.8;
}

/* ____________________________________________ */
/* individual info items */
.info_item {
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
}

.info_label {
  font-weight: bold;
  color: #58f58a;
  margin-right: 1rem;
  min-width: 80px;
  display: inline-block;
}

/* ____________________________________________ */
/* social media links */
.social_links {
  margin-top: 2rem;
}

.social_link {
  display: inline-block;
  margin-right: 1rem;
  color: #58f58a;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #1f6451;
  border-radius: 5px;
  transition: all 0.3s;
}

.social_link:hover {
  background: linear-gradient(135deg, #1f6451, #58f58a);
  color: white;
  border-color: transparent;
}

/* ____________________________________________ */
/* right column - contact form */
.contact_form {
  background: #000000;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #333;
}

/* ____________________________________________ */
/* form group container */
.form_group {
  margin-bottom: 1.5rem;
}

/* ____________________________________________ */
/* form labels */
.form_group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #58f58a;
  font-weight: 500;
}

/* ____________________________________________ */
/* form inputs & textarea */
.form_group input,
.form_group textarea {
  width: 100%;
  padding: 0.8rem;
  background: #111111;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s;
}

/* ____________________________________________ */
/* input focus state */
.form_group input:focus,
.form_group textarea:focus {
  outline: none;
  border-color: #1f6451;
  box-shadow: 0 0 10px rgba(31, 100, 81, 0.3);
}

/* ____________________________________________ */
/* placeholder text styles */
.form_group input::placeholder,
.form_group textarea::placeholder {
  color: #666;
}

/* ____________________________________________ */
/* submit button */
.submit_btn {
  background: linear-gradient(135deg, #1f6451, #58f58a);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
  width: 100%;
  font-weight: bold;
}

.submit_btn:hover {
  transform: scale(1.02);
  box-shadow: 0 5px 20px rgba(31, 100, 81, 0.4);
}

/* ____________________________________________ */
/* mobile responsive styles */
@media (max-width: 768px) {
  .contact_container {
    grid-template-columns: 1fr;
  }
}
</style>