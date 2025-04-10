// 'use client';
import React from 'react';
import { AuthForm } from './AuthForm';

export function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit from register form');
    e.preventDefault();
  };

  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
