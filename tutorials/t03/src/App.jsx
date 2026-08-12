import Header from './components/Header.jsx'
import CourseModule from './components/CourseModule.jsx'
import './styles.css'

function App() {
const moduleData = [
  { 
    id: 1, 
    title: "Introduction to React & Vite", 
    description: "Scaffolding modern environments replacing older legacy bundlers." 
  },
  { 
    id: 2, 
    title: "JSX Syntax & Rules", 
    description: "Writing HTML-like markup directly inside our JavaScript files." 
  },
  { 
    id: 3, 
    title: "Components & Props", 
    description: "Passing data downwards to build reusable UI elements." 
  }
];

  return (
    <>
      <Header/>
      <div>{moduleData.map((module) => (
        <CourseModule
          key={module.id}
          title={module.title}
          description={module.description}
        />
      ))}</div>
    </>
  )
}

export default App