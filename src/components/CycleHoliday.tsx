import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🦃" | "🎃" | "🐇" | "🏳️‍🌈";

const ALPHABET_TRANSITION: Record<Holiday, Holiday> = {
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "🏳️‍🌈",
    "🏳️‍🌈": "🦃",
    "🦃": "🎄"
};

const DATE_TRANSITION: Record<Holiday, Holiday> = {
    "🐇": "🏳️‍🌈",
    "🏳️‍🌈": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🐇"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🐇");
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button onClick={() => setHoliday(ALPHABET_TRANSITION[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(DATE_TRANSITION[holiday])}>
                Advance by Year
            </Button>
        </div>
    );
}
