import { useEffect, useState } from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    return (
    <div className="mx-auto my-auto text-4xl">
        <h1 className="text-center font-bold m-8">Регистрация</h1>
        <form className="flex flex-col">
            <label className="text-lg font-bold" htmlFor="email">Эл.Почта</label>
            <input value={email} onChange={(e) => {setEmail(e.target.value)}} className="text-center border-b-2 text-xl p-2 px-4 outline-0" name="email" type="email"/>
            <label className="text-lg font-bold mt-4" htmlFor="password">Пароль</label>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="text-center border-b-2 text-xl p-2 px-4 outline-0" name="password" type="password"/>
            <label className="text-lg font-bold mt-4" htmlFor="password">Пароль (повторно)</label>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} className="text-center border-b-2 text-xl p-2 px-4 outline-0" name="password" type="password"/>
            <p className="text-lg font-bold w-24 mt-4 text-red-500">{error}</p>
            <button className="auth-btn">Зарегистрироваться</button>
        </form>
    </div>)
}

export default Signup;