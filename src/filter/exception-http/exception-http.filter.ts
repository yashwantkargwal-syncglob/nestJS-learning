import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class ExceptionHttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const cxt = host.switchToHttp();
    const response = cxt.getResponse();
    const request = cxt.getRequest();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
      }),
      errorMessage: exception.message,
      path: request.url,
    });
  }
}
