import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

function winOrLose(dice1: number, dice2: number): string {
    if (dice1 === dice2) {
        if (dice1 === 1) {
            return "Lose";
        } else return "Win";
    }
    return "";
}

export function TwoDice(): JSX.Element {
    const [dice1, setDice1] = useState<number>(4);
    const [dice2, setDice2] = useState<number>(1);
    return (
        <div>
            <span data-testid="left-die">Left Die: {dice1}</span>
            <Button onClick={() => setDice1(d6())}>Roll Left</Button>
            <span data-testid="right-die">Right Dice: {dice2}</span>
            <Button onClick={() => setDice2(d6())}>Roll Right</Button>
            <span>{winOrLose(dice1, dice2)}</span>
        </div>
    );
}
