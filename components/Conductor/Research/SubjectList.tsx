"use client"
import { setting } from '@/data/gameSettings'
import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function SubjectList() {
  const { subject_list } = setting; 
  const checkbox = useRef<HTMLInputElement>(null)
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<typeof subject_list>([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedSubject.length > 0 && selectedSubject.length < subject_list.length
    setChecked(selectedSubject.length === subject_list.length)
    setIndeterminate(isIndeterminate)
    checkbox.current!.indeterminate = isIndeterminate
  }, [selectedSubject])

  function toggleAll() {
    setSelectedSubject(checked || indeterminate ? [] : subject_list)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return <div className='px-4 sm:px-6 lg:px-8 sm:py-3 bg-white'>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title, email and role.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <div className="relative">
              {selectedSubject.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              <div className="group inline-flex">
                UUID
                <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      </div>
              </th>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                              <div className="group inline-flex">
                Name
                <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      </div>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                              <div className="group inline-flex">
                Entered
                <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      </div>
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
              <div className="group inline-flex">
                Update
                <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      </div>
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {subject_list.map((subject) => (
              <tr key={subject.no} className={selectedSubject.includes(subject) ? 'bg-gray-50' : undefined}>
                <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedSubject.includes(subject) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={subject.id}
                          checked={selectedSubject.includes(subject)}
                          onChange={(e) =>
                            setSelectedSubject(
                              e.target.checked
                                ? [...selectedSubject, subject]
                                : selectedSubject.filter((p) => p !== subject)
                            )
                          }
                        />
                      </td>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  {subject.id}
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only sm:hidden">Entered Date</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{subject.entered_date}</dd>
                    <dt className="sr-only sm:hidden">Active Date</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{subject.active}</dd>
                  </dl>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">{subject.name}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{subject.entered_date}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{subject.active}</td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {subject.kickout}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  </div>;
}
