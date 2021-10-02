import {useEffect, useMemo, useState} from "react";
import {
  useAsyncDebounce,
  useFilters,
  useGlobalFilter,
  useSortBy,
  useTable
} from "react-table";
import {SearchIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";

const QueryTable = ({data}) => {

  const Router = useRouter()

  function GlobalFilter({
                          globalFilter,
                          setGlobalFilter,
                        }) {
    const TWO_HUNDRED_MS = 200;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, TWO_HUNDRED_MS);
    return (
      <div
        className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
        <button
          onClick={() => Router.back()}
          className="inline-flex items-center px-4 mr-2 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >Home
        </button>
        <p className="mr-auto">Total Clicks: <span>{data.length}</span></p>
        <div className="w-full sm:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5 text-gray-400"
                          aria-hidden="true"/>
            </div>
            <input
              value={value || ""}
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              id="search"
              name="search"
              className="block w-full bg-gray-100 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
      </div>
    )
  }


  const tableData = useMemo(() => !data ? [] : data, [data]);
  useEffect(() => {
    // setFilter("date_accessed", data.date_accessed)
  }, []);

  const columns = useMemo(() => [
      {
        Header: "IP Address",
        accessor: "ip_address",
      },

      {
        Header: "User Agent",
        accessor: "user_agent",
      },
      {
        Header: "Referrer",
        accessor: "location",
      },
      {
        Header: "Last Accessed",
        accessor: "date_accessed",
      },

    ], [] // memo deps
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: {globalFilter},
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable({
      columns,
      data: tableData,
      initialState: {
        sortBy: [{id: "date_accessed", desc: true}],
      }
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
  );

  return (
    <>
      <div className="">
        <div
          className=" px-4 py-5 sm:px-6 rounded-t-lg">
          <GlobalFilter
            preGlobalFilterRows={preGlobalFilteredRows}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200"
                     {...getTableProps()}
              >
                <thead className="bg-gray-50">
                {headerGroups.map(headerGroup => (
                  // eslint-disable-next-line react/jsx-key
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      // eslint-disable-next-line react/jsx-key
                      <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                        {/*<span>*/}
                        {/*  {column.isSorted*/}
                        {/*    ? column.isSortedDesc*/}
                        {/*      ? ' ⬇️'*/}
                        {/*      : ' ⬆️'*/}
                        {/*    : ' ↕️'}*/}
                        {/*</span>*/}
                      </th>
                    ))}
                  </tr>
                ))}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200"
                       {...getTableBodyProps()}
                >
                {rows.map(row => {
                  prepareRow(row)
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <tr {...row.getRowProps()}
                        className=
                          {row.original.disabled === "" ? "bg-gray-100" : ""}
                    >
                      {row.cells.map(cell => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <td
                            className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default QueryTable

