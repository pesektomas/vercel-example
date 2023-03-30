import {HistoryObject, HistoryOperation} from "../../model/calculator/HistoryObject";

interface HistoryProps {
    history: HistoryObject[]
}

function getClassNameByOperation(operation: HistoryOperation) {
    switch (operation) {
        case HistoryOperation.SET_VALUE_A: return 'text-red-800';
        case HistoryOperation.SET_VALUE_B: return 'text-green-800';
        case HistoryOperation.SET_OPERATION: return 'text-blue-800';
    }

    return '';
}

export function History(props: HistoryProps) {
    return (
        <ul className="mt-10">
            {props.history.map((historyItem: HistoryObject, idx: number) => {
                return <li key={idx} className={getClassNameByOperation(historyItem.operation)}>
                    operation: {historyItem.operation}, value: {historyItem.value}
                </li>
            })}
        </ul>
    );
}