import React from 'react'
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layouts/Layout';

export default function NotFoundPage() {
  return (
    <h1 className='text-red flex justify-center items-center text-center text-6xl'>Error 404</h1>
  )
}
