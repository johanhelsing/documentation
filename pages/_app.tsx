import React from 'react';
import { AppProps } from 'next/app';
import { IconContext } from 'react-icons';
import { InstantSearch } from 'react-instantsearch-dom';
import { client as searchClient, indexName as searchIndex } from '@/core/search';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from 'logic';

import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';
import '../styles/vars.css';
import '../styles/global.css';
import '../styles/layout.css';
import '../styles/markdown.css';
import '../styles/search.css';
import 'highlight.js/styles/dracula.css';

const store = configureStore({ reducer });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <InstantSearch searchClient={searchClient} indexName={searchIndex}>
        <IconContext.Provider value={{ className: 'anticon' }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </InstantSearch>
    </Provider>
  );
}
