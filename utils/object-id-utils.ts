export function getDateFromObjectId(objectId: string): Date {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
}