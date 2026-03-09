
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
        address: Address;
    }

    interface Address {
        country: String;
        houseNo: Number;
    }

export const ObjectLiterals = () => {
    
    const person: Person = {
        firstName: 'Capibara',
        lastName: 'Carpincho', 
        age: 26,
        address: {
            country: 'Mexico',
            houseNo: 123
        }
    }

    return(
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
