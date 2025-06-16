import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = ['HTML+CSS', 'JavaScript', 'TypeScript', 'Web Design', 'Git and GitHub', 'React', 'Vue', 'Linux', 'Node.JS', 'MongoDB and Compass', 'Postman', 'Vuetify', 'Python', 'Hardware Integration'];

function App() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
                <Intro/>
                <SkillList skills={skills}/>
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <img className="avatar" alt="Avatar" src="/test.jpg"/>
    )
}

function Intro() {
    return (
        <div className="intro">
            <h1>Kwun Ming Chan</h1>
            <p>Full-stack web developer at Heruon LTD. When not coding, I like to play video games, to cook, or to just
                enjoy road trip.</p>
        </div>
    )
}

function SkillList(props) {
    const emojis = [
        "😀", "🎉", "🚀", "🌈", "🍕",
        "🐱", "⚡", "🌟", "🥑", "🦄",
        "🎧", "📚", "🍀", "🌻", "🧩"
    ];

    const colours = ['red', 'blue', 'green', 'yellow', 'cyan', 'purple', 'pink', 'orange'];

    return (
        <div className="skill-list">
            {props.skills.map((skill, index) => (
                <div className="skill" key={index}>
                    <span className="name" style={{
                        backgroundColor: colours[Math.floor(Math.random() * colours.length)],
                        padding: '6px',
                        borderRadius: '5px'
                    }}>{skill + emojis[Math.floor(Math.random() * emojis.length)]}</span>
                </div>
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

