'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { AuthForm } from './AuthForm';

type ServerError = {
  message: string;
};

export function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const res = await fetch('/auth/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        router.push('/');
        return;
      }

      const payload: ServerError[] = await res.json();
      console.log(payload);
    } catch (error: any) {
      console.error(error);
      setErrors(['An unknown error occurred. Please try again.']);
    }
  };

  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
