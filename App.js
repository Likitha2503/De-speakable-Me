// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'hardware', 'software', 'use-cases'];
      const scrollPosition = window.scrollY + 100; // Adding offset for header
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header Navigation */}
      <header className="robo-header">
        <div className="logo">
          <span className="robo-text">DEE-SPEAKABLE-ME</span>
          <small className="blink">v1.0</small>
        </div>
        
        <nav className="robo-nav">
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <button onClick={() => scrollToSection('home')}>
                <span className="nav-icon">⌂</span>
                <span className="nav-text">HOME</span>
              </button>
            </li>
            <li className={activeSection === 'skills' ? 'active' : ''}>
              <button onClick={() => scrollToSection('skills')}>
                <span className="nav-icon">⚙</span>
                <span className="nav-text">SKILLS</span>
              </button>
            </li>
            <li className={activeSection === 'hardware' ? 'active' : ''}>
              <button onClick={() => scrollToSection('hardware')}>
                <span className="nav-icon">⚡</span>
                <span className="nav-text">HARDWARE</span>
              </button>
            </li>
            <li className={activeSection === 'software' ? 'active' : ''}>
              <button onClick={() => scrollToSection('software')}>
                <span className="nav-icon">⌨</span>
                <span className="nav-text">SOFTWARE</span>
              </button>
            </li>
            <li className={activeSection === 'use-cases' ? 'active' : ''}>
              <button onClick={() => scrollToSection('use-cases')}>
                <span className="nav-icon">✓</span>
                <span className="nav-text">USE CASES</span>
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="mode-toggle">
          <button 
            className="mode-toggle-btn" 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* HOME SECTION */}
        <DeespeakableMe darkMode={darkMode} id="home" />
        
        {/* SKILLS SECTION */}
        <section id="skills" className="section skills-section">
          <div className="section-container">
            <h1 className="section-title">Minion Skills</h1>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">🍌</div>
                <h2>The Brain</h2>
                <p>Powerer by a raspberry pi and a power bank, Dee-speakable-Me powers its computation, thinking, and working through this brain.</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔧</div>
                <h2>Vision</h2>
                <p>Is able to view through camera and detect faces and about 80 different objects including a Banana!</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎵</div>
                <h2>Minion Language</h2>
                <p>Fluent in the unique and entertaining Minion dialect.</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">👖</div>
                <h3>Speech</h3>
                <p>Listens to you and any commands, and answers like a minion.</p>
              </div>
            </div>
            <RandomMinion size="medium" position="top-right" darkMode={darkMode} />
            <RandomMinion size="medium" position="bottom-left" darkMode={darkMode} />
          </div>
        </section>
        
        {/* HARDWARE SECTION */}
        <section id="hardware" className="section hardware-section">
          <div className="section-container">
            <h2 className="section-title">Hardware Specifications</h2>
            <div className="hardware-specs">
              <div className="spec-group">
                <h3>Optical Systems</h3>
                <h2>Optical Systems</h2>
                  <ul className="spec-list">
                        <li><span className="spec-label">Vision:</span> Raspberry Pi Camera Module with real-time image processing</li>
                        <li><span className="spec-label">Object Detection:</span> YOLOv5-powered object tracking (can recognize bananas!)</li>
                        <li><span className="spec-label">Face Detection:</span> Locates and greets users using OpenCV</li>
                      </ul>
              </div>
              <div className="spec-group">
                <h2>Power Supply</h2>
<ul className="spec-list">
  <li><span className="spec-label">Power Source:</span> 10000mAh Power Bank</li>
  <li><span className="spec-label">Distribution:</span> Breadboard power module + 5V regulators</li>
  <li><span className="spec-label">Battery Life:</span> 4–6 hours of non-stop minion mischief</li>
</ul>

              </div>
              <div className="spec-group">
              
                <h2>Audio I/O</h2>
<ul className="spec-list">
  <li><span className="spec-label">Speaker Module:</span> 3.5mm jack-powered audio output for Minion voice playback</li>
  <li><span className="spec-label">Microphone Module:</span> Voice input for speech recognition (commands, conversations)</li>
  <li><span className="spec-label">TTS Engine:</span> High-pitch, speed-modified Minion-style voice responses</li>
</ul>

              </div>

              <div className="spec-group">
              
                <h2>Visual Feedback</h2>
<ul className="spec-list">
  <li><span className="spec-label">OLED Screen:</span> 0.96\" display for eye animations, responses, or system info</li>
  <li><span className="spec-label">UI Sync:</span> Displays what the bot is saying or thinking in real-time</li>
  <li><span className="spec-label">Custom Icons:</span> Mood-based expressions and Minion eyes</li>
