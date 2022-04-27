export interface Robot {
  name: string;
  version: number;
}

export function createRobot(name: string): Robot | never {
  if (!name) throw new Error('name is invalid');
  return { name, version: 1 };
}