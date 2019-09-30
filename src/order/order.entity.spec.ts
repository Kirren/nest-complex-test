import { OrderEntity } from './order.entity';

describe('Order.Entity', () => {
  it('should be defined', () => {
    expect(new OrderEntity()).toBeDefined();
  });
});
