import React, { Component } from 'react';
import {Segment, Form, Button} from 'semantic-ui-react';

class EventForm extends Component {
    
    state ={
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }

    handleFormSubmit = (evt) =>{
        evt.preventDefault();
        if(this.state.id){
            this.props.updateEvent(this.state);
        } else{
            this.props.createEvent(this.state)
        }   
    }

    handleImputChange = ({target: {name, value}}) =>{
        this.setState({
            [name]: value
        })
    }
    componentDidMount(){
        if(this.props.selectedEvent !== null){
            this.setState({
                ...this.props.selectedEvent
            })
        }
    }

    render() {
        const {cancelFormOpen}=this.props;
        const {title, date, city, venue, hostedBy}=this.state;
        return (
            <Segment>
                <Form onSubmit={this.handleFormSubmit} autoComplete = "off">
                    <Form.Field>
                        <label>Event Title</label>
                        <input name='title' value ={title} onChange={this.handleImputChange} placeholder="Event Title" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name='date' value ={date} onChange={this.handleImputChange} type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name='city' value ={city} onChange={this.handleImputChange} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input name='venue' value ={venue} onChange={this.handleImputChange} placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name='hostedBy' value ={hostedBy} onChange={this.handleImputChange} placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}
export default EventForm;
