import { loginFormSchema } from '@/lib/validations/LoginValidation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await req.json());
    console.log('email: ' + email, 'password: ' + password);
    return new NextResponse('It works');
  } catch (err) {
    const error = err as Error;
    console.error(error);
    return new NextResponse(error.message, { status: 400 });
  }
}
