// 'use client';
import React from 'react';
import { AuthForm } from './AuthForm';

export function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit from login form');
    e.preventDefault();
  };

  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