</ul>


              </div>
            </div>
            <RandomMinion size="large" position="center-right" darkMode={darkMode} />
            <RandomMinion size="tiny" position="bottom-right" darkMode={darkMode} />
          </div>
        </section>
        

        /* SOFTWARE SECTION */
<section id="software" className="section software-section">
  <div className="section-container">
    <h2 className="section-title">Software Capabilities</h2>
    <div className="hardware-specs">

      <div className="spec-group">
        <h2>Speech Recognition</h2>
        <ul className="spec-list">
          <li><span className="spec-label">Input Mode:</span> Listens for voice commands via microphone module</li>
          <li><span className="spec-label">Processing:</span> Uses speech-to-text libraries like Vosk or Web Speech API</li>
          <li><span className="spec-label">Purpose:</span> Translates your voice into chatbot-ready text</li>
        </ul>
      </div>

      <div className="spec-group">
        <h2>Text-to-Speech (Minion Voice)</h2>
        <ul className="spec-list">
          <li><span className="spec-label">Engine:</span> gTTS or pyttsx3 for voice generation</li>
          <li><span className="spec-label">Pitch Shift:</span> Modifies output with pydub to sound like a Minion</li>
          <li><span className="spec-label">Output:</span> Plays response using speaker module</li>
        </ul>
      </div>

      <div className="spec-group">
        <h2>AI Chatbot Engine</h2>
        <ul className="spec-list">
          <li><span className="spec-label">Base Model:</span> Powered by Cohere or GPT</li>
          <li><span className="spec-label">Function:</span> Generates smart (and silly) Minion-style responses</li>
          <li><span className="spec-label">Customization:</span> You can tweak its personality & behavior</li>
        </ul>
      </div>

      <div className="spec-group">
        <h2>Object & Face Detection</h2>
        <ul className="spec-list">
          <li><span className="spec-label">Vision Source:</span> Live feed from camera module</li>
          <li><span className="spec-label">Detection:</span> YOLOv5 + OpenCV identifies faces & bananas</li>
          <li><span className="spec-label">Reaction:</span> Bot can respond or greet based on input</li>
        </ul>
      </div>

      <div className="spec-group">
        <h2>UI & OLED Display</h2>
        <ul className="spec-list">
          <li><span className="spec-label">Screen Output:</span> Minion eyes, system messages, or emotes</li>
          <li><span className="spec-label">UI Sync:</span> React web interface reflects real-time status</li>
          <li><span className="spec-label">Dark Mode:</span> Full visual theme support</li>
        </ul>
      </div>

    </div>
    <RandomMinion size="medium" position="bottom-left" darkMode={darkMode} />
  </div>
</section>

        
        {/* USE CASES SECTION */}
        <section id="use-cases" className="section use-cases-section">
          <div className="section-container">
            <h1 className="section-title">Practical Use Cases</h1>
            <div className="use-cases-grid">
              <div className="use-case">
                <div className="use-case-icon">🎪</div>
                <h2>Entertainment</h2>
                <p>Perfect for parties, events, and general amusement with unpredictable antics and comedic timing.</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🏗️</div>
                <h2>Tut</h2>
                <p>Works well in teams to build remarkable structures, despite occasional catastrophic failures.</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🧪</div>
                <h3>Laboratory Assistant</h3>
                <p>Enthusiastic lab helpers, though results may vary widely from intended outcomes.</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🍽️</div>
                <h3>Food Services</h3>
                <p>Particularly motivated in kitchens, especially when recipes involve tropical fruits.</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🔍</div>
                <h3>Investigation</h3>
                <p>Natural curiosity makes them excellent at discovering hidden objects or creating distractions.</p>
              </div>
              <div className="use-case">
                <div className="use-case-icon">📱</div>
                <h3>Tech Support</h3>
                <p>Unconventional but occasionally effective approach to technological problems.</p>
              </div>
            </div>
            <RandomMinion size="large" position="center-left" darkMode={darkMode} />
            <RandomMinion size="tiny" position="top-right" darkMode={darkMode} />
            <RandomMinion size="small" position="bottom-right" darkMode={darkMode} />
          </div>
        </section>
      </main>
      
      <footer className={`robo-footer ${darkMode ? 'dark' : ''}`}>
        <p>© 2025 Deespeakable.Me - All Rights Reserved</p>
        <p>Powered by Banana Technology</p>
      </footer>
    </div>
  );
}

