import { Context, Schema } from 'koishi'

export const name = 'not-command'

export interface Config {
  feedback: string
}

export const Config: Schema<Config> = Schema.object({
  feedback: Schema.string()
    .required()
    .description('反馈消息')
})

export function apply(ctx: Context, config: Config) {
  ctx.middleware((session, next) => {
    if (session.stripped.atSelf) {
      return next(config.feedback)
    } else {
      return next()
    }
  })
}
