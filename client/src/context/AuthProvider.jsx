import { useState } from "react";

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading] = useState(false);

    const login = (data) => {
        localStorage.getItem("token",data.token);
        setUser(data.user);
    };

    const logout = () => {
         
        localStorage.removeItem("token");
        setUser(null);

    };

    return (
        <AuthProvider value = {{
            user,
            loading,
            login,
            logout,
        }}>

            {children}

        </AuthProvider>
    );
};