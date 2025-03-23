import React from 'react';

function App() {
  return (
    <div>
      <UserName />
      <hr></hr>
      <CourseName />
      <ListTopicsCourse />
    </div>
  );
}

// Завдання 1. Створити та використати компонент для відображення власного ім'я.
function UserName() {
  return <h1>Моє ім'я: Андрій!</h1>;
}

function CourseName() {
  return <h2>Назва курсу: ПЗ-21</h2>;
}

function ListTopicsCourse() {
  return <ul><h3>Список тем курсу</h3>
    <li>OOP</li>
    <li>IoT Platform</li>
    <li>English</li>
    <li>WEB programming</li>
  </ul>;
}

export default App;
