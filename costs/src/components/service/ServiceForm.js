import {useState} from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText}) {
    const [service, setService] = useState({
        description: '',
        cost: 0,
        name: ''
    })
    const [error, setError] = useState({
        description: '',
        cost: '',
        name: ''
    })

    function submit(e) {
        e.preventDefault()
        if (validate()) {
            handleSubmit(service) // Pass only the service data
        }
    }

    function validate() {
        let valid = true

        if (service.name === '') {
            setError((e) => ({
                ...e,
                name: 'Nome é obrigatório'
            }))
            valid = false
        } else {
            setError((e) => ({
                ...e,
                name: ''
            }))
        }

        if (service.cost === 0) {
            setError((e) => ({
                ...e,
                cost: 'Custo é obrigatório'
            }))
            valid = false
        } else {
            setError((e) => ({
                ...e,
                cost: ''
            }))
        }

        if (service.description === '') {
            setError((e) => ({
                ...e,
                description: 'Descrição é obrigatória'
            }))
            valid = false
        } else {
            setError((e) => ({
                ...e,
                description: ''
            }))
        }

        return valid
    }

    function handleChange(e) {
        const {name, value} = e.target
        setService(prevService => ({
            ...prevService,
            [name]: value
        }))
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            {error.name && <div>{error.name}</div>}
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor do serviço"
                handleOnChange={handleChange}
            />
            {error.cost && <div>{error.cost}</div>}
            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            {error.description && <div>{error.description}</div>}
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ServiceForm
