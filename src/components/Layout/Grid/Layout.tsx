import { useState, useRef, useEffect } from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const def =  [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 300, h: 50, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']},
  { i: "dark-magician", x: 18, y: 0, w: 53, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne'] },
  { i: "kuriboh", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
  { i: "fake", x: 71, y: 0, w: 29, h: 67, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
]

export const GridLayout = () => {
  const [currLayout, setCurrLayout] = useState(def);
  const [oldLayout, setOldLayout] = useState(def);
  const [pageHeight, setPageHeight] = useState('');
  const [allowOldLayoutUpdate, setAllowOldLayoutUpdate] = useState(false)
  const divv = useRef(0);
  const bc = {backgroundColor: "pink"}


  useEffect(() => {
    setPageHeight(divv.current.offsetHeight)
  }, [])

  const handleLayoutChange = () => {
    const gridHeight = document.querySelector(".react-grid-layout").offsetHeight;
    if (gridHeight > pageHeight) {
      setCurrLayout([
        ...oldLayout.filter((o) => o.i !== 'fake'),
        { i: "fake", x: (Math.floor(Math.random() * 60000) + 1), y: 0, w: 0, h: 0, isDraggable: true, resizeHandles: ['s' , 'w' , 'e' , 'n' , 'sw' , 'nw' , 'se' , 'ne']  },
      ]);
      setAllowOldLayoutUpdate(false)
    } else {
      setAllowOldLayoutUpdate(true)
    }
  }

  const handleGridEventStart = (layout: any) => {
    if (allowOldLayoutUpdate) {
      setOldLayout(layout)
    }
  };
      

  return (
    <ResponsiveGridLayout
      className="grid-layout"
      layouts={{lg :currLayout, md: currLayout, sm: currLayout}}
      cols={{ lg: 1000, md: 1000, sm: 1000, xs: 1000}}
      maxRows={1000}
      rowHeight={.01}
      onResizeStart={handleGridEventStart}
      onDragStart={handleGridEventStart}
      onLayoutChange={handleLayoutChange}
    >
    </ResponsiveGridLayout>
  )
}