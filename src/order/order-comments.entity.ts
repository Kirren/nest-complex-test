import { Column, Entity } from "typeorm";

@Entity()
export class OrderCommentsEntity {
	@Column({
		type: "uuid"
	})
	orderId: string;

	@Column({
		type: "uuid"
	})
	userId: string;
}
