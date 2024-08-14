import { useState } from "react";

export default function NumberInput({ value, size, max }) {
    const [count, setCount] = useState(value);

    const sizeClasses = {
        small: "size-5",
        medium: "size-7",
        large: "size-9",
    };

    return (
        <div className="relative flex items-center">
            <button
                onClick={() => {
                    if (count > 1) setCount(count - 1);
                }}
                className={`flex items-center justify-center rounded-md border border-gray-300 bg-black hover:bg-neutral-900 ${sizeClasses[size]} hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black`}
            >
                <svg
                    className="h-2.5 w-2.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                    />
                </svg>
            </button>
            <input
                type="text"
                id="count"
                name="count"
                className="max-w-10 flex-shrink-0 border-0 bg-transparent text-center font-normal text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                value={count}
                onChange={({ target }) => {
                    if (target.value > 0 && target.value < 30)
                        setCount(target.value);
                }}
                required
            />
            <button
                onClick={() => {
                    if (count < max) setCount(count + 1);
                }}
                className={`flex items-center justify-center rounded-md border border-gray-300 bg-black hover:bg-neutral-900 ${sizeClasses[size]} hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black`}
            >
                <svg
                    className="h-2.5 w-2.5 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                    />
                </svg>
            </button>
        </div>
    );
}
