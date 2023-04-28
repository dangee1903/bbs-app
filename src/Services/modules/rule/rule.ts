import { TRules } from '@model/Rule/RuleType'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'

export default (build: EndpointBuilder<any, any, any>) =>
  build.query<TListRule, void>({
    query: () => ({
      url: 'regulations',
      method: 'GET',
    }),
  })

type TListRule = {
  data: {
    regulations: TRules
  }
}
