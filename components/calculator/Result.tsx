interface ResultProps {
    calculateResult: () => string | number
}

export const Result = (props: ResultProps) => {
    return (
        <h2 className="text-5xl mt-10">
            Result is:
            <span className="font-bolt text-lime-600 ml-5">{props.calculateResult()}</span>
        </h2>
    );
}