import { IsString, IsNumber, IsDateString, Min } from "class-validator";

export interface IFeed {
  id?: number;

  farmer: string;

  date: string;

  place: string;

  count: number;

  quantity: number;

  food: string;
}

export class CreateFeedDto implements IFeed {
  @IsString()
  farmer: string;

  @IsDateString()
  date: string;

  @IsString()
  place: string;
  
  @IsNumber()
  @Min(0)
  count: number;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsString()
  food: string;
}
