import React from "react"

interface CourseProps {
    course: {
        id: number
        name: string
        parts: {
            name: string
            exercises: number
            id: number
        }[]
    }
}

function Course({ course }: CourseProps) {
    return (
        <>
        <div>
            <h2>{course.name}</h2>
            <ul>
                {course.parts.map((part) => (
                    <li key={part.id}>
                        {part.name} ({part.exercises} exercises)
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3>Total of {course.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</h3>
        </div>
        </>

    )
}

export default Course
