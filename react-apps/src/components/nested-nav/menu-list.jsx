import MenuItem from "./menu-item";
import './style.css'

export default function MenuList({list=[]}){
    return <ul className="menu-list-ul">
        {list && list.length? list.map((listItem, index) => <MenuItem key={index} item={listItem}></MenuItem>) : 'no menu objects'}
    </ul>
}