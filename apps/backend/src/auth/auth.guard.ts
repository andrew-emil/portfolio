import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const secretKey = this.configService.get<string>('app.SECRET_KEY');


    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return request.headers['x-mobile-app-secret'] === secretKey;
  }
}