import Header from './components/Header.jsx'
import CourseModule from './components/CourseModule.jsx'
import './styles.css'

function App() {

  return (
    <>
      <Header/>
      <CourseModule
      title="Introduction to React"
      description="Understanding the Virtual DOM."
      />
      <div></div>
    </>
  )
}

export default App