import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: false,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  app.enableCors({
    origin: [
      process.env.FRONTEND_URL,
      process.env.FRONTEND_URL_2,
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  });

  app.setGlobalPrefix("api");

  await app.listen(parseInt(process.env.PORT ?? "4000", 10));
}

bootstrap().catch((error) => {
  console.error("Error during application bootstrap:", error);
});