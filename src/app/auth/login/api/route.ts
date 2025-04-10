import { loginFormSchema } from '@/lib/validations/LoginValidation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await req.json());
    console.log('email: ' + email, 'password: ' + password);
    return new NextResponse('It works');
  } catch (err: any) {
    console.log(err.message);
    return new NextResponse(err.message, { status: 400 });
  }
}
