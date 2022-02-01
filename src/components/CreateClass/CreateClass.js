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
                />
            </Label>
        </Form>
    )
}

export default CreateClass;