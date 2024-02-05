import React from 'react';

type Props = {
    text: string;
    extraClasses: string;
    onClick: () => void;
};

export default function ButtonLink ({ text, extraClasses, onClick }: Props) {
    const classes = `w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 ${extraClasses}`;

    return (
        <button className={classes} type="button" onClick={onClick}>
            {text}
        </button>
    );
}