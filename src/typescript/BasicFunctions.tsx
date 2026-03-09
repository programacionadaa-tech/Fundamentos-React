
export const BasicFunctions = () => {

    const addTwoNumber = (a: number, b: number): number => {
        return a + b;
    }


    return (
        <>
            <h2>Funciones basicas</h2>
            <span>El resultado de sumar 2 y 8: { addTwoNumber(2,8) } </span>
        </>
    )
}