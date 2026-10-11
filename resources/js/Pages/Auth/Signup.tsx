import type { ReactElement } from "react";
import AuthLayout from "../../Layouts/AuthLayout.js";
import TextInput from "../../Components/TextInput.js";
import Button from "../../Components/Button.js";

function Signup() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-10 text-center text-2xl font-semibold text-primary">Sign up</p>

            <form>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <p className="text-black/70">Full name</p>
                            <TextInput />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-black/70">Email address</p>
                            <TextInput />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-black/70">Password</p>
                            <TextInput />
                        </div>
                    </div>

                    <Button type="button" className="font-semibold bg-primary text-secondary">Continue</Button>
                </div>
            </form>
        </div>
    );
}

Signup.layout = (page: ReactElement) => (
    <AuthLayout
        title="Sign Up"
        content="Create your BlogPostly account and start sharing your ideas with the world."
    >
        {page}
    </AuthLayout>
);

export default Signup;
