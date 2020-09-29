interface IConfig {
    startSitePath: string;
    loginPath: string;
    registerPath: string;
}

export const config: IConfig = {
    startSitePath: '/index',
    loginPath: '/auth-login',
    registerPath: '/auth-register'
}