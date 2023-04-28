import { api } from '@services/api'
import rule from './rule'
import getDetailRule from './getDetailRule'

export const postApi = api.injectEndpoints({
  endpoints: build => ({
    getRule: rule(build),
    getDetailRule: getDetailRule(build),
  }),
  overrideExisting: true,
})

export const { useGetRuleQuery, useGetDetailRuleMutation } = postApi
