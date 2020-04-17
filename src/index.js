import React from "react";
import ReactDom from "react-dom";
import "./index.css"

//ES6, Nested Components and React Tools

function Greeting() {
  return (
    <section className="Greeting">
      <Greet/>
           
    </section>
  );
}
const Greet = () => {
  return (
    <article className="greet">
      <CoverImage />
      <Title />
      <Occupation/>
      <p>Enthusiastic Software Developer with good experience in computer programing and complete understanding of entire Software Development life cycle. I am good in demonstrating computational thinking and have an ability to break down large complex problems to support my team and excited to be at the development phase of my career as a developer. I am ambitious and an alliteration advocate.</p>
    
    </article>
    
  );
};
const CoverImage = () => (
  <img
    width="200"
    src="b1.jpg"
    alt="vishal smiling"
  />
);
const Title = () => <h1 style={{font:'500rem',color:'orange'}}>Vishal Bollam </h1>;
const occupationStyle={
  letterSpacing:"10px",
  color:"black" 
};
const Occupation = () => <p style={occupationStyle}> Software Developer</p>;

ReactDom.render(<Greeting />, document.getElementById("root"));