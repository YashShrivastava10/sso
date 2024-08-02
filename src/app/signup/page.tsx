import AuthLayout from "@/components/AuthLayout"

const Signup = ({ searchParams }: {
  searchParams: Record<string, string>
}) => {
  return <AuthLayout status="signup" searchParams={searchParams} />
}

export default Signup