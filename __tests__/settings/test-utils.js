import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { setupStore } from '../../src/store/store';

function render(
  ui,
  {
    initialState,
    store = setupStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
    store
  };
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
