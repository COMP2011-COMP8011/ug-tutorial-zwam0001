import { useState } from 'react';

function CourseModule({ title, description }) { 
    return(
    <div className="module-card">
        <h2> {title} </h2>
        <p> {description} </p>
    </div>
    )
 }
export default CourseModule;