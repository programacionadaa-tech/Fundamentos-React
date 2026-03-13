import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
}

export const FormsPage = () => {

  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues:{
      email: 'capibara@comprobadora.com',
      password: '12345'
    }
  });

  const onSubmit = ( myForm: FormInputs ) => {
    console.log({myForm});
  }

  console.log(watch('email'));

    return(
      <>
        <form>
            <h3>Formularios</h3>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="Email" { ...register('email', { required: true})}></input>
                <input type="password" placeholder="Password" { ...register('password')}></input>
                <button type="submit">Ingresar</button>
            </div>
        </form>

        <pre>
          {JSON.stringify(formState, null, 2)}
        </pre>
      </>
    )
}