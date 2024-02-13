import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordion() {
    const [seleceted, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [arrayMultiple, setArrayMultiple] = useState([]);

    function singleSelection(id) {
        setSelected(id === seleceted ? null : id);
    }

    function multiSelection(id) {
        // This line creates a copy of the arrayMultiple state using the spread operator (...). This ensures that we are working with a new array instance and not directly modifying the original state.
        let mutatedArrayMultiple = [...arrayMultiple];
        // This line finds the index of the id in the mutatedArrayMultiple array. The indexOf method returns the index of the first occurrence of the specified id in the array, or -1 if the id is not found.
        let findIndexOfCurrentSelection = mutatedArrayMultiple.indexOf(id);
        // If findIndexOfCurrentSelection is -1, it means that the id is not present in the array. In this case, we add the id to the mutatedArrayMultiple using the push method.
        if (findIndexOfCurrentSelection === -1) mutatedArrayMultiple.push(id);
        // if findIndexOfCurrentSelection is not -1, it means that the id is already present in the array. In this case, we remove the id from the mutatedArrayMultiple using the splice method.
        else mutatedArrayMultiple.splice(findIndexOfCurrentSelection, 1);
        // update the arrayMultiple state with the updated mutatedArrayMultiple. This triggers a re-render of the component with the updated state.
        setArrayMultiple(mutatedArrayMultiple)
    }

    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
            >
                {enableMultipleSelection ? 'Disable Multi Selection' : 'Enable Multi Selection'}
            </button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div
                                onClick={
                                    enableMultipleSelection
                                        ? () => multiSelection(dataItem.id)
                                        : () => singleSelection(dataItem.id)
                                }
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                             {/* The conditions inside the curly braces {} depend on the state variables enableMultipleSelection, arrayMultiple, and seleceted. Therefore, whenever the state of any of these variables changes, React will re-run these conditions to determine whether the <div> elements should be rendered or updated. */}
                            {enableMultipleSelection ? arrayMultiple.indexOf(dataItem.id) !== -1 &&
                                (<div className="answer">{dataItem.answer}</div>) :
                                seleceted === dataItem.id && (<div className="answer">{dataItem.answer}</div>)}
                            {/* {seleceted === dataItem.id || 
                            arrayMultiple.indexOf(dataItem.id) !== -1? (
                                <div className="answer">{dataItem.answer}</div>
                            ) : null} */}
                        </div>
                    ))
                ) : (
                    <div> no data found </div>
                )}
            </div>
        </div>
    );
}
