import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          // url: "postgresql://elgeokareem:w5412656@localhost:5434/nest?schema=public",
          url: config.get("DATABASE_URL"),
        },
      },
    });
  }
}
