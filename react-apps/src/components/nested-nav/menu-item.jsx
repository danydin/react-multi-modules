import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(currentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [currentLabel]: !displayCurrentChildren[currentLabel]
        })
    }
    // console.log(displayCurrentChildren)
    return <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {item.children && item.children.length ?
                <span onClick={() => handleToggleChildren(item.label)}>
                    {displayCurrentChildren[item.label] ?
                        <FaMinus color="#fff" size={25} /> :
                        <FaPlus color="#fff" size={25} />}
                </span> : null}
        </div>
        {item && item.children && item.children.length && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null}
    </li>
}