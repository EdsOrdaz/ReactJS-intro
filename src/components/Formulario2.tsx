import { useForm } from "./hooks/userForm"

export const Formulario2 = () => {

    const {formulario, handleChange} = useForm({
        postal: 'ABC',
        ciudad: 'Tula'
    });

    const { postal, ciudad } = formulario;

    
  return (
    <>
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">CP: </label>
                <input type="text" className="form-control" name="postal" onChange={ handleChange } value={postal}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Ciudad: </label>
                <input type="text" className="form-control" name="ciudad" onChange={ handleChange } value={ ciudad }
                />
            </div>

            <pre> { JSON.stringify(formulario) }</pre>
        </form>   
    </>
  )
}
