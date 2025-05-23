export default function AdminUsers() {
  return (
    <div className="w-10/12 m-auto mt-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">List of Users</h1>
        <label className="input border border-neutral-300 rounded">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>

      <br />
      <hr className="bg-neutral-600" />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-neutral-200">
              <td>Christian Penano</td>
              <td>chrys</td>
              <td>User</td>
              <td>
                <div className="bg-blue-400 text-white px-4 py-2 rounded-xl text-center font-bold">
                  View Details
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-neutral-200">
              <td>Jeremiah Nueno</td>
              <td>keikchoco</td>
              <td>User</td>
              <td>
                <div className="bg-blue-400 text-white px-4 py-2 rounded-xl text-center font-bold">
                  View Details
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-neutral-200">
              <td>Yasmin Abad</td>
              <td>yas</td>
              <td>Admin</td>
              <td>
                <div className="bg-blue-400 text-white px-4 py-2 rounded-xl text-center font-bold">
                  View Details
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
