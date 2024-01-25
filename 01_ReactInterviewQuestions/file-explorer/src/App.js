import './App.css';
import Folder from "./components/Folder";
import explorer from "./data/folderData";
import {useState} from "react";
import useTreeTraverse from "./hooks/useTreeTraverse";

function App() {
    const [explorerData, setExprolrerData] = useState(explorer);
    const { insertNode } = useTreeTraverse();
    const handleInsertNode = (folderId, item, isFolder) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExprolrerData(finalTree)
    }
  return (
    <div className="App">
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  );
}

export default App;
