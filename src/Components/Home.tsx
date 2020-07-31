import React from "react"

interface HomeProps{

}

interface HomeStates{
    title : string
}

class Home extends React.Component<HomeProps, HomeStates>{

    constructor(props: HomeProps) {
        super(props);
        this.state = { title: "Hello, I am Aaron Chen. Software Engineer based in Vancouver, BC" };
    }

    render() {
        return (
        <div className="pages" id = "home">
            <h1 style={{left:'10%', right:'10%' , top: '50%', position:'absolute', color:'#FFFFFF' }}>{this.state.title}</h1>
        </div>
        );
      }
}

export default Home;