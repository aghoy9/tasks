import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <div>
                    <Form.Switch
                        //type="switch"
                        label="Edit"
                        name="edit"
                        checked={editMode}
                        onChange={() => setEditMode(!editMode)}
                    ></Form.Switch>
                </div>
                <div>
                    {editMode && (
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            id="student"
                            checked={isStudent}
                            onChange={() => setStudent(!isStudent)}
                            disabled={!editMode}
                        ></Form.Check>
                    )}
                </div>
                <div>
                    {editMode && (
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                            disabled={!editMode}
                        ></Form.Control>
                    )}
                </div>
            </div>
            <div>
                {!editMode
                    ? isStudent
                        ? `${name} is a student`
                        : `${name} is not a student`
                    : ""}
            </div>
        </div>
    );
}
