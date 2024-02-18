interface User {
    name: string;
}

async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}

export default async function Users(){

    const users = await getUsers();

    if(!users.length){
        return null;
    }
    return (
        <div>
            {
                users.map((user: User) => {
                    return (
                        <span key={user.name}>Name: {user.name}</span>
                    );
                })
            }
        </div>
    );
}
