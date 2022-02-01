import React from "react";
import { Button, Form, Input, Label} from 'reactstrap';

const CreateClass = () => {

    return (
        <Form>
            <h3>Create Class</h3>
            <br />
            <Label>Class Name:
                <Input 
                    name="class_name"
                    type="text"
                />
            </Label>
            <br />

            <Label>Class Type
                <Input 
                 />
            </Label>
                <br />
            <Label>Start Time
                <Input />
            </Label>
                <br />
            <Label>Duration
                <Input />
            </Label>
                <br />
            <Label>Intensity Level
                <Input />
            </Label>
                <br/>
            <Label>Location
                <Input />
            </Label>
                <br/>
            <Label>Current number of registered attendees
                <Input />
            </Label>
                <br />
            <Label>Max Class Size
                <Input />
            </Label>
                <br />
                <Button>Create Class</Button>

        </Form>
    )
}

export default CreateClass;