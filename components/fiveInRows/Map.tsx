import { ReactElement } from "react";
import styles from "./Map.module.css";

interface MapPropsInterface {
  mapItems: (string | null)[];
  onClickHandler: (index: number) => void;
  currentPlayer: string;
  winner: string | null
}

export default function Map(props: MapPropsInterface): ReactElement {
  return (
    <div className={styles.map_container}>

        {props.winner !== null && <div>
            <h2>Winner is: {props.winner}</h2>
        </div>}

      <div className={styles.mapWrapper}>
        {props.mapItems.map((value, index) => {
          return (
            <div
              key={index}
              className={styles.mapItem}
              onClick={() => props.onClickHandler(index)}
            >
              {index}: {value}
            </div>
          );
        })}
      </div>

      <div>Next player: {props.currentPlayer}</div>
      <button>RESET</button>
    </div>
  );
}
