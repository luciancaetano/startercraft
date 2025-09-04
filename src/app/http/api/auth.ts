import { IRequestResponse } from '@app/types/api';
import { ISessionData } from '@app/types/auth';
import APIClient from '@utils/apiClient';

class AuthApi extends APIClient {
  public async signup(
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    contactPhone?: string,
    professionType?: string,
  ): Promise<IRequestResponse<ISessionData>> {
    const response = await this.request({
      endPoint: '/auth/signup',
      method: 'POST',
      body: {
        name,
        email,
        password,
        passwordConfirmation,
        contactPhone,
        professionType,
      },
    });

    return response.data;
  }

  public async login(email: string, password: string): Promise<IRequestResponse<ISessionData>> {
    const response = await this.request({
      endPoint: '/auth/login',
      method: 'POST',
      body: {
        email,
        password,
      },
    });

    return response.data;
  }
}

export default new AuthApi();
