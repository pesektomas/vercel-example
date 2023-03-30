import {Operations} from "../model/calculator/Operations";
import Input from "../components/calculator/Input";
import {Operation} from "../components/calculator/Operation";
import {History} from "../components/calculator/History";
import {HistoryObject, HistoryOperation} from "../model/calculator/HistoryObject";
import {useEffect, useState} from "react";

export default function Calculator() {
    const [valueA, setValueA] = useState<string>('');
    const [valueB, setValueB] = useState<string>('');
    const [operation, setOperation] = useState<Operations>(Operations.PLUS);
    const [history, setHistory] = useState<HistoryObject[]>([]);

    useEffect(() => {
        const newHistory = [
            ...history,
            {
                operation: HistoryOperation.SET_VALUE_A,
                value: valueA
            }
        ];

        setHistory(newHistory)
    }, [history, valueA]);

    useEffect(() => {
        const newHistory = [
            ...history,
            {
                operation: HistoryOperation.SET_VALUE_B,
                value: valueB
            }
        ];

        setHistory(newHistory)
    }, [history, valueB]);

    useEffect(() => {
        const newHistory = [
            ...history,
            {
                operation: HistoryOperation.SET_OPERATION,
                value: operation
            }
        ];

        setHistory(newHistory)
    }, [history, operation]);

    const calculateResult = () => {

        const numberA = Number(valueA);
        const numberB = Number(valueB);

        if(isNaN(numberA)) {
            return 'NaN';
        }

        if(isNaN(numberB)) {
            return 'NaN';
        }

        switch (operation) {
            case Operations.PLUS: return numberA + numberB;
            case Operations.MINUS: return numberA - numberB;
            case Operations.MULTIPLYING: return numberA * numberB;
            case Operations.DIVISION: return numberA / numberB;
        }
    };

    return (
        <div className="bg-white p-10">

            <div className="container mx-auto">

                <h2 className="text-2xl font-bold leading-7 text-gray-900">
                    Form example
                </h2>

                <div className="flex flex-col">
                    <Input value={valueA} setValue={setValueA} />
                    <Operation operation={operation} setOperation={setOperation} />
                    <Input value={valueB} setValue={setValueB} />
                </div>

                {calculateResult()}

                <History history={history} />

            </div>
        </div>
    )
}