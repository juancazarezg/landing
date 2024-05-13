'use client'

import { TypewriterEffect } from '../ui/typewriter-effect'

export const TypewriterEffectHome = () => {

    const words = [
        {
            text: "A",
        },
        {
            text: "journey",
        },
        {
            text: "of",
        },
        {
            text: "a",
        },
        {
            text: "thousand",
            className: "text-green-500 dark:text-green-500",
        },
        {
            text: "miles",
            className: "text-green-500 dark:text-green-500",
        },
        {
            text: "begins",
        },
        {
            text: "with",
        },
        {
            text: "a",
        },
        {
            text: "single",
            className: "text-green-500 dark:text-green-500",
        },
        {
            text: "step.",
            className: "text-green-500 dark:text-green-500",
        },
    ];

    return (
        <div>
            <TypewriterEffect
                words={words}
            />
        </div>
    )
}