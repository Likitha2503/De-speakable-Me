// 📁 src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>🛠️ Skills</h2>
      <p>MinionBot may look goofy, but check out these high-tech abilities:</p>

      <ul className="skills-list">
        <li><strong>🗣️ Voice Interaction:</strong> Understands and responds in real-time (with a Minion twist!)</li>
        <li><strong>🎙️ Minion Voice Synthesis:</strong> Converts text to audio with funny pitch & speed</li>
        <li><strong>🎥 Face Detection:</strong> Detects users and reacts with greetings</li>
        <li><strong>🔊 Sound Playback:</strong> Plays pre-recorded WAV/MP3 clips</li>
        <li><strong>⚙️ Customizable Personality:</strong> Mix AI logic with Minion charm</li>
        <li><strong>💬 Chatbot Engine:</strong> Powered by Cohere, GPT, or your own model</li>
      </ul>
    </section>
  );
}