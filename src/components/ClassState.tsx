import React from 'react'



class ClassState extends React.Component {

    render() {

        return (
            <div>
                <h2>Eliminar {}</h2>

                <p>Por favor, escribe el codigo de seguridad</p>

                <input placeholder="Codigo de seguridad" />
                <button>Comprobar</button>
            </div>
        )
    }
}


export { ClassState };