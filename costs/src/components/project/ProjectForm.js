import {useCallback, useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [projects, setProjects] = useState(projectData || {})

    const fetchData = useCallback(async () => {
        await fetch('http://localhost:5000/categories', {
            method: 'GET', headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])
    useEffect(() => {
        fetchData()
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projects)
    }

    function handleChange(e) {
        setProjects({...projects, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProjects({
            ...projects, category: {
                id: e.target.value, name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={projects.name ? projects.name : ''}
            />

            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={projects.budget ? projects.budget : ''}
            />

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={projects.category ? projects.category.id : ''}
            />

            <SubmitButton text={btnText}/>
        </form>
    )

}

export default ProjectForm