import {Operations} from "../../model/calculator/Operations";

interface OperationProps {
    operation: Operations;
    setOperation: (operation: Operations) => void
}

export function Operation(props: OperationProps) {
    return (
        <div className="container mx-auto px-4 m-5">
            <label htmlFor="price">operation: </label>
            <select
                value={props.operation}
                className="border-2 border-black rounded p-2 w-40"
                onChange={event => props.setOperation(Operations[event.target.value as keyof typeof Operations])}
            >
                {Object.keys(Operations).map((key) => (
                    <option key={key} value={Operations[key as keyof typeof Operations]}>
                        {key}
                    </option>
                ))}
            </select>
            <span className="ml-2">Operation: {props.operation}</span>
        </div>
    );
}