import React, {useState, useEffect} from 'react'

function Posts(){
    const [resourceType, setResourceType] = useState('posts');

    useEffect(() => {
        
        console.log('render outside useEffect');

        return () => {
            console.log('return from resource change')
        }
    
    }, [resourceType]);

    return (
        <>
        <br/>
        <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        </>
    )
}

export default Posts;