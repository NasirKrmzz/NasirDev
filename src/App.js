import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>
          <h1>NASIR KIRMIZI PORTFOLİO</h1>
          <nav>
            <a href="#main">Main</a>
            <a href="#buy-me-coffee">Buy Me a Coffee</a>
          </nav>
        </header>

        <main>
          <div className="main-content">
            <section>
              <h2>About Me</h2>
              <ul>
                <li>Nasır Kırmızı</li>
                <li>Türkiye</li>
                <li>Yazılım Geliştiricisi</li>
              </ul>
            </section>

            <section>
              <h2>Projects</h2>
              <p>A random selection of stuff I made:</p>
              <ol>
                <li><a href="https://onetinytool.com/">OneTinyTool.com</a>, My 100% AI Developed Tool Website</li>
                <li><a href="https://github.com/AllAboutAI-YT/easy-local-rag">Easy Local RAG</a>, Ollama 100% local AI RAG system (600+ stars)</li>
                <li><a href="https://github.com/AllAboutAI-YT/cursor_prompts">Cursor Prompts</a>, my prompt to speed up coding on Cursor</li>
                <li><a href="https://aiswe.tech/">This LLM Powered Website</a>, AI powered React website developed with Claude 3.5</li>
              </ol>
            </section>

            <section>
              <h2>İletişim / Sosyal Medya</h2>
              <ul>
                <li>Email (<a href="mailto:kris@allabtai.com">kris@allabtai.com</a>)</li>
                <li>GitHub (<a href="https://github.com/AllAboutAI-YT">Open GH</a>)</li>
                <li>LinkedIn (<a href="https://www.linkedin.com/in/kristian-fagerlie/">KF</a>)</li>
                <li>X (<a href="https://x.com/AllAbtAI">AAA</a>)</li>
              </ul>
            </section>
          </div>
        </main>

        <footer>
          <span>© AllAboutAI 2024, inspired by the original | <a href="https://sdomi.pl/">Sdomi</a></span>
        </footer>
      </div>
    </div>
  );
}

export default App;




