import { describe, it, expect } from 'vitest'
import { createRobot } from '../'

describe('robot test', () => {
  
  it('should create a robot', () => {
    expect(createRobot('Alice')).toBeTypeOf('object');
    expect(createRobot('Alice')).toEqual({ name: 'Alice', version: 1 });
  })

  it('should fail when giving invalid name', () => {
    expect(() => createRobot("")).toThrowError();
  });

})


