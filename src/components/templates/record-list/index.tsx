import { PageDefinition } from '@/types/page-definition'
import Link from 'next/link'
import React from 'react'

interface RecordListTemplateProps<RecordType> {
  title: string
  newRecordPageDefinition: PageDefinition
  editRecordPageDefinition: PageDefinition
  records: RecordType[]
  labelAttribute: keyof RecordType
}

export const RecordListTemplate = <RecordType extends { id: string }>({
  title,
  newRecordPageDefinition,
  editRecordPageDefinition,
  records,
  labelAttribute,
}: RecordListTemplateProps<RecordType>): JSX.Element => (
  <div className="my-auto flex h-[90vh] w-[90%] flex-col rounded bg-white p-4">
    <h1 className="mb-2 text-center text-xl font-bold">{title}</h1>
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
      {records.map((record) => (
        <div
          key={record.id}
          className="flex w-full flex-col rounded-lg bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          <span className="mb-2 font-bold">
            {String(record[labelAttribute])}
          </span>
          <div className="flex justify-center gap-2">
            <button
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="button"
            >
              Excluir
            </button>
            <Link
              href={editRecordPageDefinition.path.replace(':id', record.id)}
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              type="button"
            >
              Editar
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <Link
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        href={newRecordPageDefinition.path}
      >
        {newRecordPageDefinition.title}
      </Link>
    </div>
  </div>
)
