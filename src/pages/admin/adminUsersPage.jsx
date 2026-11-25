

import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminUsersPage() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const token = localStorage.getItem("token")

        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log("Users: ", res.data)
            setUsers(res.data)
            setLoading(false)
        }).catch((err) => {
            console.error("Error: ", err.response?.data || err.message)
            setLoading(false)
        })

    }, [])

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Manage Users
                </h1>
                <p className="mt-2 text-gray-500">
                    View and manage all registered users.
                </p>
            </div>

            {/* User Count */}
            <div className="mb-6 rounded-xl bg-white p-5 shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">Total Users</p>
                <h2 className="mt-1 text-3xl font-bold text-blue-600">
                    {users.length}
                </h2>
            </div>

            {/* Users Table */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                <div className="overflow-x-auto">

                    <table className="w-full text-left">

                        <thead className="bg-gray-100 text-sm uppercase text-gray-600">
                            <tr>
                                <th className="px-6 py-4">Profile</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Email</th>
                                <th className="px-6 py-4">Phone</th>
                                <th className="px-6 py-4">Address</th>
                                <th className="px-6 py-4">Role</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">

                            {loading ? (

                                <tr>
                                    <td colSpan="5" className="py-10 text-center text-gray-500">
                                        Loading users...
                                    </td>
                                </tr>

                            ) : users.length === 0 ? (

                                <tr>
                                    <td colSpan="5" className="py-10 text-center text-gray-500">
                                        No users found.
                                    </td>
                                </tr>

                            ) : (

                                users.map((user, index) => (

                                    <tr
                                        key={user.email || index}
                                        className="transition hover:bg-blue-50"
                                    >

                                        {/* User Profile */}
                                        <td className="whitespace-nowrap px-6 py-4">

                                            <div className="flex items-center gap-3">

                                                <img
                                                    src={user.profilePicture}
                                                    alt={user.firstName}
                                                    className="h-11 w-11 rounded-full border border-gray-200 object-cover"
                                                />

                                                

                                            </div>

                                        </td>

                                        {/* Name */}
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                            {user.firstName} {user.lastName}
                                        </td>

                                        {/* Email */}
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                            {user.email}
                                        </td>

                                        {/* Phone */}
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                                            {user.phone}
                                        </td>

                                        {/* Address */}
                                        <td className="min-w-[200px] px-6 py-4 text-sm text-gray-600">
                                            {user.address}
                                        </td>

                                        {/* Role */}
                                        <td className="whitespace-nowrap px-6 py-4">

                                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                user.role === "admin"
                                                    ? "bg-purple-100 text-purple-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}>
                                                {user.role}
                                            </span>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}
