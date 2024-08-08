import Account from '@/components/Account'
import React from 'react'

const Page = ({ searchParams }: {
  searchParams: Record<string, string>
}) => <Account searchParams={searchParams} />

export default Page