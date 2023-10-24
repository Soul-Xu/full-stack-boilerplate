import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
// import { ApiExcludeController } from '@nestjs/swagger';
// import { HttpException } from '@nestjs/common';
// import { HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/server/core/filter/http-exception.filter';
import { LoggingInterceptor } from 'src/server/core/interceptor/logging.interceptor';

@Controller('home')
@UseInterceptors(LoggingInterceptor)
@ApiTags('Home')
export class HomeController {
  constructor(
    private readonly homeService: HomeService,
    private readonly http: HttpService,
  ) {}

  @Post()
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  create(@Body(new ValidationPipe()) createHomeDto: CreateHomeDto) {
    return this.homeService.create(createHomeDto);
  }

  @Get()
  findAll() {
    return this.homeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.homeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHomeDto: UpdateHomeDto) {
    return this.homeService.update(+id, updateHomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.homeService.remove(+id);
  }

  // @ApiExcludeController()
  @Get('/polymerization/homepage')
  getApi(): Observable<AxiosResponse<any>> {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    console.log('api-home');
    return this.http
      .get('https://portalserver-uat.musegaming.co/polymerization/homepage')
      .pipe(map((response) => response.data));
  }
}
