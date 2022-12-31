import { fetcher } from './../../utils/index'
import { ApiContext, User } from 'type/data'
export type SigninParams = {
  /**
   * ユーザー名
   */
  username: string

  /**
   * パスワード
   */
  password: string
}

/**
 * 認証API(サインイン)
 * @param context APIコンテクスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signin
