import { ColorConsumer } from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function SelectColors() {
  return (
    <div>
      <h2>select color</h2>
      <ColorConsumer>
        {({ actions }) => (
        <div style={{ display: 'flex' }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              onClick={() => actions.setColor(color)}
              onContextMenu={e => {
                e.preventDefault();
                actions.setSubcolor(color);
              }}
            />
          ))}
        </div>
        )}
      </ColorConsumer>
      <hr style={{ border: '1px solid green' }}/>
    </div>
  );
}

export default SelectColors;