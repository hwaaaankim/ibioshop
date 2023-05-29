import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <input {...register("email", { required: true })} />
      {errors.email && <span>Email is required</span>}

      <input type="password" {...register("password", { required: true })} />
      {errors.password && <span>Password is required</span>}

      <input type="submit" />
    </form>
  );
}
