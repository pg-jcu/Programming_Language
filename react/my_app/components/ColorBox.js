import ColorContext from "../contexts/color";
import '../style/ColorBox.scss';

function ColorBox() {
  return (
    <div className="ColorBox">
      <ColorContext.Consumer>
        {value => (
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.color
            }}
          />
        )}
      </ColorContext.Consumer>
    </div>
  );
}

export default ColorBox;