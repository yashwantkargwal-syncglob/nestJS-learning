import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
  constructor(private ConfigService: ConfigService) {}
  getDbUrl() {
    return this.ConfigService.get<String>('DATABASE_URL');
  }
}
