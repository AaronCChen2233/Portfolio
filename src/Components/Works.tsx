import React from "react"

interface WorksProps{

}

interface WorksStates{
    title : string
}

class Works extends React.Component<WorksProps, WorksStates>{

    constructor(props: WorksProps) {
        super(props);
        this.state = { title: "Works" };
    }

    render() {
        return (
        <div className="pages" id = "works">
            <h1 style={{paddingTop: "200px", color:'#FFFFFF' }}>{this.state.title}</h1>
        </div>
        );
      }
}

export default Works;