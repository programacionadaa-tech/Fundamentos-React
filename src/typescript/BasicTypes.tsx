
export const BasicTypes = () => {
    
    const name = 'Capibara';
    const age: number = 5;
    const isActive: boolean = true; 
    const powers: string[] = ['React', 'ReactNative', 'Vue', 'Angular', 'Node', 'Express'];

    return (
        <>
            <h2>Tipos basicos</h2>
            {name} {age} {isActive ? 'Activo' : 'Inactivo'}
            <br />
            {powers.join(', ')}


        </>
    )
}
