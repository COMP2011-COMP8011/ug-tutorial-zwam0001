import Header from './components/Header.jsx'
import CourseModule from './components/CourseModule.jsx'
import './styles.css'

function App() {
const moduleData = [
  { 
    id: 1, 
    title: "Introduction to React & Vite", 
    description: "Scaffolding modern environments replacing older legacy bundlers.",
    topics: ["Vite Initialization", "NPM Dependencies", "Hot Module Replacement"]
  },
  { 
    id: 2, 
    title: "Component-Based Architecture", 
    description: "Dividing interfaces into independent, reusable structural blocks.", 
    topics: ["JSX Syntax", "Functional Components", "React Fragments"]
  },
  { 
    id: 3, 
    title: "Unidirectional Data Flow", 
    description: "Passing immutable arguments securely into functional components.",
    topics: ["The Props Object", "Object Destructuring", "Array Mapping", "Virtual DOM Keys"]
  },
];

  return (
    <div className="app-container">
      <Header/>
      {moduleData.map((module) => (
        <CourseModule
          key={module.id}
          title={module.title}
          description={module.description}
          topics={module.topics}
        />
      ))}
    </div>
  );
}

export default App