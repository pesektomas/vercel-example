import { ReactElement } from "react";

interface HistoryPropsInterface {
    history: (string | null)[][];
    setMapItems: (item: (string | null)[]) => void;
}

export default function History(props: HistoryPropsInterface): ReactElement {

  const onClickHandler = (index: number) => {
      props.setMapItems(props.history[index]);
  }

  return (
    <div>
      <h2>History</h2>
      <ol>
          {props.history.map((historyItem, index) => {
              return <li key={index} onClick={() => onClickHandler(index)}>
                  step {index + 1}
              </li>;
          })}
      </ol>
    </div>
  );
}
