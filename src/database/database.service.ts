import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnApplicationShutdown, OnModuleInit {
  private isConnected = false;

  onModuleInit() {
    this.isConnected = true;
    console.log('DataBase Connected');
  }

  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log('database disconnected :', signal);
  }

  getStatus() {
    return this.isConnected ? 'connected' : 'disconnected';
  }
}