// Deespeakable Me Component (Home Section)
function DeespeakableMe({ darkMode, id }) {
  const [speechText, setSpeechText] = useState('');
  const [speechVisible, setSpeechVisible] = useState(false);
  const pupilRef = useRef(null);
  const minionRef = useRef(null);

  // Array of minion phrases
  const minionPhrases = [
    "Bello!",
    "Banana!",
    "Poopaye!",
    "Tank yu!",
    "Tulaliloo ti amo!",
    "Beedoo! Beedoo!",
    "Patatá!",
    "Me want banana!",
    "Muak muak muak!",
    "La boda!",
    "Underwear...",
    "Bee do bee do bee do!",
    "Stupa! Stupa!",
    "Para tú!",
    "Me no like!",
    "Poulet tikka masala!"
  ];

  // Function to handle mouse movement for eye tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!pupilRef.current) return;
      
      const eye = pupilRef.current.parentElement;
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;
      
      // Calculate angle between mouse and eye center
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      
      // Calculate maximum distance for pupil movement (30% of eye radius)
      const maxDistance = eyeRect.width * 0.3;
      const distance = Math.min(
        maxDistance,
        Math.sqrt(Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2))
      );
      
      // Calculate new pupil position
      const x = Math.cos(angle) * distance * 0.5;
      const y = Math.sin(angle) * distance * 0.5;
      
      // Apply transformation
      pupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to make the minion speak
  const handleSpeak = () => {
    // Get random phrase
    const randomPhrase = minionPhrases[Math.floor(Math.random() * minionPhrases.length)];
    
    // Show speech bubble
    setSpeechText(randomPhrase);
    setSpeechVisible(true);
    
    // Hide speech bubble after 3 seconds
    setTimeout(() => {
      setSpeechVisible(false);
    }, 3000);
    
    // Add a little jump animation to the minion
    if (minionRef.current) {
      minionRef.current.classList.remove('jump');
      // Force reflow
      void minionRef.current.offsetWidth;
      minionRef.current.classList.add('jump');
    }
  };

  return (
    <section id={id} className="section intro-section">
      <div className="intro-text">
        <h1>Deespeakable Me</h1>
        <p>Hello there! I'm Deespeakable Me, your friendly minion assistant!</p>
        <p>I speak a funny language but I'll try my best to communicate with you!</p>
        <button id="speak-button" onClick={handleSpeak}>Talk to Me!</button>
        <div id="message-container"></div>
      </div>
      
      <div className="minion-container">
        <div className="minion" ref={minionRef}>
          <div className={`minion-body ${darkMode ? 'minion-dark' : ''}`}>
            <div className="goggle-strap"></div>
            <div className="eye">
              <div className="pupil" ref={pupilRef}></div>
            </div>
            <div className="mouth">
              <div className="tooth"></div>
              <div className="tooth"></div>
            </div>
            <div className={`overall ${darkMode ? 'overall-dark' : ''}`}>
              <div className={`pocket ${darkMode ? 'pocket-dark' : ''}`}></div>
            </div>
            <div className={`overall-strap ${darkMode ? 'overall-dark' : ''}`}></div>
            <div className="hair"></div>
            <div className="hair"></div>
            <div className="hair"></div>
          </div>
          <div className={`arm left-arm ${darkMode ? 'minion-dark' : ''}`}>
            <div className="hand"></div>
          </div>
          <div className={`arm right-arm ${darkMode ? 'minion-dark' : ''}`}>
            <div className="hand"></div>
          </div>
          <div className={`leg left-leg ${darkMode ? 'overall-dark' : ''}`}>
            <div className="shoe left-shoe"></div>
          </div>
          <div className={`leg right-leg ${darkMode ? 'overall-dark' : ''}`}>
            <div className="shoe right-shoe"></div>
          </div>
        </div>
        <div className={`speech-bubble ${speechVisible ? 'visible' : ''} ${darkMode ? 'speech-dark' : ''}`}>
          {speechText}
        </div>
      </div>
      
      <div id="scroll-prompt" className={darkMode ? 'scroll-dark' : ''}>
        Scroll down or use menu to explore!
      </div>
    </section>
  );
}

// Random Minion Component
function RandomMinion({ size, position, darkMode }) {
  const randomDegree = Math.floor(Math.random() * 360);
  
  const sizeClass = {
    'tiny': 'minion-tiny',
    'small': 'minion-small',
    'medium': 'minion-medium',
    'large': 'minion-large'
  }[size] || 'minion-small';
  
  const positionClass = {
    'top-left': 'position-top-left',
    'top-right': 'position-top-right',
    'bottom-left': 'position-bottom-left',
    'bottom-right': 'position-bottom-right',
    'center-left': 'position-center-left',
    'center-right': 'position-center-right',
    'bottom-center': 'position-bottom-center',
  }[position] || 'position-top-right';
  
  return (
    <div className={`random-minion ${sizeClass} ${positionClass}`} style={{ transform: `rotate(${randomDegree}deg)` }}>
      <div className={`minion-body-simple ${darkMode ? 'minion-dark' : ''}`}>
        <div className="eye-simple"></div>
        <div className={`overall-simple ${darkMode ? 'overall-dark' : ''}`}></div>
      </div>
    </div>
  );
}



export default App;