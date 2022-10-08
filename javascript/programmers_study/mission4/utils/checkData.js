export default function checkData(data) {
  if (data == null) {
    throw new Error("Data is null or undefined!");
  }

  if (!Array.isArray(data)) {
    throw new Error("Not array type!");
  }

  if (!data.every((value) => Object.hasOwn(value, 'content') && 
    Object.hasOwn(value, 'isCompleted') && Object.hasOwn(value, '_id'))) {
    throw new Error("Incomplete data: no content or isCompleted or _id!");
  }
}
