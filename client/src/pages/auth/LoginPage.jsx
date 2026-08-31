import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const LoginPage = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm">
                
                <h2 className="text-2xl font-bold text-gray-900">
                    Member Login
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Login to access Shalivahana Connect.
                </p>

                <div className="mt-6 space-y-4">
                    <Input
                        label="Mobile Number"
                        name="mobile"
                        type="tel"
                        placeholder="Enter mobile number"
                    />

                    <Button className="w-full">
                        Continue
                    </Button>
                </div>

            </div>
        </main>
    );
};

export default LoginPage;