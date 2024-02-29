interface Base {
  enter: string
  leave: string
}

interface Transition extends Base {
  enterFrom: string
  enterTo: string
  leaveFrom: string
  leaveTo: string
}

const base: Base = {
  enter: 'transition ease duration-200',
  leave: 'transition ease duration-200'
}

const fade: Transition = {
  ...base,
  enterFrom: 'opacity-0',
  enterTo: 'opacity-100',
  leaveFrom: 'opacity-100',
  leaveTo: 'opacity-0'
}

const slide: Transition = {
  ...base,
  enterFrom: '-translate-x-full',
  enterTo: 'translate-x-0',
  leaveFrom: 'translate-x-0',
  leaveTo: '-translate-x-full'
}

export { fade, slide }
