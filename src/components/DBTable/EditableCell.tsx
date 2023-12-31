import { useObservable } from "@legendapp/state/react";
import { TextFieldInput } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const value = useObservable(initialValue)

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    value.set(initialValue)
  }, [initialValue]);

  return (
    <input
      className='absolute w-full h-[95%] top-0 left-0 p-3 outline-0'
      value={value.get()}
      onChange={(e) => value.set(e.target.value)}
      onBlur={onBlur}
    />
  );
};

{/* <>
<TextFieldInput
 radius="none"
 value={value.get()} 
 onChange={(e) => value.set(e.target.value)} 
 onBlur={onBlur} 
/>
</> */}

