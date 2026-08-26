import { defineCliConfig } from 'sanity/cli'
import { dataset, projectId } from './src/sanity/env.js'

export default defineCliConfig({ api: { projectId, dataset } })

