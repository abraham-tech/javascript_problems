import {useState} from "react";

const Folder = ({handleInsertNode, explorer}) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState( {
        isFolder: null,
        visible: false
    })

    const handleAddItem = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            isFolder: isFolder,
            visible: true
        })
    }

    const onSaveItem = (e) => {
        if(e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput, visible: false});
        }
    }
    if(explorer.isFolder){
        return (
            <div style={{marginTop: "5px"}}>

                <div onClick={() => setExpand(!expand)} className="folder">
                    <span>📁 {explorer.name}</span>
                    <div>
                        <button onClick={(e) => handleAddItem(e, true)}> Folder +</button>
                        <button onClick={(e) => handleAddItem(e, false)}> File +</button>
                    </div>
                </div>
                {expand && (<div style={{ paddingLeft: 25}}>
                    {showInput.visible && (
                        <div>
                            <span> {showInput.isFolder ? "📁" : "📄"}</span>
                            <input
                                type="text"
                                onBlur={() => setShowInput({...showInput, visible: false})}
                                autoFocus
                                onKeyDown={onSaveItem}
                            />
                        </div>
                    )}
                    {explorer.items.map(exp => {
                        return (
                            <Folder handleInsertNode={handleInsertNode} key={exp.id} explorer={exp}/>
                        )
                    })}
                </div>)}

            </div>
        )
    } else {
        return <div style={{marginTop: "5px"}}>📄 {explorer.name}</div>
    }

}

export default Folder;
