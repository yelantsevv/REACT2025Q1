import {
  render,
  screen,
  fireEvent,
  Screen as RScreen,
} from '@testing-library/react';

declare global {
  interface Screen extends RScreen {
    log: typeof console.log;
  }
  let log: typeof console.log;
  let render: typeof render;
  let fireEvent: typeof fireEvent;
}

global.render = render;
global.screen = screen;
global.fireEvent = fireEvent;
global.screen.log = console.log;
global.log = (x) => console.log('log ', x);
