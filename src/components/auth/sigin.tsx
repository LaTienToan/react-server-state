import { SubmitHandler, useForm } from "react-hook-form";
import { IAuth } from "../../interface/auth";
import { useSigninMutation } from "../../services/auth";


const Signin = () => {
    const [useSignin] = useSigninMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IAuth>();

    const onSubmit: SubmitHandler<IAuth> = (data) => {
        useSignin(data)
            .unwrap()
            .then((response) => {
                localStorage.setItem("users", response);
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("email")} />
                <input type="password" {...register("password")} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Signin;