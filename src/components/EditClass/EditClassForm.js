import React, { useEffect, useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialState = {
  class_name: "",
  class_type: "",
  start: "",
  duration: "",
  dropdown: "",
  location: "",
  maxSize: "",
  currentClients: "",
};

const EditClassForm = (props) => {
  const { class_id } = useParams();
  const [editClass, setEditClass] = useState(initialState);
  const { submit, change, disabled, errors } = props;

  useEffect(() => {
    axios
      .get(
        `https://anywhere-fitness-07-backend.herokuapp.com/api/classes/${class_id}`
      )
      .then((res) => {
        console.log(res);
        setEditClass(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [class_id]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  //   const inputChange = (name, value) => {
  //     setEditClass({
  //       ...editClass,
  //       [name]: value,
  //     });
  //   };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setEditClass({
      ...editClass,
      [name]: value,
    });
    change(name, value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Edit Class</h2>

      <div>
        <div>{errors.class_name}</div>
        <div>{errors.class_type}</div>
        <div>{errors.dropdown}</div>
        <div>{errors.start}</div>
      </div>
      <Label>
        Class Name:
        <Input
          name="class_name"
          type="text"
          value={editClass.class_name}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Class Type
        <Input
          type="text"
          name="class_type"
          value={editClass.class_type}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Start Time
        <Input
          type="time"
          name="start"
          value={editClass.start}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Duration
        <Input
          name="duration"
          type="number"
          min="0"
          placeholder="minutes"
          value={editClass.duration}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Intensity Level
        <select name="dropdown" value={editClass.dropdown} onChange={onChange}>
          <option>-Select Intensity-</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </Label>
      <br />
      <Label>
        Location
        <Input
          type="text"
          name="location"
          value={editClass.location}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Current Clients
        <Input
          name="currentClients"
          type="number"
          min="0"
          value={editClass.currentClients}
          onChange={onChange}
        />
      </Label>
      <br />
      <Label>
        Max Class Size
        <Input
          type="number"
          min="0"
          name="maxSize"
          value={editClass.maxSize}
          onChange={onChange}
        />
      </Label>
      <br />

      {/* ERRORS */}
      <Button disabled={disabled} type="submit">
        Create Class
      </Button>
    </Form>
  );
};

export default EditClassForm;
