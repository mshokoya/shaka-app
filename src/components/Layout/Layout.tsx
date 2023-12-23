
type Widget = {
  id: string;
  groupid: string;
  el: string;
  pos: number[];
  state: any;
}

type Display = {
  id: string;
  layout: {
    default: '';
    pane: Widget[];
    grid: Widget[];
  }
}

// widget display
type Layout = keyof(Display['layout']);

// custom display has no default
type CustomLayout = Exclude<Layout, 'default'>;

export const Layout = () => {
  // it needs layout id, 
  // layout display type (Display type)
  

  return (
    <div>
      <div className='flex'>
        <section className=''>
        </section>
      </div>
    </div>
  )
}
