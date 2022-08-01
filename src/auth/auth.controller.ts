import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  // El body: any en realidad se llama DTO (data transfer object)
  signup(@Body() dto: AuthDTO) {
    return this.authService.signup(dto);
  }

  @Post("signin")
  signin(@Body() dto: AuthDTO) {
    return this.authService.signin(dto);
  }
}
