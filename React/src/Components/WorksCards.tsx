import React,{ReactNode} from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

interface WorksCardsProps{
    cardTitle:string,
    children:ReactNode,
    gitUri:string,
    buttonText:string,
    image:any
}

// interface WorksCardsStates{
//     title:string,
//     cardBody:ReactNode,
//     gitUri:string,
//     buttonText:string
// }

class WorksCards extends React.Component<WorksCardsProps, {}>{
    constructor(props: WorksCardsProps) {
        super(props);
        // this.state = { 
        //     title: props.cardTitle, 
        //     cardBody: props.children,
        //     gitUri:props.gitUri,
        //     buttonText:props.buttonText
        // };
    }

    render() {
        return (
            <Card bg='dark' text='dark'>
            <Card.Body>
            <Card.Title>{this.props.cardTitle}</Card.Title>
            <Card.Img variant="top" src={String(this.props.image)} />
            {this.props.children}
            {(this.props.buttonText !== '' && this.props.gitUri !== '') ? (
                <Button target="_blank" href={this.props.gitUri} variant="primary">{this.props.buttonText}</Button>
            ) : (null)}
            </Card.Body>
            </Card>
        );
      }
}

export default WorksCards; 