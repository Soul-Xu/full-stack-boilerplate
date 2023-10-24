import { Controller, Get, Post, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ViewService } from './view.service';

@Controller('/')
@ApiTags('Views')
export class ViewController {
  constructor(private viewService: ViewService) {}

  // page
  @Get('home')
  @ApiTags('Home')
  @ApiResponse({ status: 200, description: '首页' })
  public async showHome(@Req() req: Request, @Res() res: Response) {
    await this.viewService.handler(req, res);
  }

  @Get('event')
  @ApiTags('Event')
  @ApiResponse({ status: 200, description: '首页' })
  public async showEvent(@Req() req: Request, @Res() res: Response) {
    await this.viewService.handler(req, res);
  }

  @Get('center')
  @ApiTags('Center')
  @ApiResponse({ status: 200, description: '首页' })
  public async showCenter(@Req() req: Request, @Res() res: Response) {
    await this.viewService.handler(req, res);
  }

  @Post('login')
  @ApiTags('Home')
  public async showLogin(@Req() req: Request, @Res() res: Response) {
    await this.viewService.handler(req, res);
  }

  @Get('_next*')
  @ApiTags('Others')
  public async assets(@Req() req: Request, @Res() res: Response) {
    await this.viewService.handler(req, res);
  }

  @Get('favicon.ico')
  @ApiTags('Others')
  public async favicon(@Req() req: Request, @Res() res: Response) {
    await this.viewService.handler(req, res);
  }

  // api
  @ApiTags('Test')
  @Get('/polymerization/homepage')
  public async testApi(@Req() req: Request, @Res() res: Response) {
    console.log('11111');
    return {
      content: 'api success',
    };
  }
}
