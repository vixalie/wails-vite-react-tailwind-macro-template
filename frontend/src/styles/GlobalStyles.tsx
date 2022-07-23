import { Global } from '@emotion/react';
import { Fragment } from 'react';
import tw, { css, GlobalStyles as BaseStyle } from 'twin.macro';

const globalBaseStyle = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    ${tw`m-0 p-0 w-screen h-screen overflow-hidden antialiased`};
  }
`;

const GlobalStyles = () => {
  return (
    <Fragment>
      <BaseStyle />
      <Global styles={globalBaseStyle} />
    </Fragment>
  );
};

export default GlobalStyles;
