import { useEffect, useRef, useState } from "react"
import axios from "axios";
import type { ReqResUserList } from "../interfaces";

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const loadUsers = async (page: number = 1) => {
    try {
        const resp = await axios.get<ReqResUserList>(`https://reqres.in/api/users?page=${page}`, {
            headers: {
                'x-api-key': 'pub_44baf7989c10e6e8f149fecb47b6535e7d9c2a4358e1a81c3a41bdb7e7ff2d81'
            }
        });
        return resp.data.data;
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
}


export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPage = useRef(1);
    
    useEffect(() => {
        loadUsers(currentPage.current).then(setUsers);
    }, [])
    
    const nextPage = async() => {
        currentPage.current += 1;
        const users=await loadUsers(currentPage.current);
        setUsers(users);
        if(users.length > 0){
            setUsers(users);
        } else {
            currentPage.current -= 1;
        }
    }
    const prevPage = async() => {
        if (currentPage.current > 1) {
            currentPage.current -= 1;
            const  users=await loadUsers(currentPage.current);
            setUsers(users);
        }else {
            currentPage.current = 1;
        }
    }

    return {
        //propiedades
        users,
        //metodos
        nextPage,
        prevPage,
    }






}