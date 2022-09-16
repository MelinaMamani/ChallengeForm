import React, { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import personContext from '../context/person/personContext';

const chAllow = /^[0-9.]+$/;

const Form = () => {

    const { setName, setLastName, setEmail, setAge, setImage } = useContext(personContext);
    const [filePreview, setFilePreview] = useState(null);
    const [nameValidation, setNameValidation] = useState(false);
    const [lastNameValidation, setLastNameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [ageValidation, setAgeValidation] = useState(false);
    const [imageValidation, setImageValidation] = useState(false);
    const [enableBtn, setEnableBtn] = useState(false);
    const { name, lastName, email, age, onChange } = useForm({
        name: 'Melina',
        lastName: 'Mamaní',
        email: 'erikamelinamamani@gmail.com',
        age: '23',
    });

    const validateValue = (value, setValidation) => {
        if (!value) {
            setValidation(true);
        } else {
            setValidation(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!filePreview) setImageValidation(true);
        if(nameValidation && lastNameValidation && emailValidation && ageValidation) {
            setEnableBtn(true);
        }
        if(filePreview){
            setEnableBtn(false);
            setName(name);
            setLastName(lastName);
            setEmail(email);
            setAge(parseInt(age));
            setImage(filePreview);
            setFilePreview(null);
        }
    }

    const handleImage = (file) => {
        setFilePreview(URL.createObjectURL(file));
        setImageValidation(false);
    }

    return (
        <section className="formAndTitle" aria-label="formSection">
            <h1>Creá tu tarjeta<br/> de bienvenida</h1>
            <div className="formContainer">
                <form
                    className="form"
                    onSubmit={(e) => handleSubmit(e)}>
                    {
                        nameValidation
                        && (<p className="error">Nombre requerido*</p>)
                    }
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="inputText"
                        value={name}
                        onChange={({target}) => {onChange(target.value, 'name')}}
                        onBlur={({target}) => {validateValue(target.value, setNameValidation)}}/>
                    {
                        lastNameValidation
                        && (<p className="error">Apellido requerido*</p>)
                    }
                    <input
                        type="text"
                        placeholder="Apellido"
                        className="inputText"
                        value={lastName}
                        onChange={({target}) => {onChange(target.value, 'lastName')}}
                        onBlur={({target}) => {validateValue(target.value, setLastNameValidation)}}/>
                    {
                        emailValidation
                        && (<p className="error">Email requerido*</p>)
                    }
                    <input
                        type="email"
                        placeholder="Email"
                        className="inputText"
                        value={email}
                        onChange={({target}) => {onChange(target.value, 'email')}}
                        onBlur={({target}) => {validateValue(target.value, setEmailValidation)}}/>
                    {
                        ageValidation
                        && (<p className="error">Edad requerida*</p>)
                    }
                    <input
                        type="text"
                        placeholder="Edad"
                        className="inputText"
                        value={age}
                        onChange={({target}) => {
                            if(chAllow.test(target.value) || !target.value){
                                onChange(target.value, 'age');
                            }
                        }}
                        onBlur={({target}) => {validateValue(target.value, setAgeValidation)}}/>
                    {
                        imageValidation
                        && (<p className="error">Imagen requerida*</p>)
                    }
                    <div className="dropzone">
                        {
                            filePreview 
                            
                            ? ( <p>Podés volver a cargar tu foto acá
                                    <img
                                        src="/assets/uploadImg.svg"
                                        className="uploadImage"
                                        alt="uploadImageIcon"/>
                                </p>)
                            :   (<p>Subí tu foto o dejá caer acá
                                    <img
                                        src="/assets/uploadImg.svg"
                                        className="uploadImage"
                                        alt="uploadImageIcon"/>
                                </p>)
                        }
                        <input
                            type="file"
                            aria-label="imgUpload"
                            accept="image/jpg, image/jpeg, image/png"
                            onChange={({target}) => {handleImage(target.files[0])}}
                            className="inputFile"/>
                    </div>
                    {
                        filePreview &&  (
                                        <>
                                            <p className="paragraph">Imagen actual:</p>
                                            <img 
                                                src={filePreview}
                                                alt="imgPreview"
                                                className="imgPreview"/>
                                        </>
                                        )
                    }
                    <input
                        type="submit"
                        value="Crear"
                        className="submitBtn"
                        disabled={enableBtn}/>
                </form>
            </div>
        </section>
    )
}

export default Form;