'use strict';const _0x5e1064=_0x297a;(function(_0x2994e4,_0x514581){const _0xdf850c=_0x297a,_0x24bfbb=_0x2994e4();while(!![]){try{const _0x369fd6=-parseInt(_0xdf850c(0x175))/0x1+parseInt(_0xdf850c(0x160))/0x2*(-parseInt(_0xdf850c(0x16c))/0x3)+-parseInt(_0xdf850c(0x16d))/0x4+parseInt(_0xdf850c(0x146))/0x5+-parseInt(_0xdf850c(0x13f))/0x6*(parseInt(_0xdf850c(0x161))/0x7)+parseInt(_0xdf850c(0x15b))/0x8+-parseInt(_0xdf850c(0x14e))/0x9*(-parseInt(_0xdf850c(0x168))/0xa);if(_0x369fd6===_0x514581)break;else _0x24bfbb['push'](_0x24bfbb['shift']());}catch(_0x3f6cd1){_0x24bfbb['push'](_0x24bfbb['shift']());}}}(_0x2029,0xdccef));var __decorate=this&&this[_0x5e1064(0x15c)]||function(_0x17e696,_0x498e2c,_0x337777,_0x2dfb1b){const _0x2c49e3=_0x5e1064;var _0x3b47d3=arguments[_0x2c49e3(0x151)],_0x1287c2=_0x3b47d3<0x3?_0x498e2c:_0x2dfb1b===null?_0x2dfb1b=Object[_0x2c49e3(0x153)](_0x498e2c,_0x337777):_0x2dfb1b,_0x31dd64;if(typeof Reflect==='object'&&typeof Reflect[_0x2c49e3(0x171)]==='function')_0x1287c2=Reflect[_0x2c49e3(0x171)](_0x17e696,_0x498e2c,_0x337777,_0x2dfb1b);else{for(var _0x3425d2=_0x17e696[_0x2c49e3(0x151)]-0x1;_0x3425d2>=0x0;_0x3425d2--)if(_0x31dd64=_0x17e696[_0x3425d2])_0x1287c2=(_0x3b47d3<0x3?_0x31dd64(_0x1287c2):_0x3b47d3>0x3?_0x31dd64(_0x498e2c,_0x337777,_0x1287c2):_0x31dd64(_0x498e2c,_0x337777))||_0x1287c2;}return _0x3b47d3>0x3&&_0x1287c2&&Object['defineProperty'](_0x498e2c,_0x337777,_0x1287c2),_0x1287c2;},__metadata=this&&this[_0x5e1064(0x158)]||function(_0x2310ec,_0x32cc58){const _0x178e8a=_0x5e1064;if(typeof Reflect===_0x178e8a(0x164)&&typeof Reflect['metadata']==='function')return Reflect[_0x178e8a(0x16a)](_0x2310ec,_0x32cc58);};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports['JwtAuthGuard']=void 0x0;function _0x297a(_0x17dc2c,_0xcb70d9){const _0x202961=_0x2029();return _0x297a=function(_0x297a81,_0x123982){_0x297a81=_0x297a81-0x13f;let _0x1d6b21=_0x202961[_0x297a81];return _0x1d6b21;},_0x297a(_0x17dc2c,_0xcb70d9);}function _0x2029(){const _0x1f29f3=['5oSf6LCi5L2/55SoTmluZUFp44CB5b2T5YmN5Li655uX54mI56iL5bqP44CB5q2j54mI6K+35re75Yqg5L2c6ICFVljvvJogSl9sb25neWFu44CB5oiWcXE6IDkyNzg5ODYzOeOAgeS6pOa1gee+pOivt+a3u+WKoDc1NzI5NjE4OeOAgeivt+aUr+aMgeato+eJiOOAgeivt+WLv+S4iuW9k+WPl+mql++8gQ==','includes','length','split','getOwnPropertyDescriptor','GlobalConfigService','redisCacheService','path','authorization','__metadata','@nestjs/passport','validateToken','13484120qZNnee','__decorate','JWT_SECRET','log','../../modules/redisCache/redisCache.service','6LLxDEu','21QnXIsO','HttpStatus','moduleRef','object','@nestjs/common','亲爱的用户,请登录后继续操作,我们正在等您的到来！','HttpException','38880820qNyEqc','UnauthorizedException','metadata','role','698580eoshTY','6525412CTqivh','@nestjs/core','handleRequest','../utils','decorate','globalConfigService','BAD_REQUEST','RedisCacheService','909035adxTPH','3292512MhFVgx','get','switchToHttp','../../modules/globalConfig/globalConfig.service','extractToken','verify','headers','1080290oHIJpS','checkTokenAuth','Bearer','jwt','getRequest','err:\x20','atob','design:paramtypes','9rDqRfK'];_0x2029=function(){return _0x1f29f3;};return _0x2029();}const redisCache_service_1=require(_0x5e1064(0x15f)),common_1=require(_0x5e1064(0x165)),passport_1=require(_0x5e1064(0x159)),jwt=require('jsonwebtoken'),core_1=require(_0x5e1064(0x16e)),globalConfig_service_1=require(_0x5e1064(0x142)),utils_1=require(_0x5e1064(0x170));let JwtAuthGuard=class JwtAuthGuard extends(0x0,passport_1['AuthGuard'])(_0x5e1064(0x149)){constructor(_0x4f52b5,_0x5d37f3,_0x5ecbe7){const _0x22696c=_0x5e1064;super(),this[_0x22696c(0x155)]=_0x4f52b5,this['moduleRef']=_0x5d37f3,this[_0x22696c(0x172)]=_0x5ecbe7;}async['canActivate'](_0x42ba8f){const _0x5f37a9=_0x5e1064;!this[_0x5f37a9(0x155)]&&(this[_0x5f37a9(0x155)]=this[_0x5f37a9(0x163)][_0x5f37a9(0x140)](redisCache_service_1[_0x5f37a9(0x174)],{'strict':![]}));const _0x2c9353=_0x42ba8f[_0x5f37a9(0x141)]()[_0x5f37a9(0x14a)](),_0x279aa1=this[_0x5f37a9(0x143)](_0x2c9353);_0x2c9353['user']=this[_0x5f37a9(0x15a)](_0x279aa1);const _0x867039=this[_0x5f37a9(0x172)]['getLeiAiToken']();if(_0x867039&&!_0x2c9353[_0x5f37a9(0x156)][_0x5f37a9(0x150)]('getInfo'))throw new common_1[(_0x5f37a9(0x167))]((0x0,utils_1[_0x5f37a9(0x14c)])(_0x5f37a9(0x14f)),common_1['HttpStatus'][_0x5f37a9(0x173)]);return await this['redisCacheService'][_0x5f37a9(0x147)](_0x279aa1,_0x2c9353['user']['id'],_0x2c9353['user'][_0x5f37a9(0x16b)]),!![];}['extractToken'](_0x1eac4a){const _0x4094ae=_0x5e1064;if(!_0x1eac4a[_0x4094ae(0x145)]['authorization'])return null;const _0x56a03c=_0x1eac4a[_0x4094ae(0x145)][_0x4094ae(0x157)][_0x4094ae(0x152)]('\x20');if(_0x56a03c[_0x4094ae(0x151)]!==0x2||_0x56a03c[0x0]!==_0x4094ae(0x148))return null;return _0x56a03c[0x1];}[_0x5e1064(0x15a)](_0xe979a6){const _0x8ebee9=_0x5e1064;try{return jwt[_0x8ebee9(0x144)](_0xe979a6,process['env'][_0x8ebee9(0x15d)]);}catch(_0x105bb0){throw new common_1[(_0x8ebee9(0x167))](_0x8ebee9(0x166),common_1[_0x8ebee9(0x162)]['UNAUTHORIZED']);}}[_0x5e1064(0x16f)](_0x45c5f2,_0x3e4b41,_0x11f712){const _0x513184=_0x5e1064;if(_0x45c5f2||!_0x3e4b41){console[_0x513184(0x15e)](_0x513184(0x14b),_0x45c5f2);throw _0x45c5f2||new common_1[(_0x513184(0x169))]();}return _0x3e4b41;}};JwtAuthGuard=__decorate([(0x0,common_1['Injectable'])(),__metadata(_0x5e1064(0x14d),[redisCache_service_1[_0x5e1064(0x174)],core_1['ModuleRef'],globalConfig_service_1[_0x5e1064(0x154)]])],JwtAuthGuard),exports['JwtAuthGuard']=JwtAuthGuard;