import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
	@PrimaryGeneratedColumn({
		type: "uuid"
	})
	orderId: number;

	@Column({
		type: "varchar"
	})
	orderName: string;

	@Column({
		type: "string"
	})
	description: string;
}
