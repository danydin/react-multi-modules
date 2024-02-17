import MenuList from './menu-list'

export default function NestedNav({navList = []}){
    return <div className="tree-nav-container">
        <MenuList list={navList} />
    </div>

}