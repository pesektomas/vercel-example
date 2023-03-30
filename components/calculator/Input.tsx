import {ReactElement} from "react";

interface InputProps {
    value: string;
    setValue: (value: string) => void
}
export default function Input(props: InputProps): ReactElement {
    return (
        <div className="container mx-auto px-4 m-5">
            <label htmlFor="price">number A: </label>
            <input
                value={props.value}
                className="border-2 border-black rounded p-2 w-40"
                onChange={event => props.setValue(event.target.value)}
            />
            <span className="ml-2">Number a: {props.value}</span>
        </div>
    );
}