import { useState,useEffect } from "react"


function UseState({name}: {name: string}) {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("Empezando el efecto")

        if(loading) {
            setTimeout(() => {
                console.log("haciendo la validación")

                setLoading(false)

                console.log("Terminando la validación")
            }, 3000)
        }
    }, [loading])

    return (
        <div className="text-lg font-normal text-stone-800">
            <h2 className="text-yellow-600">Eliminar {name}</h2>

            <p>Por favor, escribe el codigo de seguridad.</p>

            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            {
                loading && (
                    <p>Cargando...</p>
                )
            }
            <input placeholder="Codigo de seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>

    )
}

export { UseState }