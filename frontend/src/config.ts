interface IConfig {
    backendUrl: string;
    startSitePath: string;
    loginPath: string;
    registerPath: string;
    settings: string;
}

export const config: IConfig = {
    backendUrl: 'http://localhost:4200',
    startSitePath: '/index',
    loginPath: '/auth-login',
    registerPath: '/auth-register',
    settings: '/settings-mypersonalities'
}