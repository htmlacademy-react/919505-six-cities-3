import {MoonLoader} from 'react-spinners';
import {CSSProperties} from 'react';

const COLOR_BLUE = '#2C36F2';

const override: CSSProperties = {
  margin: '0 auto',
};

export default function Spinner(): JSX.Element {
  return (
    <div className="spinner" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <MoonLoader
        color={COLOR_BLUE}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
