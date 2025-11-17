import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseFilters,
} from '@nestjs/common';
import { ExceptionHttpFilter } from 'src/filter/exception-http/exception-http.filter';

@Controller('exception-handle')
@UseFilters(ExceptionHttpFilter)
export class ExceptionHandleController {
  @Get('hello/:id')
  getData(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `Your Id is : ${id}`,
      status: true,
    };
  }
}
