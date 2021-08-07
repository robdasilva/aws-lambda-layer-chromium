import { App } from '@aws-cdk/core'
import { name } from '../package.json'
import AWSLambdaLayerChromiumStack from './stack'

const app = new App()

new AWSLambdaLayerChromiumStack(app, 'AWSLambdaLayerChromium', {
  stackName: name,
})

app.synth()
