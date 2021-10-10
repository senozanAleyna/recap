import { ResponseModel } from "../responseModel";
import { RentalDto } from "./rentalDto";

export interface rentalDtoResponseModel extends ResponseModel{
    data:RentalDto[]
}