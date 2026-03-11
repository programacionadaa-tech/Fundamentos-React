import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
    
    const {users, nextPage, prevPage} = useUsers();

    /*useEffect(() => {
        fetch('https://reqres.in/api/users?page=2', {
            headers: {
                'x-api-key': 'pub_44baf7989c10e6e8f149fecb47b6535e7d9c2a4358e1a81c3a41bdb7e7ff2d81'
            }
        })
            .then(response => response.json())
            .then(data => setUsers(data.data))
    }, [])*/
    
    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td><img src={user.avatar} alt={user.first_name} width={50} /></td>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    )
}