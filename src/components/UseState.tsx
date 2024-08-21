import { useState,useEffect } from "react"

const SECURITY_CODE = 'paradigma'


function UseState({name}: {name: string}) {
    const [error, setError] = useState(false)
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log("Empezando el efecto")

        if(loading) {
            setTimeout(() => {
                console.log("haciendo la validación")

                if(value !== SECURITY_CODE) {
                    setError(true)
                }

                
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
            <input 
                placeholder="Codigo de seguridad" 
                value={value}
                onChange={(event) => {event.target.value}}
            />
            <button className="rounded-lg w-fit bg-lime-400 p-2 border text-lg font-semibold"
                onClick={() => setLoading(true)}
            >Comprobar</button>
        </div>

    )
}

export { UseState }