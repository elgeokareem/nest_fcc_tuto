import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  // El body: any en realidad se llama DTO (data transfer object)
  signup(@Body() dto: AuthDTO) {
    try {
      return this.authService.signup(dto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.FORBIDDEN);
    }
  }

  @Post("signin")
  signin(@Body() dto: AuthDTO) {
    return this.authService.signin(dto);
  }
}
