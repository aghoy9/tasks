import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>();
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Write Answer:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Answer"
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
            </div>
        </div>
    );
}
