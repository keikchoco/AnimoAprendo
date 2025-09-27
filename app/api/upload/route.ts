import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response('No file uploaded', { status: 201 });
  }

  try {
    const blob = await put(file.name, file, { access: 'public', addRandomSuffix: true });
    return NextResponse.json({success: true, data: blob}, {status: 200});
  } catch (error) {
    console.error('Upload failed:', error);
    return new Response('Upload failed', { status: 500 });
  }
}
