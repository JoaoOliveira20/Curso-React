import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

function Project() {

    const {id} = useParams()

    const [project, setProjects] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
            .then((data) => {
                setProjects(data)
            })
            .catch(err => console.log(err))

    }, [id])


    return (
        <p>{Project.name}</p>
    )
}

export default Project