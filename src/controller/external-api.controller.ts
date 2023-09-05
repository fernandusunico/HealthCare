import { Controller, Get } from '@nestjs/common';
import { ExternalApiService } from '../service/external-api.service';

@Controller('external-api')
export class ExternalApiController {
  constructor(private readonly externalApiService: ExternalApiService) {}

  @Get('data')
  async fetchData() {
    return this.externalApiService.fetchData();
  }
}
