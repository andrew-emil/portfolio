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
    origin: (origin: any, callback:any) => {
      const allowed = [
        'https://portfolio-web-az8u.vercel.app',
        'https://portfolio-web-az8u-gklgu757m-andrews-projects-284f4980.vercel.app',
      ];
      if (!origin || allowed.includes(origin) || /\.vercel\.app$/.test(origin)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        callback(null, true);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  });


  app.setGlobalPrefix("api");

  await app.listen(parseInt(process.env.PORT ?? "4000", 10));
}

bootstrap().catch((error) => {
  console.error("Error during application bootstrap:", error);
});