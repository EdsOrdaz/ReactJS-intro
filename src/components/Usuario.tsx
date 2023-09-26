import { useState } from 'react'
import { Interface } from 'readline';

interface User{
    uid: String,
    name: String
}

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'eds123',
            name: 'Edson Ordaz'
        });
    }

  return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>
        <button className='btn btn-outline-primary' onClick={ login }>
        Login
        </button>

        {
            (!user)
                ? <pre>No hay Usuario</pre>
                : <pre> {JSON.stringify(user)}</pre>
        }

    </div>
  )
}
