import { useState } from "react"
import data from "./data"
import "./style.css"

export default function Accordion() {
    const [seleceted, setSelected] = useState(null)
    function singleSelection(id) {
        setSelected(id===seleceted? null: id)
    }

    return <div className="wrapper">
        <div className="accordion">
            {data && data.length > 0 ?
            data.map(dataItem=>
            <div className="item">
                <div onClick={()=>singleSelection(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {seleceted===dataItem.id? <div className="answer">{dataItem.answer}</div> : null}
            </div>
            ) 
            : <div> no data found </div>
            }
        </div>
    </div>
}