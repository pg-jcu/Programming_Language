export default function checkData(data) {
  if (data == null) {
    throw new Error("Data is null or undefined!");
  }

  if (!Array.isArray(data)) {
    throw new Error("Not array type!");
  }

  if (!data.every(value => Object.hasOwn(value, 'text') && 
    Object.hasOwn(value, 'isCompleted'))) {
    throw new Error("Incomplete data: no text or isCompleted!");
  }
}