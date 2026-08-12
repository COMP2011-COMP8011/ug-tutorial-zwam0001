function CourseModule({ title, description, topics = [] }) { 
    return(
     <section className="module-card">
      <h2>{title}</h2>
      <p>{description}</p>

      {topics.length > 0 && (
        <ul className="topic-list">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      )}
    </section>
    );
 }

export default CourseModule;