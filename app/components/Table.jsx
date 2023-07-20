export default () => {

  const tableItems = [
      {
          name: "Oluwafemi Emmanuel",
          email: "Oluwafemi@example.com",
          location: "lagos"
      },
      {
        name: "Oluwafemi Ayedogbon",
        email: "Ayedogbon@example.com",
        location: "lagos"
      },
      {
        name: "Oluwafemi Tosin",
        email: "Tosin@example.com",
        location: "lagos"
      },
      {
        name: "Seun Emmanuel",
        email: "Seun@example.com",
        location: "lagos"
      },
      {
        name: "Voke Emmanuel",
        email: "Voke@example.com",
        location: "lagos"
      },
      {
        name: "Luwafemi Emmanuel",
        email: "Luwafem@example.com",
        location: "lagos"
      },
  ]

  return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="items-start justify-between md:flex">
              <div className="max-w-lg">
                  <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                      Form title
                  </h3>
                  <p className="text-gray-600 mt-2">
                      Lorem Ipsum is simply dummy text of the printing and typesetting.
                  </p>
              </div>
              
          </div>
          <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
              <table className="w-full table-auto text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                      <tr>
                          <th className="py-3 px-6">Name</th>
                          <th className="py-3 px-6">Email</th>
                          <th className="py-3 px-6">Location</th>
                          <th className="py-3 px-6">Action</th>

                      </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                      {
                          tableItems.map((item, idx) => (
                              <tr key={idx}>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{item.location}</td>
                                  <td className="px-6 whitespace-nowrap">
                                      <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                          Edit
                                      </a>
                                      <button href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                          Delete
                                      </button>
                                  </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </div>
      </div>
  )
}