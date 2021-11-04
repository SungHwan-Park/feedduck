import { IFeed } from "@freshworks/shared";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feed implements IFeed {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  farmer: string;

  @Column()
  date: string;

  @Column()
  place: string;
  
  @Column()
  count: number;

  @Column()
  quantity: number;

  @Column()
  food: string;
}