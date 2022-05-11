import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Registration() {
    const { register, handleSubmit, errors } = useForm();
    const [submitting, setSubmitting] = useState(false);
    return (
        <form
            onSubmit={handleSubmit((formData) => {
                console.log('Registration -> formData', formData);
                const { name, email, password, confirmPassword } = formData;
                if (password === confirmPassword) {
                    setSubmitting(true);
                    console.log('Both passwords match');
                    setSubmitting(false);
                }
            })}
        >
            <div>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={register({
                            required: 'Please Enter your Name',
                            minLength: {
                                value: 8,
                                message: 'Name must be 8 Characters long',
                            },
                        })}
                    />
                </label>
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="email">
                    Email
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={register({
                            required: 'Please enter Email Address',
                        })}
                    />
                </label>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password">
                    Password
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={register({
                            required: 'Please Enter your Password',
                            minLength: {
                                value: 8,
                                message: 'Name must be 8 Characters long',
                            },
                            validate: (value) => {
                                return (
                                    [
                                        /[a-z]/,
                                        /[A-Z]/,
                                        /[0-9]/,
                                        /[^a-zA-Z0-9]/,
                                    ].every((pattern) => pattern.test(value)) ||
                                    'Enter upper, lower, number and alpha'
                                );
                            },
                        })}
                    />
                </label>
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <label htmlFor="confirmPassword">
                    Confirm Password
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        ref={register({
                            required: 'Please Re-renter your Password',
                        })}
                    />
                </label>
                {errors.confirmPassword && (
                    <p>{errors.confirmPassword.message}</p>
                )}
            </div>
            <div>
                <button type="submit" disabled={submitting}>
                    Register
                </button>
            </div>
        </form>
    );
}
