import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";

type FormData = {
    email: string;
    password: string;
}

export default function LoginForm(){
    const { 
        register, 
        handleSubmit, 
        formState: { errors } } = useForm<FormData>();
 
    
    
    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Email"
                    nama="email"
                    register={register}
                    error={errors.email?.message}
                />

                <InputText
                    label="Password"
                    nama="password"
                    register={register}
                    error={errors.password?.message} 
                />

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};