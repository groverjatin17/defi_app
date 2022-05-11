import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit((formData) => {
        console.log('Login -> formData', formData);
      })}
    >
      <div>
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" ref={register()} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            ref={register()}
          />
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
