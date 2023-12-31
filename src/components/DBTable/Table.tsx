import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { DBData, state$ } from "../../core/state";
import { ObservableObject as O } from '@legendapp/state';
import {EditableCell} from './EditableCell';
import { Table as RTable } from "@radix-ui/themes";

type Props = {
  tableId: string;
  tableState: string;
}

export const Table = ({tableId, tableState}: Props) => {
  const data = state$.data[tableId] as O<DBData>

  const table = useReactTable({
    data: data.data.peek(), 
    columns: formatDBStateForTableColumn(data.fields.peek()),
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    // meta: {
    //   updateData: (rowIndex, columnId, value) =>
    //     setData((prev) =>
    //       prev.map((row, index) =>
    //         index === rowIndex
    //           ? {
    //               ...prev[rowIndex],
    //               [columnId]: value,
    //             }
    //           : row
    //       )
    //     ),
    // },
  });




  return (
    <RTable.Root style={{width: table.getTotalSize()}}>

{/* -------------------- TABLE HEAD  */}
      <RTable.Header>
        {
          table.getHeaderGroups().map((hg) => (
            <RTable.Row key={hg.id}>
              {
                hg.headers.map((h) => 
                  (
                    <RTable.ColumnHeaderCell className='relative' style={{width: h.getSize()}} key={h.id}>
                      {h.column.columnDef.header}
                      {
                        h.column.getCanSort() && 
                          (
                            <span onClick={h.column.getToggleSortingHandler()}>
                              <svg className='inline-block' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </span>
                          )
                      }
                      <div
                        className='absolute right-0 top-0 h-full w-1 bg-indigo-800'
                        onMouseDown={h.getResizeHandler()}
                        onTouchStart={h.getResizeHandler()}
                      />
                    </RTable.ColumnHeaderCell>
                  )
                )
              }
            </RTable.Row>
          ))
        }
      </RTable.Header>
{/* -------------------- TABLE HEAD END  */}

{/* -------------------- TABLE BODY END  */}
      <RTable.Body>
        {
          table.getRowModel().rows.map((row) => 
            (
              <RTable.Row key={row.id}>
                {
                  row.getVisibleCells().map((cell) => 
                    (
                      <RTable.Cell className='relative' key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </RTable.Cell>
                    )
                  )
                }
              </RTable.Row>
            )
          )
        }
      </RTable.Body>
{/* -------------------- TABLE BODY END  */}
    </RTable.Root>
  )
}

// =============
function formatDBStateForTableColumn(columnList: string[]): ColumnDef<Record<string, any>, any>[] {
  return columnList.map((col) => ({
    accessorKey: col,
    header: col,
    cell: EditableCell,
    enableColumnFilter: true,
    getCoreRowModel: getCoreRowModel(),
    filterFn: "includesString",
  }))
}