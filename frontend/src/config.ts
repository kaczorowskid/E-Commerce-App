interface IConfig {
    backendUrl: string;
    startSitePath: string;
    loginPath: string;
    registerPath: string;
    settings: string;
    userDataEdit: {
        name: string;
        email: string;
        telefonNumber: string;
        birthDate: string;
        myAddress: string;
        shippingAddress: string;
    }
}

export const config: IConfig = {
    backendUrl: 'http://localhost:4200',
    startSitePath: '/index',
    loginPath: '/auth-login',
    registerPath: '/auth-register',
    settings: '/settings-mypersonalities',
    userDataEdit: {
        name: 'name-edit',
        email: 'email-edit',
        telefonNumber: 'telefonNumber-edit',
        birthDate: 'birthDate-edit',
        myAddress: 'myAddress-edit',
        shippingAddress: 'shippingAddress-edit'
    }
}