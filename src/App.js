import Home from './components/Home';
import Project from './components/Projects';
import Contact from './components/Contact';
import Analytics from '@vercel/analytics'


function App() {
  return (
    <div className="h-screen">
      <Home />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
