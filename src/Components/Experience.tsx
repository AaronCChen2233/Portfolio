import React from "react"

interface ExperienceProps{

}

interface ExperienceStates{
    title : string
}

class Experience extends React.Component<ExperienceProps, ExperienceStates>{

    constructor(props: ExperienceProps) {
        super(props);
        this.state = { title: "Experience" };
    }

    render() {
        return (
        <div className="pages" id = "experience">
            <h1 style={{paddingTop: "200px", color:'#FFFFFF' }}>{this.state.title}</h1>
        </div>
        );
      }
}

export default Experience;