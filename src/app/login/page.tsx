import AuthLayout from "@/components/AuthLayout"

const Login = ({ searchParams }: {
  searchParams: Record<string, string>
}) => {
  return <AuthLayout status="login" searchParams={searchParams} />
}

export default Login