import React from "react"

interface AboutProps{

}

interface AboutStates{
    title : string
}

class About extends React.Component<AboutProps, AboutStates>{

    constructor(props: AboutProps) {
        super(props);
        this.state = { title: "Hello, I'm Aaron Chen, a software engineer with 4+ years of experience in Windows desktop application development and 1 year experience in Android development. Have Code refactoring experience. Know how to keep code clean and easy to read also have the best performance. Eager to learn more to continuously improve my skills." };
    }

    render() {
        return (
        <div className="pages" id="about">
            <h1 style={{paddingTop: "200px", color:'#FFFFFF' }}>{this.state.title}</h1>
        </div>
        );
      }
}

export default About;