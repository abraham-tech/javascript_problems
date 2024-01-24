import {useState} from "react";
import explorer from "../data/folderData";

const Folder = ({explorer}) => {
    const [expand, setExpand] = useState(false);
    if(explorer.isFolder){
        return (
            <div style={{marginTop: "5px"}}>

                <div onClick={() => setExpand(!expand)} className="folder">
                    <span>📁 {explorer.name}</span>
                </div>
                <div style={{ display: expand? "block": "none", paddingLeft:25 }}>
                {explorer.items.map(exp => {
                    return (
                        <Folder key={exp.id} explorer={exp}/>
                    )
                })}
                </div>
            </div>
        )
    } else {
        return <div style={{marginTop: "5px"}}>📄 {explorer.name}</div>
    }

}

export default Folder;
