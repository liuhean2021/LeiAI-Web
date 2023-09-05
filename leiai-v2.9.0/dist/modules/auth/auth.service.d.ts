import { LoginByPhoneDto } from './dto/loginByPhone.dt';
import { GlobalConfigService } from '@/modules/globalConfig/globalConfig.service';
import { VerificationService } from './../verification/verification.service';
import { VerifyCodeDto } from './../verification/dto/verifyCode.dto';
import { UserLoginDto } from './dto/authLogin.dto';
import { UserEntity } from './../user/user.entity';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserRegisterDto } from './dto/authRegister.dto';
import { MailerService } from '../mailer/mailer.service';
import { UserBalanceService } from '../userBalance/userBalance.service';
import { UpdatePasswordDto } from './dto/updatePassword.dto';
import { ConfigEntity } from '../globalConfig/config.entity';
import { Repository } from 'typeorm';
import { RedisCacheService } from '../redisCache/redisCache.service';
import { UpdatePassByOtherDto } from './dto/updatePassByOther.dto';
import { SendPhoneCodeDto } from './dto/sendPhoneCode.dto';
import { UserRegisterByPhoneDto } from './dto/userRegisterByPhone.dto';
export declare class AuthService {
    private readonly configEntity;
    private userService;
    private jwtService;
    private mailerService;
    private readonly verificationService;
    private readonly userBalanceService;
    private readonly redisCacheService;
    private readonly globalConfigService;
    private ipAddress;
    constructor(configEntity: Repository<ConfigEntity>, userService: UserService, jwtService: JwtService, mailerService: MailerService, verificationService: VerificationService, userBalanceService: UserBalanceService, redisCacheService: RedisCacheService, globalConfigService: GlobalConfigService);
    onModuleInit(): Promise<void>;
    register(body: UserRegisterDto, req: Request): Promise<any>;
    registerByPhone(body: UserRegisterByPhoneDto, req: Request): Promise<void>;
    login(user: UserLoginDto, req: Request): Promise<string>;
    loginByPhone(body: LoginByPhoneDto, req: Request): Promise<string>;
    loginByOpenId(user: UserEntity, req: Request): Promise<string>;
    getInfo(req: Request): Promise<{
        userInfo: any;
        userBalance: any;
    }>;
    activateAccount(params: VerifyCodeDto, res: Response): Promise<void>;
    updatePassword(req: Request, body: UpdatePasswordDto): Promise<string>;
    updatePassByOther(req: Request, body: UpdatePassByOtherDto): Promise<string>;
    getIp(): void;
    captcha(parmas: any): Promise<{
        svgCode: string;
        code: string;
    }>;
    sendPhoneCode(body: SendPhoneCodeDto): Promise<string>;
}
