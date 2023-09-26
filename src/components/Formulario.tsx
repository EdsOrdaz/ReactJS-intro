import { ChangeEvent, useState } from "react"
import { useForm } from "./hooks/userForm"

interface formData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {
    const { email,nombre,edad, handleChange, formulario } = useForm<formData>({
        email: '',
        nombre: '',
        edad: 0
    });
    // const { email,nombre,edad } = formulario;
  return (
    <>
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email: </label>
                <input type="email" className="form-control" name="email" onChange={ handleChange } value={ formulario.email }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre: </label>
                <input type="text" className="form-control" name="nombre" onChange={ handleChange } value={ formulario.nombre }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Edad: </label>
                <input type="number" className="form-control" name="edad" onChange={ handleChange } value={ formulario.edad }
                />
            </div>

            <pre> { JSON.stringify(formulario) }</pre>
        </form>   
    </>
  )
}
