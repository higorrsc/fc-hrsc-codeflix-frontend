'use client';

import { AuthForm } from '@/components/forms/Auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type ServerError = {
  message: string;
};

export function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    } catch (error) {
      console.error(error);
      setErrors(['An unknown error occurred. Please try again.']);
      console.log(errors);
    }
  };

  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
