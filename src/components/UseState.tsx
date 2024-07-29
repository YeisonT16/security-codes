

function UseState({name}: {name: string}) {

    return (
        <div>
            <h2>Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad.</p>
            
            <input placeholder="Codigo de seguridad" />
            <button>Comprobar</button>
        </div>

    )
}

export { UseState }