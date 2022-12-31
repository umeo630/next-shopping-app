/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではdata-testid属性を削除
        reactRemoveProperties: {properties: ['^data-testid$']},
      }
    }

    return compilerConfig
  }) (),
}

module.exports = nextConfig
