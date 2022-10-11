import { ColorConsumer } from '../contexts/color';

function ColorBox() {
  return (
    <div className="ColorBox">
      <ColorConsumer>
        {({ state }) => (
          <>
            <div
              style={{
                width: '64px',
                height: '64px',
                background: state.color
              }}
            />
            <div
              style={{
                width: '32px',
                height: '32px',
                background: state.subcolor
              }}
            />
          </>
        )}
      </ColorConsumer>
    </div>
  );
}

export default ColorBox;