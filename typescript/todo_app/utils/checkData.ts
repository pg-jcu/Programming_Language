export default function checkData(data) {
  if (data == null) {
    throw new Error("Data is null or undefined!");
  }

  if (!Array.isArray(data)) {
    throw new Error("Not array type!");
  }

  if (!data.every(value => 'text' in value && 'isCompleted' in value)) {
    throw new Error("Incomplete data: no text or isCompleted!");
  }
}