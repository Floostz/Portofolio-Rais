import { Component, createSignal } from 'solid-js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';

// Your Firebase configuration - replace with your actual config values
const firebaseConfig = {
  apiKey: "AIzaSyDeMuGnITnv4oD9D4v53P7bmuL8V3itR_g",
  authDomain: "portofolio-464f8.firebaseapp.com",
  projectId: "portofolio-464f8",
  storageBucket: "portofolio-464f8.firebasestorage.app",
  messagingSenderId: "137935826929",
  appId: "1:137935826929:web:43ecb01af6507662271e50",
  measurementId: "G-B2VN32PGV0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Contact: Component = () => {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');
  const [submitted, setSubmitted] = createSignal(false);
  const [submitting, setSubmitting] = createSignal(false);
  const [error, setError] = createSignal('');

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    const formData = {
      name: name(),
      email: email(),
      message: message(),
      timestamp: new Date().toISOString()
    };
    
    try {
      // Send data to Firebase Realtime Database
      const messagesRef = ref(database, 'messages');
      await push(messagesRef, formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Error saving message:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div class="contact-container">
      <h2>Contact Me</h2>
      
      <div class="contact-content">
        <div class="contact-info">
          <h3>Get In Touch</h3>
          <p>I'm open to job opportunities, freelance projects, or just a friendly chat about technology.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-label">Email:</span>
              <span class="contact-value">fawwazaziz291@gmail.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Phone:</span>
              <span class="contact-value">+6281392414286</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">Vercel:</span>
              <span class="contact-value">vercel.com/floostzs-projects</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">GitHub:</span>
              <span class="contact-value">github.com/floostzs</span>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <form class="contact-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                id="name" 
                type="text" 
                value={name()} 
                onInput={(e) => setName(e.target.value)} 
                required 
                disabled={submitting()}
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                id="email" 
                type="email" 
                value={email()} 
                onInput={(e) => setEmail(e.target.value)} 
                required 
                disabled={submitting()}
              />
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                value={message()} 
                onInput={(e) => setMessage(e.target.value)} 
                required
                disabled={submitting()}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="submit-btn" 
              disabled={submitting()}
            >
              {submitting() ? 'Sending...' : 'Send Message'}
            </button>
            
            {error() && (
              <div class="submission-error">
                {error()}
              </div>
            )}
            
            {submitted() && (
              <div class="submission-success">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;