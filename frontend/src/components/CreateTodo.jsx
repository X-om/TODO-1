export function  CreateTodo(){
    return <div style={{backgroundColor:"#666",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <input 
        id="title"
        style={{padding:10,margin:10,width:250}}
        type="text" placeholder="title"></input><br/>
        <textarea 
        id="description"
        style={{padding:10,margin:10,width:250,height:100,overflowX:"hidden",overflowY:"auto"}}
        placeholder="description"></textarea><br/>       
    
        <button
        style={{padding:10,margin:10,width:100}}
        onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method : "POST",
                headers : {"Content-type" : "application/json"},
                body: JSON.stringify(
                    {
                        title : document.getElementById('title').value,
                        description : document.getElementById('description').value
                    }
                )
            })
        }}
        >Add to do</button>
    </div>

}