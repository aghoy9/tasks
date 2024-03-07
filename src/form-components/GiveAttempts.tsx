import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [request, setRequest] = useState<string>("");
    const [attempts, setAttempts] = useState<number>(3);
    function getRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    function parseRequest(request: string) {
        const num: number = parseInt(request);
        if (isNaN(num) || num < 0) {
            return;
        }
        if (num < 0) {
            return;
        }
        setAttempts(attempts + num);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={getRequest}
                ></Form.Control>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    Use
                </Button>
                <Button onClick={() => parseRequest(request)}>Gain</Button>
            </Form.Group>
        </div>
    );
}
