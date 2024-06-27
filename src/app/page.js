"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        {session ? (
          <>
            <div className="text-xl font-semibold mb-4">
              Hey {session.user.name}
            </div>
            <div className="text-gray-600 mb-6">
              Signed in as {session.user.email}
            </div>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <div className="text-xl font-semibold mb-4">
              Not signed in
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => signIn("github")}
            >
              Sign in with GitHub
            </button>
          </>
        )}
      </div>
    </div>
  )
}
