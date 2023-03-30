import Map from "../components/fiveInRows/Map";
import History from "../components/fiveInRows/History";
import {useState} from "react";
import {MAP_SIZE, winnerCombination} from "../components/fiveInRows/settings";
import Link from "next/link";

export default function FiveInRows() {
    const [mapItems, setMapItems] = useState<(string | null)[]>(
        Array(MAP_SIZE * MAP_SIZE).fill(null)
    );
    const [currentPlayer, setCurrentPlayer] = useState<string>("X");
    const [winner, setWinner] = useState<string | null>(null);
    const [history, setHistory] = useState<((string | null)[][])>([]);

    const checkWinner = (mapItems: (string | null)[]) => {

        for (let i = 0; i < winnerCombination.length; i ++) {
            let winnerRow = winnerCombination[i];

            if (!mapItems[winnerRow[0]] || !mapItems[winnerRow[1]] || !mapItems[winnerRow[2]]) {
                continue;
            }

            if (mapItems[winnerRow[0]] === mapItems[winnerRow[1]] && mapItems[winnerRow[0]] === mapItems[winnerRow[2]]) {
                console.log('winner is ' + mapItems[winnerRow[0]]);
                setWinner(mapItems[winnerRow[0]]);
                return;
            }
        }
    };

    const onClickHandler = (index: number): void => {

        if (winner) {
            return;
        }

        if (mapItems[index] !== null) {
            return;
        }

        const newMapItems = [...mapItems];
        newMapItems[index] = currentPlayer;

        const newHistory = [...history];
        newHistory.push(newMapItems); // newHistory[] = newMapHistory
        setHistory(newHistory);

        checkWinner(newMapItems);
        setMapItems(newMapItems);
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    return (
        <div>
            <h1>APP</h1>

            <Map
                mapItems={mapItems}
                onClickHandler={onClickHandler}
                currentPlayer={currentPlayer}
                winner={winner}
            />
            <History history={history} setMapItems={setMapItems} />

            <br /><br /><br />
            <Link href="/">Homepage</Link>
        </div>
    );
}