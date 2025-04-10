'use client';

import { AuthForm } from '@/components/forms/Auth';
import React from 'react';

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit from register form');
    e.preventDefault();
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
