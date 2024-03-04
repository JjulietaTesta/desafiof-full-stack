// DEFINO CADA UNO DE LOS COMPONENTES CON LA PROP RESPECTIVA 

const Part = ({ part }) =>{
  return (
    <p> {part.name} {part.exercises}  </p>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p> Number of exercises {totalExercises}</p>
  )
};

// RENDERIZO LOS COMPONENTES 

const App = () => {
  const course = {
   name: 'Half Stack application development',
   parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises:7 
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
 
    return (
    
    <div>
      <Header course = {course} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App
