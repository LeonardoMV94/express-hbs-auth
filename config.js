if (!process.env.DATABASE_URL) {
  console.log('env DATABASE_URL not found')
  process.exit(1)
}

const envs = {
  isProd: process.env.NODE_ENV === 'production',
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3000,
  sessionSecret: process.env.SECRET_SESSION || 'abuela'
}

module.exports = envs
