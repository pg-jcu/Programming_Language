import ColorBox from './ColorBox';
import SelectColors from './SelectColors';
import { ColorProvider } from '../contexts/color';
import '../style/Color.scss';

function Color() {
  return (
    <div className="Color">
      <ColorProvider>
        <SelectColors />
        <ColorBox />
      </ColorProvider>
    </div>
  );
}

export default Color;