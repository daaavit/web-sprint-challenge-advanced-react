import React, { useState } from "react";

// write your custom hook here to control your checkout form
export const useForm = (initialValue) => {
    const [form, setForm] = useState(initialValue);

    const formHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return [form, formHandler];
};
