import React from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query';

interface TestProps {
    user: any
}

export const Test: React.FC<TestProps> = ({}) => {
    const editing = true
    const [authing, setAuthing] = React.useState(true)
    const [error, setError] = React.useState({ name: "", message: "" })
    const queryClient = useQueryClient();

  

return (
 <div>

 </div>
);
}



{/* <TheForm
    form_title='Login'
    fields={form_input}
    validate={validate}
    submitFn={handleSubmit}
    is_submitting={addUserMutation.isLoading && !authing}
    error={error}
    editing={editing}
/> */}
export interface SignupFormInput {
    email: string
    password: string
    passwordConfirm: string
}
interface Validate {
    input: SignupFormInput;
    setError: (error: { name: string; message: string }) => void;
}




const validate = ({ input, setError }: Validate) => {
    // console.log("input === ",input)
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (input.email === "") {
        setError({ name: "email", message: "email field required" })
        return false
    }
    if (!expression.test(input.email)) {
        setError({ name: "email", message: "invalid email pattern" })
        return false
    }
    if (input.password.length < 8) {
        setError({ name: "password", message: "password minimun length is 8" })
        return false
    }

    setError({ name: "", message: "" })
    return true
}
