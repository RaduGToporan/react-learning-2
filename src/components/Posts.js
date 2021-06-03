import React, {useState, useEffect} from 'react'

function Posts(){
    const [resourceType, setResourceType] = useState('posts');
    const [messages, setMessages] = useState([]);
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([])

    console.log('render outside useEffect');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
        setCount(count+1);
        //setMessages([...messages, 'Afisare']);
    }, [resourceType]);

    const renderMessages = () => {
        return(
            <div>
            {messages.map((message, index) => (
                <h1 key={index}>{message}</h1>
            )
            )}
            </div>
        )
    }

    const renderCounter = () => {
        let result = [];
        for (let i=0; i<count; i++)
        result.push(<h1 key={i}>Afisare</h1>);
        return result;
    }

    return (
        <>
        <br/>
        <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {renderCounter()}
        {/* {renderMessages()} */}

        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        </>
    )
}

export default Posts;