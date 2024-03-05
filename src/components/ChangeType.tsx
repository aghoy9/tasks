import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

function changeQuestionType(type: QuestionType): QuestionType {
    return type === "multiple_choice_question"
        ? "short_answer_question"
        : "multiple_choice_question";
}

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button onClick={() => setValue(changeQuestionType(value))}>
                Change Type
            </Button>
            {value === "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span>Short Answer</span>
            )}
        </div>
    );
}
