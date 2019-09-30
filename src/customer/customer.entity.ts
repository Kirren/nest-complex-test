import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CustomerEntity {
	@PrimaryGeneratedColumn({
		type: "uuid"
	})
	userId: number;

	@Column({ length: 25 })
	fullName: string;
}
