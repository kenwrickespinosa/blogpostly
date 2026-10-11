import type { ReactElement } from "react";
import AuthLayout from "../../Layouts/AuthLayout.js";

function Login() {
    return (
        <div>
            <p>Login</p>
        </div>
    );
}

Login.layout = (page: ReactElement) => (
    <AuthLayout
        title="Log In"
        content="Welcome to BlogPostly and continue sharing your ideas with the world."
    >
        {page}
    </AuthLayout>
);

export default Login;
